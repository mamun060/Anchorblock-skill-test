import {CiSearch} from 'react-icons/ci';
import notification from '../assets/icons/notification.png'
import profile from '../assets/icons/Mask group.png'
import { useState } from 'react';

export default function Navbar() {
  const [profileToggle, setProfileToggle] = useState(false);

  const togProfile = () =>{
    if(!profileToggle){
      setProfileToggle(true)
    } else {
      setProfileToggle(false)
    }
  }

  return (
    <div className=' flex justify-between items-center px-10 py-4'>
      <div className=' flex justify-between bg-[#F0F5FA] w-[539px] h-[54px] rounded-xl'>
        <div className=' pl-5 w-[450px]'>
          <input 
            className='bg-[#F0F5FA] text-black w-full h-full focus:outline-none pl-4 placeholder:text-[#B0B7C3] placeholder:text-[14px] ' 
            type="text"
            placeholder='Search'
          /> 
        </div>
        <div className='w-[50px] h-full flex items-center pr-4 cursor-pointer'>
          <CiSearch size={24}  />
        </div>
      </div>

      <div className=' flex justify-end items-center gap-8'>
        <div className=' hover:cursor-pointer'>
          <img src={notification} alt="" />
        </div>

        <div className=' hover:cursor-pointer relative'>
          <img onClick={togProfile} src={profile} alt="" />
          
          {
          profileToggle && 
          <div className=' absolute right-0 top-14 py-3 px-12 rounded border border-gray-900'>
            <ul>
              <li className='transition-all hover:scale-110'>Logout</li>
            </ul>
          </div>
          }

        </div> 

      </div>

    </div>
  )
}
