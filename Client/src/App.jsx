import React from "react";
import { BrowserRouter , Routes , Route , Link} from "react-router-dom";
import {react} from "./assets"

const App = () =>{
  return (
    <>
      <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#d7d8d8]">
          <Link to="/">
            <img src={react} alt="Logo" className="w-28 object-contain"/>     
           </Link> 
          <div>
            <Link to="/Home" className="font-inter font-medium m-4 p-3 text-gray-800 hover:bg-gray-600 hover:text-white hover:rounded-full ">Home</Link>
            <Link to="/Home" className="relative font-inter font-medium hover:after:content-[''] hover:after:absolute hover:after:bottom-[-8px] hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:w-2 hover:after:h-2 hover:after:bg-gray-600 hover:after:rounded-full transition-all duration-300">Tasks</Link>
            <Link to="/Home" className="font-inter font-medium m-4 p-3 text-gray-800 hover:underline  hover:decoration-2">About</Link>
          </div>
          <Link to="/create-post" className="font-inter font-medium bg-[#363636] text-white px-4 py-2 rounded-md">Create New Task</Link>
        </header>
      </BrowserRouter>
    </>
  )
}

export default App ;