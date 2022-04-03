import {get} from '../utils/HttpClient';
import { useState, useEffect } from "react";
import NewsList from './NewsList';
import Article from '../pages/article/[id]';
import {ImQuill} from 'react-icons/im';
import { Spinner } from './Spinner';

const Noticias = ({active, handleMenu}) => {

    const [news, setNews] = useState([]);

    const [articulo, setArticulo] = useState([]);

    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        get().then((data) => {
            setNews(data)
            data.length && setIsLoading(false)
        })
    }, []);

    useEffect(() => {
        active!='Noticias' && Closer(); 
    }, [active]);

    const receive=(data)=>{
        const filt = data
        const nota = news.filter(x=>x.id == filt)
        setArticulo(nota)
    }
    const Closer=()=>{
        setArticulo([])
    }
    if(isLoading){return <Spinner/> }
    return (
        <>
            <div className="px-6 pt-4 flex items-center justify-between">
                <h1 className="font-bold text-slate-600 text-xl">Noticias</h1>
                <button className="bg-sky-400 hover:bg-sky-500 rounded-t-lg flex items-center 
                        justify-between text-white font-bold p-2 transition duration-200"
                        onClick={(e)=>handleMenu(e.target.textContent)}>
                    <ImQuill size={25}/> <span className="ml-2">Redacción</span>
                </button>
            </div>
            <div className={`${articulo.length && 'hidden'}`}>
                <NewsList notas={news} receive={receive}/>
            </div>
            <div className={`${!articulo.length && 'hidden'}`}>
                <div>
                    <button onClick={Closer}>Close</button>
                </div>
                {
                    articulo.map((art)=>(
                        <Article key={art.id} article={art}/>
                    ))
                }
            </div>
        </>
    )
};
export default Noticias;