// import React from 'react'
import logo from './../images/logo.png'

import {HiHome, HiMagnifyingGlass,HiStar,HiPlayCircle,HiTv
} from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
function Header() {

    const menu=[
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv   
        },
    ]
  return (
    <div className='flex items-center justify-between p-5'>
    <div className='flex  gap-8 items-center'>
    <img src={logo} className='w-[80px] 
    md:w-[115px] object-cover' />
    <div className='hidden md:flex gap-8'>
    {menu.map((item)=>( 
             // eslint-disable-next-line react/jsx-key
             <HeaderItem  name={item.name} icon={item.icon}/>
             ))}
    </div>
    </div>
    <img src="https://github.com/victor-arango/porfolio/blob/master/src/assets/logo.png?raw=true"
    className='w-[40px] rounded-full'/>
</div>
  )
}

export default Header
    