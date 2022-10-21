import React , {useState , useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink} from "react-router-dom";
import {
  Navbar,
  NavItem,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarBrand,
} from "reactstrap";

import { Link } from "react-router-dom";
import '../css/login.css'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch("/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          setUser(resObject);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
 

  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div style={{ width: "100%" }}>
      <Navbar expand="xl" >
        <NavbarBrand href="/"> Login-Logout
        </NavbarBrand>
        <NavbarToggler
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
          {user ? (
              <>
                <NavItem>
                  <NavLink className="navLink" to="/">
                Home
                  </NavLink>
                </NavItem>
              
                <NavItem>
                  <Link className="navLink" to="/logout">
                    logout
                  </Link>
                </NavItem>
                </>

                 ):(
                 <>
                <NavItem>
                  <Link className="navLink" to="/login">
                    Login
                  </Link>
                </NavItem>
                </>
                )}
             
          
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default App;
