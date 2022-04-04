import {FaTags} from 'react-icons/fa';
const Article = ({article}) => {
    return (
        <>
            <header className='px-4 py-2 bg-slate-100 border-b-2 border-slate-300 text-left text-slate-400
                    rounded-t-lg'>
                <span>{article.section}</span>
            </header>
            <div className="py-4 text-center text-slate-600 font-bold text-2xl"><h1>{article.title}</h1></div>
            <span className="w-full text-right text-slate-500">{article.autor}</span>
            <div className='pt-4 text-justify'>
                <p>{article.sumary}</p>
            </div>
            <div className='pt-4 text-justify'>
                <p>{article.description}</p>
            </div>
            <div className="w-full relative p-4 text-left text-slate-500 pl-8">
                <FaTags size={20} className='absolute left-0 bottom-0' />
                <span className="float-left text-sky-400">Tags</span>
                <span>{article.tags}</span>
            </div>
        </>
    )
};

export default Article