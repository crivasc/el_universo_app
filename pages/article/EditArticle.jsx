import { useState, useEffect } from "react";
import { FaTags, FaSave, FaTrashAlt } from "react-icons/fa";
import {getOne, update} from '../../utils/HttpClient';

import { Spinner } from '../../components/Spinner';
import Notification from '../../components/Notification';
//import { data } from "autoprefixer";

const EditArticle = ({datos}) => {
    const [title, setTitle] = useState('');
    const [summ, setSumm] = useState('');
    const [desc, setDesc] = useState('');
    const [sect, setSect] = useState('');
    const [tags, setTags] = useState([]);
    const [aut, setAut] = useState('');


    const [isLoading, setIsLoading] = useState(true)
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

    const [One, setOne] = useState('');
    useEffect(() => {
        getOne(datos).then((data) => {
            if(data.length){
                setIsLoading(false);
                setOne(data)
                load();
            }
        })
        //load()
    }, [datos]);

    const load = () => {
        if(!isLoading){
            
            let sel = One.filter(x=>x.id==datos)
            sel.map(art=>(
                setTitle(art.title),
                setSumm(art.summary),
                setDesc(art.description),
                setSect(art.section),
                setAut(art.autor),
                document.getElementById("etitulo").value = art.title,
                document.getElementById("eresumen").value = art.summary,
                document.getElementById("edescripcion").value = art.description,
                document.getElementById("eseccion").value = art.section,
                document.getElementById("eautor").value = art.autor
            ))
        }
    };
    

    const [preTag, setpreTag] = useState('');

    const handleTags=(e)=>{
        //list.push(preTag)
        setTags([...tags, preTag]);

        document.getElementById("etags").value = "";
    }

    const clear=(e)=>{
        document.getElementById("etitulo").value = "";
        document.getElementById("eresumen").value = "";
        document.getElementById("edescripcion").value = "";
        document.getElementById("eseccion").value = "";
        document.getElementById("eautor").value = "";
        setTags([]);
    }

    const sendingTest=()=>{
        let newData = { 
            id:datos,
            title: title,
            summary: summ,
            description: desc,
            tags: JSON.stringify(tags),
            section: sect,
            autor: aut
        }
        
        update(newData).then(response=>{
            //console.log(response)
            showMessage(response);
            clear();
        });
        
    }
    if(isLoading){return <Spinner/> }
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
                    id='etitulo'
                    className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                    placeholder='Titulo' 
                    onChange={(e)=>setTitle(e.target.value)}/>
                </div>   
                {/***/}
                <div className="relative text-sky-500 mb-4">
                    <label className="text-md">Resumen</label>
                    <textarea cols="30" rows="10"
                        id='eresumen'
                        className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                        placeholder='Resumen'
                        onChange={(e)=>setSumm(e.target.value)}>
                    </textarea>
                </div>   
                {/***/}
                <div className="relative text-sky-500 mb-4">
                    <label className="text-md">Descripción</label>
                    <textarea cols="30" rows="10"
                        id='edescripcion'
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
                        id='eseccion'
                        className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                        placeholder='Seccion' 
                        onChange={(e)=>setSect(e.target.value)}/>
                    </div>   
                    {/***/}
                    <div className="relative text-sky-500 mb-4">
                        <label className="text-md">tags</label>
                        <FaTags size={20} className='absolute left-0 bottom-3 transition duration-200' />
                        <input type="text"
                        id="etags"
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
                    id='eautor'
                    className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                    placeholder='Autor' 
                    onChange={(e)=>setAut(e.target.value)}/>
                </div> 
                <div className='relative text-slate-500'>
                    <FaTags size={20} className='absolute left-0 bottom-0' />
                    <span className="w-full pl-8 py-2">{tags.length > 1 ? tags+' ' : tags}</span>
                </div>

                <div className="flex items-center justify-center">
                    <button className='mx-2 my-6 p-4 rounded-md bg-sky-500 hover:bg-green-600 
                            text-white text-md transition duration-200 drop-shadow flex items-center justify-between'
                        onClick={sendingTest}><FaSave size={20}/><span className="ml-2">Guardar cambios</span>
                    </button>
                    <button className='mx-2 my-6 p-4 rounded-md bg-sky-500 hover:bg-red-600 
                            text-white text-md transition duration-200 drop-shadow flex items-center justify-between'
                        onClick={clear}><FaTrashAlt size={20}/><span className="ml-2">Cancelar</span>
                    </button>
                        
                </div>  

            </div>
        </>
    )
};
export default EditArticle;