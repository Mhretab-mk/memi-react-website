import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white dark:bg-background px-4 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="flex flex-col items-center text-center"
      >
        <svg
          className="h-32 w-32 mb-8 animate-bounce-slow text-blue-200 drop-shadow-xl"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="100" cy="100" rx="90" ry="90" fill="url(#paint0_radial)" />
          <ellipse cx="70" cy="90" rx="10" ry="18" fill="#e0e7ef" />
          <ellipse cx="130" cy="90" rx="10" ry="18" fill="#e0e7ef" />
          <ellipse cx="100" cy="140" rx="30" ry="10" fill="#e0e7ef" fillOpacity="0.7" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(100 100) rotate(90) scale(90)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e0e7ef" />
              <stop offset="1" stopColor="#cbd5e1" />
            </radialGradient>
          </defs>
        </svg>
        <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white drop-shadow-lg mb-4 tracking-tight">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-blue-100 mb-2">
          Oops! Page Not Found
        </h2>
        <p className="max-w-xl text-lg md:text-xl text-gray-500 dark:text-blue-200 mb-8">
          The page you are looking for doesn't exist or has been moved.<br />
          Let's get you back to something awesome!
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300"
        >
          <ArrowLeft className="h-5 w-5" />
          Go Home
        </Link>
      </motion.div>
      <style>{`
        .animate-bounce-slow {
          animation: bounce 2.5s infinite cubic-bezier(.28,.84,.42,1);
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-24px); }
        }
      `}</style>
    </div>
  )
} 