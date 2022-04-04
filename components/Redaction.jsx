import NewArticle from "../pages/article/NewArticle";
import EditArticle from "../pages/article/EditArticle";
//import {FaSave, FaTrashAlt} from 'react-icons/fa';
import { useEffect, useState } from "react";

const Redaction = ({usuario, create, info}) => {
    const [Author, setAuthor] = useState('');

    const [accion, setAccion] = useState('nuevo');
    const [data, setData] = useState('');

    useEffect(() => {
        usuario.name ? setAuthor(usuario.name) : setAuthor(usuario.email)

    }, [usuario]);

    useEffect(() => {

        if(info){
            setAccion('editar')
            setData(info)
        }else{
            setAccion('nuevo')
            setData(info)
        }
        
    }, [info]);

    

    return (
        <div className="mb-6">
            <div className="px-6 pt-4 flex items-center justify-between">
                <h1 className="font-bold text-slate-600 text-xl">Redacción</h1>
            </div>
            <div className={`${accion=='nuevo' ? accion : 'hidden'}`}>
                <NewArticle autor={Author}/>
            </div>
            <div className={`${accion=='editar' ? accion : 'hidden'}`}>
                <EditArticle datos={data}/>
            </div>
            
            
        </div>
    )
};
export default Redaction;