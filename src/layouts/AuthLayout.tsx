import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-grow sm:mx-2 md:mx-6 lg:mx-10 xl:mx-20 my-10 self-center">
        <div className="w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
