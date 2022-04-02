import {get} from '../../utils/HttpClient';
import { useState, useEffect } from "react";
import NewsList from '../../components/NewsList';

const Noticias = () => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        get().then((data) => {
            setNews(data)
        })
    }, []);
    return (
        <>
            <div className="px-6 py-4">
                <h1 className="font-bold text-slate-600 text-xl">Noticias</h1>
            </div>
            <NewsList notas={news}/>
        </>
    )
};
export default Noticias;