import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layout and 404 import
import HomeLayout from "./layouts/HomeLayout";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Error404 from "./pages/Error404";
import Fallback from "./components/Fallback";
import ProtectedRoute from "./components/ProtectedRoute";
import Wishlist from "./pages/product/Wishlist";
import ProductCart from "./pages/product/ProductCart";

// Lazy-load when importing the pages
const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./pages/product/ProductDetail"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Fallback />}>
        <HomeLayout />
      </Suspense>
    ),
    errorElement: <Error404 />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Fallback />}>
            <Home />
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
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<Fallback />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<Fallback />}>
            <Register />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/product",
    element: (
      <Suspense fallback={<Fallback />}>
        <MainLayout />
      </Suspense>
    ),
    children: [
      {
        path: "detail/:id",
        element: (
          <Suspense fallback={<Fallback />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "wishlist",
        element: (
          <Suspense fallback={<Fallback />}>
            <ProtectedRoute element={<Wishlist />} />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Fallback />}>
            <ProtectedRoute element={<ProductCart />} />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
