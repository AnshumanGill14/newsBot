import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";





const App=()=> {

  const[progress,setProgress]=useState(0)

    return (
      <div>
         <Router>
         <LoadingBar
        color='#f11946'
        height={4}
        setProgress={progress}/>
         <NavBar/>
         
          <Routes>
            <Route path="/"  element={<News setProgress={setProgress}   key="general" pageSize={6} country="us" cat="general"/>}/>
            <Route path="/general"  element={<News setProgress={setProgress}   key="general"pageSize={6} country="us" cat="general"/>}/>
            <Route path="/business"  element={<News setProgress={setProgress}   key="business" pageSize={6} country="us" cat="business"/>}/>
            <Route path="/entertainment"  element={<News setProgress={setProgress}   key="entertainment" pageSize={6} country="us" cat="entertainment"/>}/>
            <Route path="/health"  element={<News setProgress={setProgress}   key="health" pageSize={6} country="us" cat="health"/>}/>
            <Route path="/science"  element={<News setProgress={setProgress}   key="science" pageSize={6} country="us" cat="science"/>}/>
            <Route path="/sports"  element={<News setProgress={setProgress}   key="sports" pageSize={6} country="us" cat="sports"/>}/>
            <Route path="/technology"  element={<News setProgress={setProgress}   key="technology" pageSize={6} country="us" cat="technology"/>}/>
          </Routes>
        
        
        </Router>
        
      </div>
    )

}

export default App




