import logo from '../assets/icons/logo.png';
import dashboard from '../assets/icons/menu 1.png';
import users from '../assets/icons/user 1.png';
import invoice from '../assets/icons/invoice 1.png';
import { Link, useLocation  } from 'react-router-dom';


export default function LeftSidebar() {
  const params = useLocation();
  const correctUrl = params.pathname;

  console.log(correctUrl);

  return (
    <div className=' py-6 px-8'>
      <div className=' flex justify-start items-center'>
        <img src={logo} alt="" />
      </div>

      <h2 className=' py-6 text-[12px]  text-[#B0B7C3] uppercase font-medium'>Pages</h2>

      <div className='flex flex-col items-start gap-4 text-[#B0B7C3]'>
          <Link to={'/dashboard'}>
            <button className=' w-[216px] h-[50px] flex items-center gap-3 text-[#A7AFBC] font-medium text-[14px] bg-[#F0F5FA] py-2 px-4 rounded-lg hover:scale-105 transition-all'>
                <img src={dashboard} alt="" /> 
                <span>Dashboard</span>
            </button>
          </Link>
          <Link to={'/user-list'}> 
            <button className=' w-[216px] h-[50px] flex items-center gap-3 text-[#A7AFBC] font-medium text-[14px] bg-[#F0F5FA] py-2 px-4 rounded-lg hover:scale-105 transition-all'>
                <img src={users} alt="" /> 
                <span>Users</span>
            </button>
          </Link>
          <Link to={'#'}>
            <button className=' w-[216px] h-[50px] flex items-center gap-3 text-[#A7AFBC] font-medium text-[14px] bg-[#F0F5FA] py-2 px-4 rounded-lg hover:scale-105 transition-all'>
                <img src={invoice} alt="" /> 
                <span>Sales</span>
            </button>
          </Link>
      </div>
    </div>
  )
}
