import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./routes/App"
import ErrorPage from "./routes/ErrorPage"
import Men from "../src/components/Men"
import Women from "../src/components/Women"
import Collections from "../src/components/Collections"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Men",
        element: <Men />,
      },
      {
        path: "/Women",
        element: <Women />,
      },
      {
        path: "/Collections",
        element: <Collections />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
