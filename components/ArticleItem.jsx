import Link from "next/link";
import { useRouter } from "next/router";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

import {del} from '../utils/HttpClient';

const ArticleItem = ({ article, index, receive, reload}) => {

    const setres=(e)=>{
        //console.log(article.id)
        receive(article.id,'editar')
    }

    const handleDel=(id)=>{

        del(id).then((response)=>{
            console.log(response)
            reload(true)
            response == 'Noticia borrada' && reload(false)
        })
    }

    return (
        <tr key={article.id}
            className="border-b dark:bg-sky-100 dark:border-sky-100 odd:bg-white transition duration-200
        even:bg-sky-50 odd:dark:bg-sky-100 hover:dark:bg-sky-200 even:dark:bg-sky-50">
            <td className="py-4 text-center">{index + 1}</td>
            <td>
                <h2 className='cursor-pointer hover:text-slate-800'
                    onClick={(e)=>receive(article.id)}>{article.title}</h2>
            </td>
            <td> <p>{article.summary}</p> </td>
            <td> <p>{article.section}</p> </td>
            <td> <p>{article.autor}</p> </td>
            <td>
                <div className="grid grid-cols-2 gap-2">
                    <button className='text-slate-500 hover:text-green-600'
                         onClick={setres}>
                        <FaEdit size={25} />
                    </button>
                    <button className='text-slate-500 hover:text-red-700'
                        onClick={(e)=>handleDel(article.id)}>
                        <FaTrashAlt size={25} />
                    </button>
                </div>
            </td>
        </tr>
    )
}

export default ArticleItem;