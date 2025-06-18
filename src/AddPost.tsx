import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addPost } from './api/posts.ts'
import type { Post } from './api/posts.ts'

// Zod schema (note: file validation is limited, see below)
const postSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  image: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, 'Max file size is 5MB'), // max 5MB
})

type PostInput = z.infer<typeof postSchema>

export function AddPost({ userId }: { userId: number }) {
  const queryClient = useQueryClient()

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<PostInput>({
    resolver: zodResolver(postSchema),
  })

  const mutation = useMutation({
    mutationFn: addPost,
    onMutate: async (newPost) => {
      await queryClient.cancelQueries({ queryKey: ['posts', userId] })
      const previousPosts = queryClient.getQueryData<Post[]>(['posts', userId])

      // Optimistically add a fake post to cache:
      queryClient.setQueryData<Post[]>(['posts', userId], (old = []) => [
        {
          id: Date.now(),
          userId,
          title: newPost.title,
          description: newPost.description,
          imageUrl: URL.createObjectURL(newPost.image),
        },
        ...old,
      ])

      return { previousPosts }
    },
    onError: (_err, _newPost, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(['posts', userId], context.previousPosts)
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['posts', userId] })
    },
  })

  const onSubmit = (data: PostInput) => {
    mutation.mutate({ userId, ...data })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
      <div>
        <label>Title:</label>
        <input {...register('title')} disabled={isSubmitting || mutation.isPending} />
        {errors.title && <p style={{ color: 'red' }}>{errors.title.message}</p>}
      </div>

      <div>
        <label>Description:</label>
        <textarea {...register('description')} disabled={isSubmitting || mutation.isPending} />
        {errors.description && <p style={{ color: 'red' }}>{errors.description.message}</p>}
      </div>

      <div>
        <label>Image:</label>
        <Controller
          control={control}
          name="image"
          render={({ field: { onChange, value, ...field } }) => (
            <input
              {...field}
              type="file"
              accept="image/*"
              onChange={(e) => onChange(e.target.files?.[0])}
              disabled={isSubmitting || mutation.isPending}
            />
          )}
        />
        {errors.image && <p style={{ color: 'red' }}>{errors.image.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting || mutation.isPending}>
        {mutation.isPending ? 'Adding...' : 'Add Post'}
      </button>

      {mutation.isError && <p style={{ color: 'red' }}>Error adding post.</p>}
    </form>
  )
}
