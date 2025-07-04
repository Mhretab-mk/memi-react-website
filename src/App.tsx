import { BrowserRouter, useRoutes } from "react-router-dom"
import routes from "./router/routes"

function AppRoutes() {
  return useRoutes(routes)
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
