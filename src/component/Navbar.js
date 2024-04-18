import React from 'react';
import { Link } from "react-router-dom";

const Navbar =(props)=> {


    return (
      <div >
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiar text-primary" style={{backgroundColor:"rgb(138, 142, 140)", color:"white !important"}}>  
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"> NewsHunter</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                <li className="nav-item"><Link onClick={()=>{props.setCategory("about")}} className="nav-link" to="/about">About</Link></li>
                <li className="nav-item"><Link onClick={()=>{props.setCategory("business")}}   className="nav-link" to="/business">business</Link></li>
                <li className="nav-item"><Link onClick={()=>{props.setCategory("entertainment")}} className="nav-link" to="/entertainment">entertainment</Link></li>
                <li className="nav-item"><Link onClick={()=>{props.setCategory("health")}}  className="nav-link" to="/health">health</Link></li>
                <li className="nav-item"><Link onClick={()=>{props.setCategory("science")}}  className="nav-link" to="/science">science</Link></li>
                <li className="nav-item"><Link onClick={()=>{props.setCategory("sports")}}  className="nav-link" to="/sports">sports</Link></li>
                <li className="nav-item"><Link onClick={()=>{props.setCategory("technology")}}  className="nav-link" to="/technology">technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Navbar