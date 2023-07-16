import React, { useState } from "react"
import Input from "./form/Input"
import { useOutletContext} from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("")
  const {setJwtToken}=useOutletContext();
  const {setAlertClassName}=useOutletContext();
  const {setAlertMessage}=useOutletContext();
  const navigate=useNavigate();
  const handlesubmit=(event)=>{
    event.preventDefault();
    console.log("email/password",email,password)
    if (email==="admin@example.com"){
      setJwtToken("abc")
      setAlertClassName("d-none")
      setAlertMessage("")
      navigate("/")
    }else{
      setAlertClassName("alert-danger")
      setAlertMessage("Invalid Credentials")
    }
  }
    return (
      <div className="col-md-6 offset-md-3">
          <h2>Login</h2>
          <hr/>
          <form onSubmit={handlesubmit}>
            <Input 
              title="Email-address"
              type="email"
              className="form-control"
              name="email"
              autocomplete="email-new"
              onChange={(event)=>setEmail(event.target.value)}
             />
              <Input 
              title="Password"
              type="password"
              className="form-control"
              name="password"
              autocomplete="password-new"
              onChange={(event)=>setPassword(event.target.value)}
             />
             <input type="submit" className="btn btn-primary"  value="Login"/>
          </form>
      </div>
    )
  }
  
  export default Login
  
 