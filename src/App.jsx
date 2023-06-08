import React, { useEffect } from 'react'
import HomePage from './pages/HomePage';
import WebFont from 'webfontloader';
import Example from './pages/eXAMPLE.JSX';



function App() {
  useEffect(()=>{
    WebFont.load({google:{
      families:['Poppins:300, 400, 500, 600, 700,Montserrat: 700,600,400'],
    }})
  },[]);
  return (
    <div className='font-poppins'>
      
    <HomePage></HomePage>

     </div>
  )
}

export default App