import { createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import React, { Suspense } from "react";
import adminRoute from "../admin/route";
import instructureRoute from "../instructure/route";
import Layout from "../Layout";
import HomePage from "../client/HomePage";

const NotFoundPage = React.lazy(() => import("../NotFoundPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
          <Layout />
    ),
    children: [
      {
        index: true,
        element: (
              <HomePage />
        ),
      },
      ...routes,
    ],
  },
  ...adminRoute,
  ...instructureRoute,
  {
    path: "*",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <NotFoundPage />
      </Suspense>
    ),
  },
  {
    path: "/unauthorized",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <>
        <h1>Unauthorized</h1>
        </>
      </Suspense>
    ),
  },
]);
