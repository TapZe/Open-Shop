import { createBrowserRouter } from "react-router-dom";
// import { lazy, Suspense } from "react";

// Layout and 404 import
import MainLayout from "./layouts/MainLayout";
// import Error404 from "./pages/Error404";
// import Fallback from "./components/Fallback";

// Lazy-load when importing the pages
// const Home = lazy(() => import("./pages/Home"));
// const IndonesiaNews = lazy(() => import("./pages/IndonesiaNews"));
// const SavedNews = lazy(() => import("./pages/SavedNews"));
// const SearchNews = lazy(() => import("./pages/SearchNews"));
// const Category = lazy(() => import("./pages/Category"));
// const ProgrammingNews = lazy(() => import("./pages/ProgrammingNews"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      //   <Suspense fallback={<Fallback />}>
      <MainLayout />
      //   </Suspense>
    ),
    // errorElement: <Error404 />,
    children: [],
  },
]);

export default router;
