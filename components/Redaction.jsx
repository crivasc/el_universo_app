import NewArticle from "../pages/article/NewArticle";
import EditArticle from "../pages/article/EditArticle";
//import {FaSave, FaTrashAlt} from 'react-icons/fa';
import { useEffect, useState } from "react";

const Redaction = ({usuario, create}) => {
    const [Author, setAuthor] = useState('');

    const [accion, setAccion] = useState('nuevo');

    useEffect(() => {
        usuario.name ? setAuthor(usuario.name) : setAuthor(usuario.email)
        
        create == 'Redacción' 
            ? setAccion('nuevo')
            : setAccion('editar')

    }, [usuario]);

    return (
        <div className="mb-6">
            <div className="px-6 pt-4 flex items-center justify-between">
                <h1 className="font-bold text-slate-600 text-xl">Redacción</h1>
            </div>
            <NewArticle className={`${accion!='nuevo' && 'hidden'}`}
                autor={Author}/>
            <EditArticle  className={`${accion!='editar' && 'hidden'}`}/>
        </div>
    )
};
export default Redaction;