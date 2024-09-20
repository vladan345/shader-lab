// Layout.jsx
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation.jsx";

const Layout = () => {
  return (
    <div className="flex justify-start bg-black text-white">
      <Navigation />
      <div className="main basis-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
