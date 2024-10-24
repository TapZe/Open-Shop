import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layout and 404 import
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Error404 from "./pages/Error404";
import Fallback from "./components/Fallback";

// Lazy-load when importing the pages
const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Fallback />}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Fallback />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/detail/{id}/product",
        element: (
          <Suspense fallback={<Fallback />}>
            <ProductDetail />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: (
      <Suspense fallback={<Fallback />}>
        <AuthLayout />
      </Suspense>
    ),
    children: [],
  },
]);

export default router;
