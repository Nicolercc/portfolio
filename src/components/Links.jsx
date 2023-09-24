import React from "react";

function Links() {
  return (
    <div>
      <ul className="text-gray-600  font-semibold">
        <li className="py-4">
          <a href="#About" rel="">
            {" "}
            ABOUT
          </a>
        </li>
        <li className="py-4">
          <a href="#Experience" rel="">
            {" "}
            EXPERIENCE
          </a>
        </li>
        <li className="py-4">
          <a href="#Projects" rel="">
            PROJECTS
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
