import React  from "react";
import { useNavigate } from "react-router-dom";
function Logout() {
  const navigate = useNavigate();

const data = ()=>{
    window.open("http://localhost:8000/auth/logout", "_self");
}
  return (
   <>
   <button onClick={data}>logout</button>
    <h1>logout the user from database </h1>
   </>
  )
}

export default Logout