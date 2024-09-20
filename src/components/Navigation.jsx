import React from "react";
import { links } from "../utils/links";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  return (
    <div className="min-w-[400px] p-[20px] relative">
      <div className="h-[calc(100vh-40px)] sticky top-[20px] left-0 bg-secondary rounded-[30px] py-[30px]">
        <a href="/" className="heading-1 mx-[20px]">
          Shader Lab
        </a>

        <nav className="flex flex-col mt-[40px]">
          {links.map((link, index) => (
            <a
              className={`block px-[30px] link py-[15px] transition duration-500 hover:bg-hover ${
                location.pathname == link.url ? "!bg-active" : "bg-transparent"
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
