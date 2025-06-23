import type { RouteObject } from "react-router-dom"
import HomePage from "../pages/HomePage"
import NotFound from "../pages/NotFound"
import LoginPage from "../pages/LoginPage"
import DashboardLayout from "../pages/DashboardLayout"
import DashboardHome from "../pages/dashboard/DashboardHome"
import Users from "../pages/dashboard/Users"
import Roles from "../pages/dashboard/Roles"
import ReportsSales from "../pages/dashboard/ReportsSales"
import ReportsActivity from "../pages/dashboard/ReportsActivity"
import Projects from "../pages/dashboard/Projects"
import Tasks from "../pages/dashboard/Tasks"
import Calendar from "../pages/dashboard/Calendar"
import Courses from "../pages/dashboard/Courses"
import NewsEvents from "../pages/dashboard/NewsEvents"

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { path: "", element: <DashboardHome /> },
      { path: "users", element: <Users /> },
      { path: "roles", element: <Roles /> },
      { path: "reports/sales", element: <ReportsSales /> },
      { path: "reports/activity", element: <ReportsActivity /> },
      { path: "projects", element: <Projects /> },
      { path: "courses", element: <Courses /> },
      { path: "news-events", element: <NewsEvents /> },
      { path: "tasks", element: <Tasks /> },
      { path: "calendar", element: <Calendar /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]

export default routes 