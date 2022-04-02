import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const NewsList = ({notas}) => {   

    //const [Notic, setNotic] = useState([]);

    return (
        <table className="w-full text-md text-left text-slate-500 dark:text-slate-600">
            <thead className="text-md text-slate-500 uppercase bg-slate-50 dark:bg-slate-100 dark:text-slate-600">
                <tr>
                    <th scope="col" className="px-6 py-3">#</th>
                    <th scope="col" className="px-6 py-3">Titulo</th>
                    <th scope="col" className="px-6 py-3">Resumen</th>
                    <th scope="col" className="px-6 py-3">Seccion</th>
                    <th scope="col" className="px-6 py-3">Autor</th>
                    <th scope="col" className="px-6 py-3">Acciones</th>
                </tr>
            </thead>
            <tbody>
            {notas.map((nota, index)=>(
                <tr key={nota.id}
                className="border-b dark:bg-sky-100 dark:border-sky-100 odd:bg-white transition duration-200
                    even:bg-sky-50 odd:dark:bg-sky-100 hover:dark:bg-sky-200 even:dark:bg-sky-50">
                    <td className="py-4 text-center">{index + 1}</td>
                    <td> <h2>{nota.title}</h2> </td>
                    <td> <p>{nota.summary}</p> </td>
                    <td> <p>{nota.section}</p> </td>
                    <td> <p>{nota.autor}</p> </td>
                    <td> 
                        <div className="grid grid-cols-2 gap-2">
                            <button className='text-slate-500 hover:text-green-600'>
                                <FaEdit size={25}/>
                            </button>
                            <button className='text-slate-500 hover:text-red-700'>
                                <FaTrashAlt size={25}/>
                            </button>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};
export default NewsList;