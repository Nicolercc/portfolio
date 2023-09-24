import React from "react";

function Links() {
  return (
    <div>
      <ul className="text-gray-600  font-semibold">
        <li className="py-4">
          <a href="#About" rel="about">
            {" "}
            ABOUT
          </a>
        </li>
        <li className="py-4">
          <a href="#Experience" rel="experience">
            {" "}
            EXPERIENCE
          </a>
        </li>
        <li className="py-4">
          <a href="#Projects" rel="projects">
            PROJECTS
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
