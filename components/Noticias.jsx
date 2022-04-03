import {get} from '../utils/HttpClient';
import { useState, useEffect } from "react";
import NewsList from './NewsList';
import Article from '../pages/article/[id]';

const Noticias = ({active}) => {

    const [news, setNews] = useState([]);

    const [articulo, setArticulo] = useState([]);
    
    useEffect(() => {
        get().then((data) => {
            setNews(data)
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

    return (
        <>
            <div className="px-6 py-4">
                <h1 className="font-bold text-slate-600 text-xl">Noticias</h1>
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