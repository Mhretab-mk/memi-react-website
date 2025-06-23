import { useState, useRef, useMemo, useEffect } from "react"
import { Button } from "../../components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "../../components/ui/dialog"
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "../../components/ui/table"
import { Plus, Image as ImageIcon } from "lucide-react"
import { useForm } from "react-hook-form"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../../components/ui/select"
import { AnimatePresence, motion } from "framer-motion"

const initialNewsEvents = [
  {
    id: 1,
    type: "news",
    title: "Mekelle Institute of Technology Launches New Research Center",
    description: "A state-of-the-art research facility dedicated to advancing technology and innovation in Ethiopia.",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=60",
    featured: true,
    views: 1250
  },
  {
    id: 2,
    type: "event",
    title: "Annual Tech Innovation Summit 2024",
    description: "Join industry leaders and innovators for a day of groundbreaking discussions and networking.",
    date: "2024-04-01",
    time: "09:00 AM",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=60",
    featured: false,
    views: 980
  },
]

export default function NewsEvents() {
  const [open, setOpen] = useState(false)
  const [newsEvents, setNewsEvents] = useState(initialNewsEvents)
  const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm()
  const [imagePreview, setImagePreview] = useState<string>("")
  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [search, setSearch] = useState("")
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(5)

  // Filter and paginate
  const filtered = useMemo(() => newsEvents.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()) ||
    (item.type?.toLowerCase().includes(search.toLowerCase()) ?? false)
  ), [newsEvents, search])
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize
    return filtered.slice(start, start + pageSize)
  }, [filtered, page, pageSize])
  useEffect(() => { setPage(1) }, [search, pageSize])

  const onSubmit = (data: any) => {
    setNewsEvents([
      ...newsEvents,
      {
        ...data,
        id: newsEvents.length + 1,
        featured: !!data.featured,
        views: parseInt(data.views, 10) || 0,
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
        <h1 className="text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-100">News & Events</h1>
        <div className="flex flex-col md:flex-row md:items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search..."
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
          <Plus className="w-4 h-4" /> Add News/Event
        </Button>
      </div>
      <div className="bg-white dark:bg-blue-900 rounded-2xl shadow-2xl p-4 md:p-8 transition-all overflow-x-auto">
        <Table className="min-w-[700px]">
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Featured</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginated.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-blue-700 dark:text-blue-200">No news or events found.</TableCell>
              </TableRow>
            ) : (
              paginated.map((item) => (
                <TableRow key={item.id} className="hover:bg-blue-50 dark:hover:bg-blue-800/40 transition">
                  <TableCell className="font-semibold text-blue-900 dark:text-blue-100">{item.type}</TableCell>
                  <TableCell className="text-blue-800 dark:text-blue-200 max-w-[120px] break-words whitespace-normal">{item.title}</TableCell>
                  <TableCell className="text-blue-700 dark:text-blue-300">{item.date}</TableCell>
                  <TableCell className="text-blue-700 dark:text-blue-300">{item.time || "-"}</TableCell>
                  <TableCell>
                    <span className={item.featured ? "inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-100 text-xs font-bold shadow" : "inline-block px-3 py-1 rounded-full bg-gray-200 text-gray-700 dark:bg-blue-900 dark:text-blue-300 text-xs font-bold shadow"}>
                      {item.featured ? "Yes" : "No"}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
        {/* Pagination */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6">
          <span className="text-sm text-blue-900 dark:text-blue-100">
            Showing {paginated.length === 0 ? 0 : (page - 1) * pageSize + 1}
            -{(page - 1) * pageSize + paginated.length} of {filtered.length} entries
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
      {/* Add News/Event Modal */}
      <Dialog open={open} onOpenChange={(v) => { setOpen(v); if (!v) setImagePreview("") }}>
        <AnimatePresence>
          {open && (
            <DialogContent
              maxWidth="max-w-3xl"
              className="w-full rounded-2xl p-0 overflow-hidden shadow-2xl animate-none"
              style={{ 
                position: 'fixed', 
                left: '50%', 
                top: '50%', 
                transform: 'translate(-50%, -50%)', 
                maxHeight: '85vh',
                boxShadow: '0 8px 40px rgba(0,0,0,0.18)'
              }}
              showCloseButton={false}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 0.18 } }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.18 } }}
                style={{ outline: 'none', position: 'relative' }}
                className="flex flex-col h-full"
              >
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
                <DialogHeader className="p-4 border-b border-blue-100 dark:border-blue-900 bg-gradient-to-r from-blue-600 to-blue-800 flex-shrink-0">
                  <DialogTitle className="text-white text-2xl font-bold">Add News/Event</DialogTitle>
                </DialogHeader>
                <div className="overflow-y-auto" style={{ maxHeight: 'calc(85vh - 100px)' }}>
                  <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6 bg-white dark:bg-blue-950">
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                      <div className="space-y-6">
                        <div>
                          <label className="block text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">Type</label>
                          <Select
                            value={undefined}
                            onValueChange={val => setValue("type", val)}
                          >
                            <SelectTrigger className="w-full px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-blue-400 outline-none transition text-base shadow-sm">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl shadow-xl bg-white dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
                              <SelectItem value="news" className="font-semibold">News</SelectItem>
                              <SelectItem value="event" className="font-semibold">Event</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors.type && <span className="text-xs text-red-500 mt-1">{errors.type.message as string}</span>}
                        </div>
                        <div>
                          <label className="block text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">Title</label>
                          <input
                            {...register("title", { required: "Title is required" })}
                            className="w-full px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-blue-400 outline-none transition text-base shadow-sm"
                            placeholder="Enter title"
                          />
                          {errors.title && <span className="text-xs text-red-500 mt-1">{errors.title.message as string}</span>}
                        </div>
                        <div>
                          <label className="block text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">Description</label>
                          <textarea
                            {...register("description", { required: "Description is required" })}
                            className="w-full px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-blue-400 outline-none transition min-h-[80px] text-base shadow-sm"
                            placeholder="Enter description"
                          />
                          {errors.description && <span className="text-xs text-red-500 mt-1">{errors.description.message as string}</span>}
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">Date</label>
                            <input
                              type="date"
                              {...register("date", { required: "Date is required" })}
                              className="w-full px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-blue-400 outline-none transition text-base shadow-sm"
                            />
                            {errors.date && <span className="text-xs text-red-500 mt-1">{errors.date.message as string}</span>}
                          </div>
                          <div>
                            <label className="block text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">Time</label>
                            <input
                              type="time"
                              {...register("time")}
                              className="w-full px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-blue-400 outline-none transition text-base shadow-sm"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">Featured</label>
                            <select
                              {...register("featured")}
                              className="w-full px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-blue-400 outline-none transition text-base shadow-sm"
                            >
                              <option value="false">No</option>
                              <option value="true">Yes</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">Views</label>
                            <input
                              type="number"
                              min="0"
                              {...register("views", { required: "Views is required", min: 0 })}
                              className="w-full px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-blue-400 outline-none transition text-base shadow-sm"
                              placeholder="e.g. 1000"
                            />
                            {errors.views && <span className="text-xs text-red-500 mt-1">{errors.views.message as string}</span>}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">Location</label>
                            <input
                              {...register("location")}
                              className="w-full px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-blue-400 outline-none transition text-base shadow-sm"
                              placeholder="Enter location"
                            />
                          </div>
                          <div>
                            <label className="block text-base font-semibold text-blue-900 dark:text-blue-100 mb-2">Category</label>
                            <Select
                              value={undefined}
                              onValueChange={val => setValue("category", val)}
                            >
                              <SelectTrigger className="w-full px-5 py-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-100 focus:ring-2 focus:ring-blue-400 outline-none transition text-base shadow-sm">
                                <SelectValue placeholder="Select category" />
                              </SelectTrigger>
                              <SelectContent className="rounded-xl shadow-xl bg-white dark:bg-blue-950 border border-blue-200 dark:border-blue-800">
                                <SelectItem value="academic" className="font-semibold">Academic</SelectItem>
                                <SelectItem value="research" className="font-semibold">Research</SelectItem>
                                <SelectItem value="campus" className="font-semibold">Campus Life</SelectItem>
                                <SelectItem value="community" className="font-semibold">Community</SelectItem>
                                <SelectItem value="other" className="font-semibold">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-center h-full w-full">
                        <label className="block text-base font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2"><ImageIcon className="w-5 h-5" /> Image</label>
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
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-4 mt-8">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setOpen(false);
                          reset();
                          setImagePreview("");
                        }}
                        className="px-6 py-2 rounded-xl border-2 border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="px-6 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg hover:from-blue-600 hover:to-blue-800 transition-colors"
                      >
                        Add News/Event
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