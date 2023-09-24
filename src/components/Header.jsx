import React from "react";
import Links from "./Links";

function Header() {
  return (
    <div>
      <div className="pt-32 pb-10 px-4">
        <h1 className="text-6xl font-bold ">Nicole Rodriguez</h1>
        <p className="text-3xl font-semibold py-3 ">
          Junior Full-stack Engineer
        </p>
        <p className="text-2xl py-3 text-gray-600">
          I build accessible, inclusive products and digital experiences for the
          web.
        </p>
      </div>
      <div className="Links container">
        <Links />
      </div>
    </div>
  );
}

export default Header;
