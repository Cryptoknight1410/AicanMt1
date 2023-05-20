import React from 'react'
import Colors from '../../constants/colors'
import Button from '../common/Button';
const colors=new Colors();

function Hero() {
  return (
    <div>
        <div className={`${colors.bgPrimary}`}>
                <div className={`flex flex-col justify-center items-center p-7`}>
                    <h1 className={`${colors.textGreenColor2} font-bold text-3xl`}>
                        Our Technology
                    </h1>
                    <div className='h-5'></div>
                    <h1 className={`${colors.textSecondary} text-3xl sm:text-5xl font-semibold`}>
                        Product Overview
                    </h1>
                    <div className='h-7'></div>
                    <div className={`flex flex-row `}>
                            <Button className={`mx-8 ${colors.buttonColor} ${colors.textSecondary} p-1 sm:p-2 sm:px-4 rounded-xl ${colors.borderGreenColor} sm:text-lg  text-sm` } >
                                Watch Demo
                            </Button>
                            <Button className={`mx-8 p-1 sm:px-4 sm:p-3 ${colors.textSecondary} p-2 rounded-xl ${colors.borderWhite}` }>
                               Talk to an Expert
                            </Button>
                            
                    </div>
                </div>    
        </div>
    </div>
  )
}

export default Hero