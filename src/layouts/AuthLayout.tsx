import { Outlet } from "react-router-dom";
import ThemeBtn from "../components/layouts/buttons/ThemeBtn";

const AuthLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <div className="hidden">
        <ThemeBtn />
      </div>
      <main className="flex flex-grow sm:mx-2 md:mx-6 lg:mx-10 xl:mx-20 my-10 self-center items-center">
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
