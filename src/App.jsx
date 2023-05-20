import React, { useEffect } from 'react'
import HomePage from './pages/HomePage';
import WebFont from 'webfontloader';
import Sme from './pages/Platforms/Sme';
import ErrorTracing from './pages/Applications/ErrorTracing';


function App() {
  useEffect(()=>{
    WebFont.load({google:{
      families:['Poppins:300, 400, 500, 600, 700'],
    }})
  },[]);
  return (
    <div className='font-poppins'>
      
    <ErrorTracing></ErrorTracing>

     </div>
  )
}

export default App