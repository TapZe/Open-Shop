import { Outlet } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="overflow-hidden flex-grow flex items-center self-center">
        <main className="sm:mx-2 md:mx-6 lg:mx-10 xl:mx-20 my-10">
          <div className="w-full">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
