import React, { useState } from "react";
import { links } from "../utils/links";
import { useLocation } from "react-router-dom";

export default function Navigation() {
   const location = useLocation();
   const [menuOpen, setMenuOpen] = useState(false);
   return (
      <div className="min-w-[400px] p-[20px] relative md:w-full md:min-w-[0]">
         <div
            className={`h-[calc(100vh-40px)] sticky top-[20px] left-0 bg-secondary rounded-[30px] py-[30px] md:h-auto transition-all duration-1000 overflow-hidden px-[20px]  ${
               menuOpen ? "md:max-h-[1000px]" : "md:max-h-[110px]"
            }`}
         >
            <div className="flex justify-between items-center">
               <a href="/" className="heading-1">
                  Shader Lab
               </a>
               <img
                  src="/menu.svg"
                  alt="Toggle menu"
                  className="w-[50px] hidden md:block"
                  onClick={() => setMenuOpen(!menuOpen)}
               />
            </div>

            <nav className="flex flex-col mt-[40px]">
               {links.map((link, index) => (
                  <a
                     className={`block px-[30px] link py-[15px] transition duration-500 hover:bg-hover ${
                        location.pathname == link.url
                           ? "!bg-active"
                           : "bg-transparent"
                     }`}
                     key={index}
                     href={link.url}
                  >
                     {link.title}
                  </a>
               ))}
            </nav>
         </div>
      </div>
   );
}
