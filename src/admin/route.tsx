
import AdminLayout from "./AdminLayout"
import AdminPage from "./AdminPage"
import { Suspense } from "react";
import AdminLogin from "./login/AdminLogin";

const adminRoute = [
  {
    path: "/admin",
    element: (
        <AdminLayout />
    ),
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
  {
    path: "/Admin-login",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <AdminLogin />
      </Suspense>
    ),
  },
]

export default adminRoute