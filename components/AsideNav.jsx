import { FaRegNewspaper, FaPenAlt } from 'react-icons/fa';
import {ImQuill} from 'react-icons/im';
import { useState } from 'react';

const AsideNav = ({ status, section, handleMenu }) => {

    const [seccion, setSeccion] = useState('Noticias');

    const ubicador=(e)=>{
        const ubic = e.target.textContent;
        handleMenu(ubic,'')
        setSeccion(ubic)
    }

    return (
        <>
            <div className={`${status ? 'px-6 ' : 'px-4 text-center '}${seccion == 'Noticias' ? 'bg-gray-900' : ''}
                py-2 hover:bg-gray-900 text-slate-400 hover:text-sky-500 transition duration-200
            `}>
                <button title='Noticias'
                    onClick={ubicador} 
                    className={` w-full flex items-center relative ${status ? 'justify-start' : 'justify-center'}`}>
                    <FaRegNewspaper size={25} className={`${status ? 'absolute left-0' : 'absolute left-3'}`}/> 
                    <span className={`${!status ? 'opacity-0 ml-0' : 'ml-8'} relative z-20`}>Noticias</span>
                </button>
            </div>
            <div className={`${status ? 'px-6 ' : 'px-4 text-center '}${seccion == 'Redacción' ? 'bg-gray-900' : ''}
                py-2 hover:bg-gray-900 text-slate-400 hover:text-sky-500 transition duration-200
            `}>
                <button title='Redacción' 
                    onClick={ubicador}  
                    className={`w-full flex items-center relative ${status ? 'justify-start' : 'justify-center'}`}>
                    <ImQuill size={25} className={`${status ? 'absolute left-0' : 'absolute left-3'}`} /> 
                    <span className={`${!status ? 'opacity-0 ml-0' : 'ml-8 '} relative z-20`}>Redacción</span>
                </button>
            </div>
        </>
    )
};
export default AsideNav;