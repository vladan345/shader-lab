// Layout.jsx
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation.jsx";

const Layout = () => {
   return (
      <div className="flex justify-start bg-black text-white md:flex-col">
         <Navigation />
         <div className="main basis-full md:min-h-screen">
            <Outlet />
         </div>
      </div>
   );
};

export default Layout;
