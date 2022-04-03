export const API = 'https://noticias-zyp-api.herokuapp.com/noticias';

export const get = async()=>{
    return await fetch(API).then(res=>res.json());
}

export const post = (data)=>{

    const request = {
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    return fetch(API, request).then(res=>res.json())
    .then(response=>console.log(response));
}