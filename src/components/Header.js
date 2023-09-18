import React from "react";

function Header() {
  return (

    <nav class="border-gray-200 bg-gray-50 rounded-lg shadow-md shadow-slate-800 mx-4 drop-shadow">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" class="flex items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" class="h-8 mr-3" alt="Logo" />
          <span class="self-center text-2xl text-slate-700 font-semibold whitespace-nowrap">Dashboard</span>
        </a>
        <div className="flex text-gray-900 text-center items-center justify-between -mr-2 ml-2">
          <div class="flex items-center">
            Link 1 <div class="h-3 w-3 rounded-full bg-green-600 mr-2 ml-2 animate-heartbeat"></div>
          </div>
          <div class="flex items-center">
            Link 2 <div class="h-3 w-3 rounded-full bg-red-600 mr-2 ml-2 animate-heartbeat"></div>
          </div>
        </div>
        <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Servidores</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Firewall</a>
            </li>
            <li>
              <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Eventos</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Header;
