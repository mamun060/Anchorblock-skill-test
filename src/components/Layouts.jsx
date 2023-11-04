import Navbar from './Navbar';
import LeftSidebar from './LeftSidebar'

export default function Layouts({ children }) {
  return (
    <div className=' h-full relative'>
      <div className='hidden md:block fixed w-72 bg-white border-r-2 border-[#F3F3F3] inset-y-0 text-white'>
        <LeftSidebar />
      </div>
      <div className=" md:pl-72">
        <Navbar />
        <div className=' p-5'>
            {children}
        </div>
      </div>
    </div>
  )
}
