
import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'




export default class App extends Component {
  pageSize =5;
  apiKey=process.env.REACT_APP_API_KEY
  state={
    progress:0,
  }

  setProgress = (progress)=>{
    this.setState({progress:progress});
  }

  constructor(){
    super();
    this.state ={
      category:"general",
    }
  }

  setCategory = (cate)=>{
    this.setState({category:cate});
    console.log("setCategory fun executed by category"+cate);
    document.title=cate.toUpperCase()+"- NewsHunter".toUpperCase();
  }



  render() {
    return (
      <div className='container'>

        <BrowserRouter>
          <Navbar setCategory={this.setCategory}/>
          <LoadingBar color='#f11946' progress={this.state.progress}  onLoaderFinished={() => this.setProgress(0)}/>
          <Routes>
          
            <Route path={this.state.category} element={<News apiKey={this.apiKey} setProgress={this.setProgress} key={this.state.category} pageSize={this.pageSize} country='us' category={this.state.category}/>} />

            <Route path='/' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key='/' pageSize={this.pageSize} country='us' category='general'/>} />

          </Routes>
        </BrowserRouter>




      </div>
    )
  }
}