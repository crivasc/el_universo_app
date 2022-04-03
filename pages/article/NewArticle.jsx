import { useState, useEffect } from "react";
import { FaTags, FaSave } from "react-icons/fa";

const NewArticle = ({autor}) => {

    const [title, setTitle] = useState('');
    const [summ, setSumm] = useState('');
    const [desc, setDesc] = useState('');
    const [sect, setSect] = useState('');
    const [tags, setTags] = useState([]);
    const [aut, setAut] = useState('');

    const [articleNew, setarticleNew] = useState([]);

    useEffect(() => {
        setAut(autor);
    }, [autor]);

    const [preTag, setpreTag] = useState('');

    const handleTags=(e)=>{
        //list.push(preTag)
        setTags([...tags, preTag]);

        document.getElementById("tags").value = "";
    }

    const sendingTest=()=>{
        let data = { 
            title: title,
            summary: summ,
            description: desc,
            tags: tags,
            section: sect,
            autor: aut
        }
    }

    return (
        <> 
            <div className="w-full bg-slate-200 p-4 py-2 text-md text-left text-slate-600">
                <h2>Crear nuevo artículo</h2>
            </div>
            <div className="mx-auto my-2 w-8/12">
                <div className="relative text-sky-500 mb-4">
                    <label className="text-md">Titulo</label>
                    <input type="text"
                    name='titulo'
                    className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                    placeholder='Titulo' 
                    onChange={(e)=>setTitle(e.target.value)}/>
                </div>   
                {/***/}
                <div className="relative text-sky-500 mb-4">
                    <label className="text-md">Resumen</label>
                    <textarea cols="30" rows="10"
                        name='resumen'
                        className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                        placeholder='Resumen'
                        onChange={(e)=>setSumm(e.target.value)}>
                    </textarea>
                </div>   
                {/***/}
                <div className="relative text-sky-500 mb-4">
                    <label className="text-md">Descripción</label>
                    <textarea cols="30" rows="10"
                        name='descripcion'
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
                        name='seccion'
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
                            onClick={handleTags}><FaSave size={20}/></button>
                    </div> 

                </div>   
                <div className='relative text-sky-500 my-4 '>
                    <span>Autor: </span>
                    <span className="relative text-slate-500 text-md font-bold">{aut}</span></div>
                <div className='relative text-slate-500'>
                    <FaTags size={20} className='absolute left-0 bottom-0' />
                    <span className="w-full pl-8 py-2">{tags.length > 1 ? tags+' ' : tags}</span>
                </div>

            </div>
        </>
    )
};
export default NewArticle;