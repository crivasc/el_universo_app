import { useState, useEffect } from "react";
import { FaTags, FaSave, FaTrashAlt } from "react-icons/fa";
import {post} from '../../utils/HttpClient';

import Notification from '../../components/Notification';

const EditArticle = ({autor}) => {

    const [title, setTitle] = useState('');
    const [summ, setSumm] = useState('');
    const [desc, setDesc] = useState('');
    const [sect, setSect] = useState('');
    const [tags, setTags] = useState([]);
    const [aut, setAut] = useState('');

    const [Message, setMessage] = useState('');
    const [ShowNotification, setShowNotification] = useState(false);

    const showMessage =(message)=>{
      setMessage(message);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false)
      }, 2000);
    }

    useEffect(() => {
        setAut(autor);
    }, [autor]);

    const [preTag, setpreTag] = useState('');

    const handleTags=(e)=>{
        //list.push(preTag)
        setTags([...tags, preTag]);

        document.getElementById("tags").value = "";
    }

    const clear=()=>{
        document.getElementById("titulo").value = "";
        document.getElementById("resumen").value = "";
        document.getElementById("descripcion").value = "";
        document.getElementById("seccion").value = "";
        setTags([]);
    }

    const sendingTest=()=>{
        let data = { 
            title: title,
            summary: summ,
            description: desc,
            tags: JSON.stringify(tags),
            section: sect,
            autor: aut
        }
        
        post(data).then(response=>{
            showMessage(response);

            clear()
        });
        
    }

    return (
        <> 
            <div className="w-full bg-slate-200 p-4 py-2 text-md text-left text-slate-600">
                <h2>Editar artículo</h2>
            </div>


        </>
    )
};
export default EditArticle;