import React,{useEffect,useState} from 'react'

function Main() {
const [profile, setProfile] = useState([])
const profileInfo = async()=>{
    const response = await fetch("/auth/userProfile", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const data = await response.json()
    console.log(data)
    setProfile(data)
   
    
  }

useEffect(() => {
  profileInfo()
}, [])

  return (
    <>
     <h1>
          UserName
        </h1>
    {
    profile.map((userdata)=>(

      <div key={userdata._id}>
       
      <h4>
        {userdata.username}
      </h4>
      
      
      </div>
    ))
    }
    </>
  )
}

export default Main