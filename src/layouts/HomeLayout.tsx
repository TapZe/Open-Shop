import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import { Outlet } from "react-router-dom";
import Hero from "../components/Hero";

const HomeLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="overflow-hidden flex-grow">
        <Hero />
        <main className="sm:mx-2 md:mx-6 lg:mx-10 xl:mx-20 my-10 flex flex-col self-center">
          <div className="w-full">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
