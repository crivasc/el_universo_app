import { useEffect, useState } from "react";
import ArticleItem from "./ArticleItem";

const NewsList = ({notas, receive, reload}) => {   

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
            {notas.map((article, index)=>(
                <ArticleItem key={article.id} 
                    receive={receive}
                    reload={reload}
                    index={index} 
                    article={article}/>
            ))}
            </tbody>
        </table>
    )
};
export default NewsList;