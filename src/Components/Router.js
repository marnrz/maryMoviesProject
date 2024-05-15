import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/homePage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
