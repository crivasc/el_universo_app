import { useState, useEffect } from "react";
import { FaTags, FaSave, FaTrashAlt } from "react-icons/fa";
import {put} from '../../utils/HttpClient';

import Notification from '../../components/Notification';
import { data } from "autoprefixer";

const EditArticle = ({datos}) => {

    const [title, setTitle] = useState('');
    const [summ, setSumm] = useState('');
    const [desc, setDesc] = useState('');
    const [sect, setSect] = useState('');
    const [tags, setTags] = useState([]);
    const [aut, setAut] = useState('');

    const [Message, setMessage] = useState('');
    const [ShowNotification, setShowNotification] = useState(false);

    const showMessage =(message)=>{
      setMessage(message);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false)
      }, 2000);
    }

    /*useEffect(() => {
        setAut(autor);
    }, [autor]);*/

    const [nini, setNini] = useState({});
    useEffect(() => {
        Array.isArray(data) && data.map((re)=>(setNini(re)))

        load()
    }, [datos]);

    console.log(nini)


    const [preTag, setpreTag] = useState('');

    const handleTags=(e)=>{
        //list.push(preTag)
        setTags([...tags, preTag]);

        document.getElementById("tags").value = "";
    }

    const load=()=>{

        
    }

    const clear=()=>{
        document.getElementById("titulo").value = "";
        document.getElementById("resumen").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("seccion").value = "";
        document.getElementById("autor").value = "";
        setTags([]);
    }

    const sendingTest=()=>{
        let data = { 
            id:datos.id,
            title: title,
            summary: summ,
            description: desc,
            tags: JSON.stringify(tags),
            section: sect,
            autor: aut
        }
        
        //post(data).then(response=>{
         //   showMessage(response);

          //  clear()
        //});
        
    }

    return (
        <> 
            <div className="w-full bg-slate-200 p-4 py-2 text-md text-left text-slate-600">
                <h2>Editar artículo</h2>
            </div>

            <Notification ClassName='fixed w-full z-50 top-7'
                show={ShowNotification} message={Message} />

            <div className="mx-auto my-2 md:6/12 sm:w-8/12 ">
                <div className="relative text-sky-500 mb-4">
                    <label className="text-md">Titulo</label>
                    <input type="text"
                    id='titulo'
                    className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                    placeholder='Titulo' 
                    onChange={(e)=>setTitle(e.target.value)}/>
                </div>   
                {/***/}
                <div className="relative text-sky-500 mb-4">
                    <label className="text-md">Resumen</label>
                    <textarea cols="30" rows="10"
                        id='resumen'
                        className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                        placeholder='Resumen'
                        onChange={(e)=>setSumm(e.target.value)}>
                    </textarea>
                </div>   
                {/***/}
                <div className="relative text-sky-500 mb-4">
                    <label className="text-md">Descripción</label>
                    <textarea cols="30" rows="10"
                        id='descripcion'
                        className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                        placeholder='Descripción'
                        onChange={(e)=>setDesc(e.target.value)}>
                    </textarea>
                </div>   
                {/***/}
                <div className="grid grid-cols-2 gap-2">

                    <div className="relative text-sky-500 mb-4">
                        <label className="text-md">Sección</label>
                        <input type="text"
                        id='seccion'
                        className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                        placeholder='Seccion' 
                        onChange={(e)=>setSect(e.target.value)}/>
                    </div>   
                    {/***/}
                    <div className="relative text-sky-500 mb-4">
                        <label className="text-md">tags</label>
                        <FaTags size={20} className='absolute left-0 bottom-3 transition duration-200' />
                        <input type="text"
                        id="tags"
                        name='tags'
                        className="w-full text-gray-600 px-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                        placeholder='Tags'
                        onChange={(e)=>setpreTag(e.target.value)} 
                        />
                        <button className='absolute right-0 bottom-3 transition duration-200'
                            onClick={handleTags}><FaSave size={30}/></button>
                    </div> 

                </div>   
                <div className="relative text-sky-500 mb-4">
                    <label className="text-md">Autor</label>
                    <input type="text"
                    id='autor'
                    className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                    placeholder='Seccion' 
                    onChange={(e)=>setAut(e.target.value)}/>
                </div> 
                <div className='relative text-slate-500'>
                    <FaTags size={20} className='absolute left-0 bottom-0' />
                    <span className="w-full pl-8 py-2">{tags.length > 1 ? tags+' ' : tags}</span>
                </div>

                <div className="flex items-center justify-center">
                    <button className='mx-2 my-6 p-4 rounded-md bg-sky-500 hover:bg-green-600 
                            text-white text-md transition duration-200 drop-shadow flex items-center justify-between'
                        onClick={sendingTest}><FaSave size={20}/><span className="ml-2">Guardar</span>
                    </button>
                    <button className='mx-2 my-6 p-4 rounded-md bg-sky-500 hover:bg-red-600 
                            text-white text-md transition duration-200 drop-shadow flex items-center justify-between'
                        onClick={clear}><FaTrashAlt size={20}/><span className="ml-2">Borrar</span>
                    </button>
                        
                </div>  

            </div>
        </>
    )
};
export default EditArticle;