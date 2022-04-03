import NewArticle from "../pages/article/NewArticle";
import {FaSave, FaTrashAlt} from 'react-icons/fa';
import { useEffect, useState } from "react";

const Redaction = ({usuario}) => {
    const [Author, setAuthor] = useState('');

    useEffect(() => {
        usuario.name ? setAuthor(usuario.name) : setAuthor(usuario.email)
        
    }, [usuario]);

    return (
        <div className="mb-6">
            <div className="px-6 pt-4 flex items-center justify-between">
                <h1 className="font-bold text-slate-600 text-xl">Redacción</h1>
            </div>
            <NewArticle autor={Author}/>
        </div>
    )
};
export default Redaction;