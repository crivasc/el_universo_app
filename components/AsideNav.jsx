import { FaNewspaper } from 'react-icons/fa';

const AsideNav = ({ status, section }) => {
    return (
        <>
            <div className={`${status ? 'px-6' : 'px-4'}
                py-2 hover:bg-gray-900 text-slate-400 hover:text-sky-500 transition duration-200
            `}>
                <button className={` w-full flex items-center ${status ? 'justify-start' : 'justify-center'}`}>
                    <FaNewspaper size={25} /> <span className={`${`${!status && 'hidden'} ml-2`} ml-2`}>Noticias</span>
                </button>
            </div>
            <div className={`${status ? 'px-6' : 'px-4 text-center'}
                py-2 hover:bg-gray-900 text-slate-400 hover:text-sky-500 transition duration-200
            `}>
                <button className={` w-full flex items-center ${status ? 'justify-start' : 'justify-center'}`}>
                    <FaNewspaper size={25} /> <span className={`${`${!status && 'hidden'} ml-2`} ml-2`}>Ornitorrinco</span>
                </button>
            </div>
        </>
    )
};
export default AsideNav;