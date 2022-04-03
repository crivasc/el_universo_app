export const API = 'https://noticias-zyp-api.herokuapp.com/noticias';

//Read
export const get = async()=>{
    return await fetch(API).then(res=>res.json());
}

//Create
export const post = (data)=>{

    const request = {
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    return fetch(API, request).then(res=>res.json());
}

//Update
export const update = (data)=>{

    let id = data.id;

    const request = {
        method:'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    return fetch(API+id, request).then(res=>res.json());
}

//delete
export const del = (id)=>{

    const request = {
        method:'DELETE'
    }

    return fetch(API+'/'+id, request).then(res=>res.json());
}