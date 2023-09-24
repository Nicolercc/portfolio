import React from "react";

function Links() {
  return (
    <div>
      <ul className="text-gray-600 text-2xl">
        <li className="py-4">
          <a href="#About" rel="">
            {" "}
            About
          </a>
        </li>
        <li className="py-4">
          <a href="#Experience" rel="">
            {" "}
            Experience
          </a>
        </li>
        <li className="py-4">
          <a href="#Projects" rel="">
            Projects
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
