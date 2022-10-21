import React , {useState} from 'react';
import { Form, Row, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import '../css/login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Login() {
  const UserLoader = async()=>{
    window.open('http://localhost:8000/auth/google',"_self")
    
  }
  const facebook = async()=>{
    window.open('http://localhost:8000/auth/facebook',"_self")
    
  }

  const [username, setName] = useState("");
  const [userId, setuserId] = useState(""); 
  
  const navigate = useNavigate();
  const LoginUser = async () => {
      const response = await fetch("/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          userId
        }),
      });
      const data = await response.json();
      console.log(data)
    if(data.username === username){
      window.alert("user is login");
      navigate('/')

    }else if (response.ok) {
      window.alert("user is register");
      navigate('/')

      } 
      else{
        window.alert("user is not login and register failed");

      }
      
   
  };
  return (
    <>
      <div className="login-container">
        <h1 className="login-heading">login</h1>
        <Form className="login-form">
          <Row>
            <FormGroup>
              <Label >UserName</Label>
              <Input
               name="name"
               type="name"
                value={username}
                onChange={(e) => setName(e.target.value)}

               
              />
            </FormGroup>
            <FormGroup>
              <Label>userId</Label>
              <Input
               name="name"
               type="name"
                value={userId}
                onChange={(e) => setuserId(e.target.value)}/>
            </FormGroup>
          </Row>

          <Button className="login-button" onClick={() => LoginUser()} > Login</Button>
        </Form>
        <div>
      <button onClick={()=>UserLoader()}>Google</button>
      <button onClick={()=>facebook()}>Facebook</button>

      </div>
       
      </div>
      
     
    </>
    
  );
}

export default Login;

