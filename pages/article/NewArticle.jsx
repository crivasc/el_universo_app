import { FaTags } from "react-icons/fa";

const NewArticle = ({autor}) => {
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
                    placeholder='Titulo' />
                </div>   
                {/***/}
                <div className="relative text-sky-500 mb-4">
                    <label className="text-md">Resumen</label>
                    <textarea cols="30" rows="10"
                        name='resumen'
                        className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                        placeholder='Resumen'>
                    </textarea>
                </div>   
                {/***/}
                <div className="relative text-sky-500 mb-4">
                    <label className="text-md">Descripción</label>
                    <textarea cols="30" rows="10"
                        name='descripcion'
                        className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                        placeholder='Descripción'>
                    </textarea>
                </div>   
                {/***/}
                <div className="relative text-sky-500 mb-4">
                    <label className="text-md">Sección</label>
                    <input type="text"
                    name='seccion'
                    className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                    placeholder='Titulo' />
                </div>   
                {/***/}
                <div className="relative text-sky-500 mb-4">
                    <label className="text-md">tags</label>
                    <FaTags size={20} className='absolute left-0 bottom-3 transition duration-200' />
                    <input type="text"
                    name='tags'
                    className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                    placeholder='Tags' />
                </div>    
            </div>
        </>
    )
};
export default NewArticle;