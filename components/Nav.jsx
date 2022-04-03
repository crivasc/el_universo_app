import { FaPowerOff } from "react-icons/fa";
import { useRouter } from "next/router";
import { useState } from "react";
import {FaUserCircle} from 'react-icons/fa'

const Nav = ({userData}) => {

    const router = useRouter();   

    const logout=()=>{
        sessionStorage.clear();
        localStorage.clear();
        //push('/user/login');
        router.reload(window.location.pathname)
    }
    return (
        <div className="px-4 flex items-center justify-between">
            <div className="mx-4 flex items-center justify-between font-bold text-slate-700">
                {userData.pic === null 
                    ? <FaUserCircle size={40} className='text-slate-500 mr-4'/> 
                    : <img src={userData.pic} className='mr-4 rounded-full' width={50} height={50}/>}
                {!userData.name ? <p>{userData.email}</p> : <p>{userData.name}</p>}    
            </div>
            <button title="Cerrar sesión"
                className="outline-0 bg-none border-none text-sky-400 hover:text-sky-600 transition duration-200"
                onClick={logout}>
                <FaPowerOff size={25}/>
            </button>
        </div>
    )
};
export default Nav;