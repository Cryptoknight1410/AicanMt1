import React from 'react'
import Colors from '../../constants/colors'
import MobileView from '../common/MobileView';
import Text from './Text';

const colors=new Colors();
function Hero() {
  return (
  
        <>
        <div className={`${colors.BgColor} mt-5`}>

            <div className={`hidden xsm:block w-full `}>
        
            <div className={`flex w-full md:w-4/5 items-center justify-center mx-auto  p-5 md:p-12 `}>
                <img className={`h-64 bg-white  w-1/2 align-middle rounded-3xl `  }></img>
              <div className={`w-1/2`}>
        
                <Text margin="mr-8"></Text>
              </div>
            </div>
            </div>
            <div className='block xsm:hidden'>
        
            <MobileView ></MobileView>
            </div>
        </div>
        </>
          

  )
}

export default Hero