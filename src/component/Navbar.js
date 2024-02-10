import React, { Component } from 'react';
import { Link } from "react-router-dom";


export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">  
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"> NewsHunter</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item"><Link onClick={()=>{this.props.setCategory("about")}} className="nav-link" to="/about">About</Link></li>
        <li className="nav-item"><Link onClick={()=>{this.props.setCategory("business")}}   className="nav-link" to="/business">business</Link></li>
        <li className="nav-item"><Link onClick={()=>{this.props.setCategory("entertainment")}} className="nav-link" to="/entertainment">entertainment</Link></li>
        <li className="nav-item"><Link onClick={()=>{this.props.setCategory("health")}}  className="nav-link" to="/health">health</Link></li>
        <li className="nav-item"><Link onClick={()=>{this.props.setCategory("science")}}  className="nav-link" to="/science">science</Link></li>
        <li className="nav-item"><Link onClick={()=>{this.props.setCategory("sports")}}  className="nav-link" to="/sports">sports</Link></li>
        <li className="nav-item"><Link onClick={()=>{this.props.setCategory("technology")}}  className="nav-link" to="/technology">technology</Link></li>


      </ul>

    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar