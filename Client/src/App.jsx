import React from "react";
import { BrowserRouter , Routes , Route , Link} from "react-router-dom";
import {reactLogo , captchaLogo , githubLogo} from "./assets"
import {Home , Main , Task , About} from './pages'

const App = () =>{
  return (
    <>
      <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#d7d8d8]">
          <Link to="/">
            <img src={captchaLogo} alt="Logo" className="w-20 object-contain p-4"/>     
           </Link> 
          <div>
            <Link to="/Home" className="font-inter font-semibold text-lg m-4 p-3 text-gray-800 hover:bg-gray-600 hover:text-white hover:rounded-full ">Home</Link>
            <Link to="/Tasks" className="relative font-inter font-semibold text-lg hover:after:content-[''] hover:after:absolute hover:after:bottom-[-8px] hover:after:left-1/2 hover:after:-translate-x-1/2 hover:after:w-2 hover:after:h-2 hover:after:bg-gray-600 hover:after:rounded-full transition-all duration-300">Tasks</Link>
            <Link to="/About" className="font-inter font-semibold text-lg m-4 p-3 text-gray-800 hover:underline  hover:decoration-2">About</Link>
          </div>
          <Link to="https://github.com/DevVardhan/TaskCal"
                target="_blank"
                rel="noopener noreferrer"
            className="font-inter font-medium bg-[#000000] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[#4a4a4a] transition-colors duration-200">
            <img src={githubLogo} alt="Git" className="object-contain w-10 h-10" />
            <span>Contribute</span>
        </Link>
        </header>

        <main>
          <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Home" element= {<Home/>}/>
          <Route path="/Tasks" element= {<Task/>}/>
          <Route path="/About" element= {<About/>}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App ;