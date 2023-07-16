import { Outlet,Link, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import { useState } from "react";
import Alert from "./components/form/Alert";
function App() {
  const [jwtToken,setJwtToken]=useState("")
  const [alertMessage,setAlertMessage]=useState("");
  const [alertclassName,setAlertClassName]=useState("d-none")
  const navigate=useNavigate();
  const logout=()=>{
    setJwtToken("")
    navigate("/login")
  }
  return (
    <div className="App">
      <div className="row">
        <div className="col">
           <h1 className="mt-3">  Go watch movie  </h1>
        </div>
        {jwtToken===""
        ?<div className="col text-end">
           <Link to="/login"><span className="badge bg-success">Login</span></Link>
        </div>
        :<a href="#!" onClick={logout}><span className="badge bg-danger">Logout</span></a>
         }
      </div>
      <hr className="mb-3"/>
      <div className="row">
        <div className="col-md-1">
          <nav>
             <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">Home</Link>
              <Link to ="/movies" className="list-group-item list-group-item-action">Movies</Link>
              <Link to="/genres" className="list-group-item list-group-item-action">Genre</Link>
              {jwtToken!=="" && 
              <>
              <Link to="/admin/movie/0" className="list-group-item list-group-item-action">Addmovie</Link>
              <Link to="/manage-catalogue" className="list-group-item list-group-item-action">Manage catalogue</Link>
              <Link to="/graphql" className="list-group-item list-group-item-action">Graphql</Link>
              </>
               }
             </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Alert message={alertMessage} className={alertclassName}></Alert>
          <Outlet context={
            {
              jwtToken,setJwtToken,
              setAlertClassName,
              setAlertMessage
            }
          }/>
        </div>
      </div>
    </div>
  );
}
export default App;
