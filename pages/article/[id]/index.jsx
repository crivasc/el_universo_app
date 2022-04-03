import { API } from '../../../utils/HttpClient'
const Article = ({article}) => {
    return (
        <div>
            <h1>{article.title}</h1>
            <small>{article.autor}</small>
            <p>{article.description}</p>
            <p>{article.section}</p>
            <small>{article.tags}</small>
        </div>
    )
};
/*
export const getStaticProps = async (context) =>{
    const res = await fetch(API+'/'+context.params.id);

    const article = await res.json()
    return{
        props:{
            article
        }
    }
}

export const getStaticPaths = async () =>{
    const res = await fetch(API);

    const articles = await res.json()

    const ids = articles.map((article )=> article.id);
    const paths = ids.map((id)=>({params:{id:id.toString()}}))
    return{
        paths,
        fallback:false,
    }
}

*/
export default Article