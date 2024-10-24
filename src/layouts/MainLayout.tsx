import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <Navbar />
      <Hero />
      <main className="flex flex-grow sm:mx-2 md:mx-6 lg:mx-10 xl:mx-20 my-10">
        <div className="w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
