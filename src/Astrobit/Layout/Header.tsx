import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-800 container-fluid sm:h-fit flex flex-row justify-between">
      <div className="justify-center sm:justify-start p-1">
        <p className="text-3xl ml-2 font-bold m-auto font-cursive text-cyan-500 ">
          Astrobit
        </p>
      </div>

      <div className="justify-end">
        {/* Button to toggle sidebar */}
        <button
          onClick={toggleSidebar}
          className="block sm:hidden absolute top-0 left-0 p-2 text-gray-600"
        >
          {/* Hamburger icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Collapsible sidebar */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } sm:block sm:relative sm:w-56 sm:flex-shrink-0 sm:overflow-y-auto sm:bg-gray-900 sm:text-white flex flex-row`}
        >
          {/* Sidebar content */}
          <ul className="p-4">
            <li>
              <a href="#" className="block py-2">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="block py-2">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="block py-2">
                Link 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
