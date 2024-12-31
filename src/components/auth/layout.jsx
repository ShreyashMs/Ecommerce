import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
          <h1 class="text-4xl p-2 font-bold bg-gradient-to-r from-[#373839] to-[#f5f5f4] bg-clip-text text-transparent hover:transition-all hover:scale-110">
            Welcome to MS Shoppings
            <span className="text-4xl p-2 font-bold bg-gradient-to-r from-[#373839] to-[#f5f5f4] bg-clip-text animate-ping text-transparent hover:transition-all hover:scale-110 shadow-2xl ">
              .
            </span>
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
