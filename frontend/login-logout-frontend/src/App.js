import React , {useState,useEffect} from "react";
import Login from "./components/login";
import Logout from "./components/logout";
import Main from "./components/main";
import { Routes, Route } from "react-router-dom";
import Navbar from './components/navbar'
function App() {
  

  
  return (
   <>
   <Navbar />
     <Routes>
     <Route path="/logout" element={  <Logout/>} />
     <Route path="/login" element={  <Login/>} />
     <Route path="/" element={  <Main/>} />
     </Routes>
  
   </>

  );
}

export default App;
