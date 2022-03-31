import loginStyles from '../styles/Login.module.css';
import { HiOutlineUser } from "react-icons/hi";
import { RiLock2Line } from 'react-icons/ri';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import {useState} from 'react';

export const Login = () => {
  const [check, setCheck] = useState(false)
  
  return (
    <div className={loginStyles.background + ' h-screen flex items-center justify-center'}>
      <div className='bg-white lg:w-4/12 md:w-6/12 sm:w-12/12
            rounded-large drop-shadow-3xl mx-auto mt-6 py-8 px-10'>
        <div className='form'>

          <header className="flex items-center justify-end text-sky-400">
            <a href="#" className="mr-4 border-dotted border-b-sky-600 hover:text-sky-600">Sign in</a>
            <a href='#' className="border-dashed border-b-2 border-sky-600 hover:text-sky-600">Registration</a>
          </header>

          <section>
            <div className="relative text-gray-400 hover:text-sky-600 mb-4">
              <HiOutlineUser size={25} className='absolute left-0 top-2 trasition duration-200' />
              <input type="text"
                className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                placeholder='Usuario' />
            </div>

            <div className="relative text-gray-400 hover:text-sky-600 mb-4">
              <RiLock2Line size={25} className='absolute left-0 top-2 trasition duration-200' />
              <input type="password"
                className='w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none'
                placeholder='Password' />
            </div>
            
            <div className="text-center">
              <button className='w-10/12 mx-auto my-6 p-4 rounded-full bg-sky-600 hover:bg-sky-800 text-white text-xl
                                trasition duration-200 drop-shadow-xl hover:drop-shadow-md'>LOGIN</button>  
            </div>

          </section>

          <footer>

            <div className="flex items-center justify-between">
              <div className="remember relative text-gray-400 hover:text-sky-600">
                <input type="checkbox" id='remember'
                      className='relative z-50 form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-full
                                  checked:border-sky-600 focus:outline-none p-3 align-top float-left mr-2 cursor-pointer'
                      onClick={(e) => {
                        const checked = e.target.checked;
                        checked ? setCheck(checked) : setCheck(false)}
                      }/>
                  {check ? <BsFillCheckCircleFill className="absolute left-0 text-sky-600" size={25}/> : null}
                <label className="trasition duration-200" htmlFor="remember">Remember me</label>
              </div>
              <a href='#' className="border-dashed border-b-2 border-sky-600 text-sky-500 hover:text-sky-600">Recover password</a>
            </div>

            <div className="flex items-center justify-between mt-6 trasition duration-200 text-gray-400 hover:text-sky-600">
              <span>Iniciar con</span>
              <div className='flex items-center justify-between grid grid-flow-col gap-4 text-gray-400'>  
                <a href="#" className="hover:text-red-600 trasition duration-200"> <FaGoogle size={30} /> </a>
                <a href="#" className="hover:text-blue-600 trasition duration-200"> <FaFacebookF size={30} /> </a>
                <a href="#" className="hover:text-sky-400 trasition duration-200"> <FaTwitter size={35} /> </a>
              </div>
            </div>

          </footer>

        </div>
      </div>
    </div>
  )
}
