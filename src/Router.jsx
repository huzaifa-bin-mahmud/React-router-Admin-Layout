import { createBrowserRouter } from "react-router";

import Home from "./pages/main/Home";
import About from "./pages/main/About";
import Blog from "./pages/main/Blog";
import Mainlayout from "./layouts/Mainlayout";
import AdminLayout from "./layouts/AdminLayout";
import AllPost from "./pages/admin/AllPost";
import CreatePost from "./pages/admin/CreatePost";
import EditPost from "./pages/admin/EditPost";

const router = createBrowserRouter([
  {
    //main layout
    path: "/",
    element: <Mainlayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
  {
    //admin layout
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <div>Admin Dashboard</div>,
      },
      {
        path: "/admin/all-post",
        element: <AllPost/>
      },
      {
        path: "/admin/create-post",
        element: <CreatePost/>
      },
      {
        path: "/admin/edit-post",
        element: <EditPost/>
      },
    ],
  },
]);

export default router;
