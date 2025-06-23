import { useState, useRef, useMemo, useEffect } from "react"
import { Button } from "../../components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "../../components/ui/dialog"
import { useForm } from "react-hook-form"
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "../../components/ui/table"
import { Plus, Image as ImageIcon } from "lucide-react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../components/ui/select"
import { AnimatePresence, motion } from "framer-motion"

// Dummy data for demonstration
const initialCourses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Learn the basics of web development including HTML, CSS, and JavaScript.",
    duration: "8 weeks",
    students: "1.2k",
    level: "Beginner",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Web+Development",
    rating: 4.8,
    reviews: 245
  },
  {
    id: 2,
    title: "Advanced React Development",
    description: "Master React with advanced concepts, hooks, and state management.",
    duration: "10 weeks",
    students: "850",
    level: "Advanced",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=React+Development",
    rating: 4.9,
    reviews: 189
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    description: "Learn modern design principles and create beautiful user interfaces.",
    duration: "6 weeks",
    students: "1.5k",
    level: "Intermediate",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=UI/UX+Design",
    rating: 4.7,
    reviews: 312
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications using React Native.",
    duration: "12 weeks",
    students: "950",
    level: "Intermediate",
    image: "https://placehold.co/600x400/2563eb/ffffff?text=Mobile+Development",
    rating: 4.6,
    reviews: 178
  },
]

