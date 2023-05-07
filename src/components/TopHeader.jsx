import React from 'react';
import Colors from '../constants/colors';
function TopHeader() {
  const colors=new Colors();
  return (
    <>
    <div className={`${colors.primary} hidden h-16 sm:flex justify-between items-center font-medium`}>
        <div className='text-white ml-10  text-lg'>Digitize your factory with a free demo now!</div>
        <div className='text-white mr-10  text-lg'>Know More&gt;&gt;</div>
    </div>
    </>
  )
}

export default TopHeader