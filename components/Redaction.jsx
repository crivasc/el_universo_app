import NewArticle from "../pages/article/NewArticle";
import {FaSave, FaTrashAlt} from 'react-icons/fa';
import { useEffect, useState } from "react";

const Redaction = ({usuario}) => {
    const [Author, setAuthor] = useState('');

    useEffect(() => {
        usuario.name ? setAuthor(usuario.name) : setAuthor(usuario.email)
        
    }, [usuario]);

    return (
        <div>
            <div className="px-6 pt-4 flex items-center justify-between">
                <h1 className="font-bold text-slate-600 text-xl">Redacción</h1>
                
                <div className="flex items-center justify-between">
                    <button className="bg-slate-400 hover:bg-green-600 rounded-t-lg flex items-center 
                            justify-between text-white font-bold p-2 transition duration-200 px-4 mr-2">
                        <FaSave size={20}/><span className="ml-2">Guardar</span>
                    </button>
                    <button className="bg-slate-400 hover:bg-red-500 rounded-t-lg flex items-center 
                            justify-between text-white font-bold p-2 transition duration-200 px-4">
                        <FaTrashAlt size={20}/><span className="ml-2">Borrar</span>
                    </button>
                </div>
            </div>
            <NewArticle autor={Author}/>
        </div>
    )
};
export default Redaction;