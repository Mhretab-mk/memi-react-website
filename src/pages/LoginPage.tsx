import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"
import { Label } from "../components/ui/label"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  remember: z.boolean().optional(),
})

type LoginForm = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: { remember: false },
  })

  function onSubmit() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate login
        resolve(true)
      }, 1200)
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-background dark:via-blue-950 dark:to-blue-900 px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
        className="w-full max-w-md"
      >
        <Card className="shadow-xl border-0 bg-white/90 dark:bg-blue-950/90 dark:backdrop-blur rounded-2xl">
          <CardHeader className="text-center pb-2">
            <h1 className="text-3xl font-extrabold text-blue-700 dark:text-blue-300 mb-1 tracking-tight">Sign in</h1>
            <p className="text-gray-500 dark:text-blue-100 text-base">Welcome back! Please login to your account.</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-gray-700 dark:text-blue-100">Email</Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  {...register("email")}
                  className={
                    "mt-1 dark:bg-blue-900 dark:text-blue-100 dark:placeholder:text-blue-300 dark:border-blue-800" +
                    (errors.email ? " border-red-500 focus:ring-red-400 dark:focus:ring-red-500" : " focus:ring-blue-400 dark:focus:ring-blue-600")
                  }
                  aria-invalid={!!errors.email}
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <span id="email-error" className="text-xs text-red-500 dark:text-red-400 mt-1 block">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="password" className="text-gray-700 dark:text-blue-100">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    {...register("password")}
                    className={
                      "mt-1 pr-10 dark:bg-blue-900 dark:text-blue-100 dark:placeholder:text-blue-300 dark:border-blue-800" +
                      (errors.password ? " border-red-500 focus:ring-red-400 dark:focus:ring-red-500" : " focus:ring-blue-400 dark:focus:ring-blue-600")
                    }
                    aria-invalid={!!errors.password}
                    aria-describedby="password-error"
                  />
                  <button
                    type="button"
                    tabIndex={-1}
                    className="absolute right-2 top-2 text-gray-400 dark:text-blue-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && (
                  <span id="password-error" className="text-xs text-red-500 dark:text-red-400 mt-1 block">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" {...register("remember")} className="dark:border-blue-800" />
                  <Label htmlFor="remember" className="text-gray-600 dark:text-blue-200 cursor-pointer select-none">
                    Remember me
                  </Label>
                </div>
                <Link to="/" className="text-blue-600 dark:text-blue-300 hover:underline text-sm font-medium">
                  Go Home
                </Link>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 dark:from-blue-800 dark:to-blue-600 dark:hover:from-blue-900 dark:hover:to-blue-700 text-white font-semibold py-2 rounded-xl shadow-lg transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
} 