import './App.css';

import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'




const App=(props) =>{

  const pageSize =5;
  const apiKey=process.env.REACT_APP_API_KEY

  const [progress, setProgress] = useState(0);
  const [category, setCategoryState] = useState("general");




  const setCategory = (cate)=>{
    setCategoryState(cate);
    console.log("setCategory fun executed by category"+cate);
    document.title=cate.toUpperCase()+"- NewsHunter".toUpperCase();
  }



    return (
      <div className='container'>

        <BrowserRouter>
          <Navbar setCategory={setCategory}/>
          <LoadingBar color='#f11946' progress={progress}  onLoaderFinished={() => setProgress(0)}/>
          <Routes>
          
            <Route path={category} element={<News apiKey={apiKey} setProgress={setProgress} key={category} pageSize={pageSize} country='us' category={category}/>} />

            <Route path='/' element={<News apiKey={apiKey} setProgress={setProgress} key='/' pageSize={pageSize} country='us' category='general'/>} />

          </Routes>
        </BrowserRouter>
e
      </div>
    )
  }


  export default App;