export default function Courses() {
  const [open, setOpen] = useState(false)
  const [courses, setCourses] = useState(initialCourses)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const [imagePreview, setImagePreview] = useState<string>("")
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  // Filter and paginate courses
  const filteredCourses = useMemo(() => {
    return courses.filter(course =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.duration.toLowerCase().includes(search.toLowerCase()) ||
      course.students.toLowerCase().includes(search.toLowerCase()) ||
      course.level.toLowerCase().includes(search.toLowerCase())
    )
  }, [courses, search])

  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / pageSize))
  const paginatedCourses = useMemo(() => {
    const start = (page - 1) * pageSize
    return filteredCourses.slice(start, start + pageSize)
  }, [filteredCourses, page, pageSize])

  // Reset to first page on search
  useEffect(() => { setPage(1) }, [search])

  const onSubmit = (data: any) => {
    setCourses([
      ...courses,
      {
        ...data,
        id: courses.length + 1,
        image: imagePreview || data.image,
      },
    ])
    setOpen(false)
    reset()
    setImagePreview("")
  }

  return (
    <div className="p-6 md:p-10 w-full min-h-screen bg-white dark:bg-blue-950 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-100">Courses</h1>
        <div className="flex flex-col md:flex-row md:items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search courses..."
            className="w-full md:w-72 px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-blue-400 outline-none transition shadow-sm"
          />
          <div className="flex items-center gap-2">
            <label htmlFor="page-size" className="text-sm text-blue-900 dark:text-blue-100 font-medium">Show</label>
            <select
              id="page-size"
              value={pageSize}
              onChange={e => setPageSize(Number(e.target.value))}
              className="px-2 py-1 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-blue-400 outline-none transition shadow-sm"
            >
              {[5, 10, 20, 50].map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
            <span className="text-sm text-blue-900 dark:text-blue-100 font-medium">entries</span>
          </div>
        </div>
        <Button onClick={() => setOpen(true)} className="gap-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg hover:from-blue-600 hover:to-blue-800">
          <Plus className="w-5 h-5" /> Add Course
        </Button>
      </div>
      <div className="bg-white dark:bg-blue-900 rounded-2xl shadow-2xl p-4 md:p-8 transition-all overflow-x-auto">
        <Table className="min-w-[700px]">
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Students</TableHead>
              <TableHead>Level</TableHead>
              <TableHead>Rating</TableHead>
              <TableHead>Reviews</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedCourses.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-blue-700 dark:text-blue-200">No courses found.</TableCell>
              </TableRow>
            ) : (
              paginatedCourses.map((course) => (
                <TableRow key={course.id} className="hover:bg-blue-50 dark:hover:bg-blue-800/40 transition">
                  <TableCell className="font-semibold text-blue-900 dark:text-blue-100 max-w-[180px] truncate">{course.title}</TableCell>
                  <TableCell className="text-blue-700 dark:text-blue-300">{course.duration}</TableCell>
                  <TableCell className="text-blue-700 dark:text-blue-300">{course.students}</TableCell>
                  <TableCell>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100 text-xs font-bold shadow">
                      {course.level}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1 font-semibold text-blue-900 dark:text-blue-100">
                      {course.rating}
                    </span>
                  </TableCell>
                  <TableCell className="text-blue-700 dark:text-blue-300">{course.reviews}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        {/* Pagination */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
          <span className="text-sm text-blue-900 dark:text-blue-100">
            Showing {paginatedCourses.length === 0 ? 0 : (page - 1) * pageSize + 1}
            -{(page - 1) * pageSize + paginatedCourses.length} of {filteredCourses.length} courses
          </span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="px-3 py-1 rounded-lg border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-100 disabled:opacity-50"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
            >
              Prev
            </Button>
            <span className="px-3 py-1 text-blue-900 dark:text-blue-100 font-semibold">Page {page} of {totalPages}</span>
            <Button
              variant="outline"
              className="px-3 py-1 rounded-lg border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-100 disabled:opacity-50"
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setImagePreview("") }}>
        <AnimatePresence>
          {open && (
            <DialogContent
              maxWidth="max-w-4xl"
              className="w-full rounded-2xl p-0 overflow-hidden shadow-2xl animate-none top-[7vh] translate-y-0"
              style={{ top: '7vh', position: 'fixed', left: '50%', transform: 'translateX(-50%)', boxShadow: '0 8px 40px rgba(0,0,0,0.18)' }}
              showCloseButton={false}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 28 } }}
                exit={{ opacity: 0, scale: 0.96, y: 40, transition: { duration: 0.18 } }}
                transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                style={{ outline: 'none', position: 'relative' }}
              >
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1, transition: { duration: 0.18 } }}
                      exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.18 } }}
                      className="absolute right-6 top-6 z-10"
                    >
                      <DialogClose asChild>
                        <button
                          className="rounded-full bg-white/80 dark:bg-blue-900/80 p-2 shadow-lg hover:bg-white dark:hover:bg-blue-800 transition-all border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-100 hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          aria-label="Close"
                          type="button"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </DialogClose>
                    </motion.div>
                  )}
                </AnimatePresence>
                <DialogHeader className="p-4 border-b border-blue-100 dark:border-blue-900 bg-gradient-to-r from-blue-600 to-blue-800">
                  <DialogTitle className="text-white text-2xl font-bold">Add New Course</DialogTitle>
                </DialogHeader>
                <div className="max-h-[70vh] overflow-y-auto">
                  <form onSubmit={handleSubmit(onSubmit)} className="p-10 space-y-10 bg-white dark:bg-blue-950">
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                      <div className="space-y-6">
                        <div>
                          <label className="block text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">Title</label>
                          <input
                            {...register("title", { required: "Title is required" })}
                            className="w-full px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-blue-400 outline-none transition text-base shadow-sm"
                            placeholder="Enter course title"
                          />
                          {errors.title && <span className="text-xs text-red-500 mt-1">{errors.title.message as string}</span>}
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">Duration</label>
                            <input
                              {...register("duration", { required: "Duration is required" })}
                              className="w-full px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-blue-400 outline-none transition text-base shadow-sm"
                              placeholder="e.g. 8 weeks"
                            />
                            {errors.duration && <span className="text-xs text-red-500 mt-1">{errors.duration.message as string}</span>}
                          </div>
                          <div>
                            <label className="block text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">Students</label>
                            <input
                              {...register("students", { required: "Students is required" })}
                              className="w-full px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-blue-400 outline-none transition text-base shadow-sm"
                              placeholder="e.g. 1.2k"
                            />
                            {errors.students && <span className="text-xs text-red-500 mt-1">{errors.students.message as string}</span>}
                          </div>
                        </div>
                        <div>
                          <label className="block text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">Level</label>
                          <Select
                            value={undefined}
                            onValueChange={val => {
                              const event = { target: { name: 'level', value: val } };
                              // @ts-ignore
                              register('level').onChange(event)
                            }}
                          >
                            <SelectTrigger className="w-full px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-blue-400 outline-none transition text-base shadow-sm">
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl shadow-xl bg-white dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
                              <SelectItem value="Beginner" className="font-semibold">Beginner</SelectItem>
                              <SelectItem value="Intermediate" className="font-semibold">Intermediate</SelectItem>
                              <SelectItem value="Advanced" className="font-semibold">Advanced</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.level && <span className="text-xs text-red-500 mt-1">{errors.level.message as string}</span>}
                        </div>

                        <div>
                          <label className="block text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">Description</label>
                          <textarea
                            {...register("description", { required: "Description is required" })}
                            className="w-full px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-blue-400 outline-none transition min-h-[100px] text-base shadow-sm"
                            placeholder="Enter course description"
                          />
                          {errors.description && <span className="text-xs text-red-500 mt-1">{errors.description.message as string}</span>}
                        </div>

                      </div>
                      <div className="flex flex-col items-center justify-center h-full w-full">
                        <label className="block text-base font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2"><ImageIcon className="w-5 h-5" /> Course Image</label>
                        <div
                          className={"relative flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-2xl cursor-pointer transition-all " +
                            (imagePreview ? "border-blue-500 bg-blue-50 dark:bg-blue-900" : "border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900")}
                          onClick={() => fileInputRef.current?.click()}
                          style={{ minHeight: 100 }}
                        >
                          {imagePreview ? (
                            <img src={imagePreview} alt="Preview" className="object-contain h-full max-h-28 rounded-xl" />
                          ) : (
                            <div className="flex flex-col items-center justify-center h-full text-blue-400 dark:text-blue-600">
                              <ImageIcon className="w-10 h-10 mb-2" />
                              <span className="font-semibold">Click or drag & drop to upload</span>
                              <span className="text-xs text-blue-400">PNG, JPG, JPEG, GIF up to 2MB</span>
                            </div>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            className="hidden"
                            onChange={async (e) => {
                              const file = e.target.files?.[0]
                              if (file) {
                                const reader = new FileReader()
                                reader.onload = (ev) => {
                                  setImagePreview(ev.target?.result as string)
                                }
                                reader.readAsDataURL(file)
                              }
                            }}
                          />
                        </div>
                        {errors.image && <span className="text-xs text-red-500 mt-2">{errors.image.message as string}</span>}
                      </div>
                    </div>
                    <div className="flex justify-end gap-4 pt-6">
                      <Button type="button" variant="ghost" onClick={() => { setOpen(false); setImagePreview("") }} className="text-base px-8 py-3">
                        Cancel
                      </Button>
                      <Button type="submit" className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-md hover:from-blue-600 hover:to-blue-800 text-base px-8 py-3">
                        Add Course
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </DialogContent>
          )}
        </AnimatePresence>
      </Dialog>
    </div>
  )
} 