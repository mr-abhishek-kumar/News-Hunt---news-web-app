
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



export default class App extends Component {

  constructor(){
    super();
    this.state ={
      category:"general",
    }
  }

  setCategory = (cate)=>{
    this.setState({category:cate});
    console.log("setCategory fun executed by category"+cate);
  }



  render() {
    return (
      <div className='container'>

        <BrowserRouter>
        <Navbar setCategory={this.setCategory}/>
          <Routes>
            <Route path={this.state.category} element={<News key={this.state.category} pageSize={7} country='us' category={this.state.category}/>} />
            <Route path='/' element={<News key='/' pageSize={7} country='us' category='general'/>} />
          </Routes>
        </BrowserRouter>




      </div>
    )
  }
}