import { FaNewspaper } from 'react-icons/fa';

const AsideNav = ({ status, section }) => {
    return (
        <>
            <div className='py-2 hover:bg-gray-900 text-slate-400 hover:text-sky-500 transition duration-200'>
                <button className='w-full flex items-center justify-center'>
                    <FaNewspaper size={25} /> <span className={`${`${!status && 'hidden'} ml-2`} ml-2`}>aside 1</span>
                </button>
            </div>
            <div className='py-2 hover:bg-gray-900 text-slate-400 hover:text-sky-500 transition duration-200'>
                <button className='w-full flex items-center justify-center'>
                    <FaNewspaper size={25} /> <span className={`${`${!status && 'hidden'} ml-2`} ml-2`}>aside 1</span>
                </button>
            </div>
            <div className='py-2 hover:bg-gray-900 text-slate-400 hover:text-sky-500 transition duration-200'>
                <button className='w-full flex items-center justify-center'>
                    <FaNewspaper size={25} /> <span className={`${`${!status && 'hidden'} ml-2`} ml-2`}>aside 1</span>
                </button>
            </div>
            <div className='py-2 hover:bg-gray-900 text-slate-400 hover:text-sky-500 transition duration-200'>
                <button className='w-full flex items-center justify-center'>
                    <FaNewspaper size={25} /> <span className={`${`${!status && 'hidden'} ml-2`} ml-2`}>aside 1</span>
                </button>
            </div>
        </>
    )
};
export default AsideNav;