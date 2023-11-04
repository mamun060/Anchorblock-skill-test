import { useEffect, useState } from 'react';
import googleicon from '../assets/icons/google.png';
import appleicon from '../assets/icons/apple.png';
import logo from '../assets/icons/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../feature/auth/authApi';


export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreed, setAgreed] = useState(false);
    const navigation = useNavigate();


    const [login, {data}] = useLoginMutation();

    useEffect(()=>{
        if( data?.accessToken && data?.user){
            navigation('/dashboard')
        }
    }, [data, navigation])


    const handleSubmit= (e)=> {
        e.preventDefault();
        login({
            email,
            password
        })
    }

  return (
    <div>
        <nav className=' flex justify-between py-4 px-20'>
            <div className=' cursor-pointer'>
                <img src={logo} alt="" />
            </div>
            <div>
                <select className=' bg-[#F0F5FA] rounded py-2 px-4 focus:outline-none hover:cursor-pointer' name="" id="">
                    <option value="">English UK</option>
                    <option value="">Bangla</option>
                    <option value="">Japanis</option>
                </select>
            </div>
        </nav>
        <div className=' grid place-content-center h-screen'>
           <div className=' min-h-full flex items-center justify-center py-10 px-4 w-[540px]'>
                <div>
                    <div className=' flex flex-col items-center'>
                        <h2 className=' text-[26px] font-bold text-[#323B4B] text-center'>Getting Started</h2>
                        <p className=' text-[#8A94A6] text-center text-[18px] font-medium '>Create an account to continue!</p>
                        <div className=' flex gap-3 pt-5'>
                            <div className=' flex justify-center items-center w-[255px] h-[58px] bg-[#F0F5FA] text-[#8A94A6] rounded-xl shadow-sm hover:cursor-pointer'>
                                <img className=' pr-2' src={googleicon} alt="" /> Sign Up with Google
                            </div>
                            <div className=' flex justify-center items-center w-[255px] h-[58px] bg-[#F0F5FA] text-[#8A94A6] rounded-xl shadow-sm hover:cursor-pointer'>
                                <img className=' pr-2' src={appleicon} alt="" /> Sign Up with Apple ID
                            </div>
                        </div>
                    </div>
                        
                    <div className=' text-center py-6 flex items-center justify-center gap-4 '>
                        <div className=' w-full bg-[#F0F5FA] h-[2px] '></div>
                        <h2 className=' text-[18px] text-[#B0B7C3] font-semibold'>OR</h2>
                        <div className=' w-full bg-[#F0F5FA] h-[2px] '></div>
                    </div>
                    
                    <form action="#" method="POST" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Your Email
                                </label>
                                <input
                                    value={email}
                                    onChange={(e)=> setEmail(e.target.value)}
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className=" 
                                    h-[58px] 
                                    appearance-none
                                    relative block 
                                    w-full 
                                    px-3 
                                    py-2 
                                    border 
                                    border-[#F3F3F3] 
                                    placeholder-[#8A94A6] 
                                    text-black 
                                    rounded-xl 
                                    focus:outline-none 
                                    focus:border-[#FF5630]
                                    focus:z-10 
                                    text-[14px]"
                                    placeholder="Your Email"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    value={password}
                                    onChange={(e)=> setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className=" 
                                    h-[58px] 
                                    appearance-none
                                    relative block 
                                    w-full 
                                    px-3 
                                    py-2 
                                    border 
                                    border-[#F3F3F3] 
                                    placeholder-[#8A94A6] 
                                    text-black 
                                    rounded-xl 
                                    focus:outline-none 
                                    focus:border-[#FF5630]
                                    focus:z-10 
                                    text-[14px]"
                                    placeholder="Create Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between py-4">
                            <div className="flex items-center">
                                <input
                                    value={agreed}
                                    onChange={(e)=> setAgreed(e.target.checked)}
                                    required
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 bg-black rounded-full"
                                />
                                <label
                                    htmlFor="accept-terms"
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember Me
                                </label>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className=' w-full h-[58px] bg-[#377DFF] text-white text-[16px] text-center rounded-xl'
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className=' py-2'>
                        <p className=' text-center font-medium text-[16px] text-[#B0B7C3]'>Don’t have an account yet?
                            <Link className=' text-[#377DFF]' to='/sign-up'> Sign Up  </Link> 
                        </p>
                    </div>

                </div>
           </div>
        </div>
    </div>
  )
}
