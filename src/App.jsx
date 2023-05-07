import React, { useEffect } from 'react'
import TopHeader from './components/TopHeader'
import WebFont from "webfontloader";
import NavBar from './components/NavBar';

function App() {
  useEffect(()=>{
    WebFont.load({google:{
      families:['Poppins:300, 400, 500, 600, 700'],
    }})
  },[]);
  return (
    <div className='font-poppins'>
      <TopHeader/>
      <NavBar/>

    </div>
  )
}

export default App