export const API = 'https://noticias-zyp-api.herokuapp.com/noticias';

export const get = async()=>{
    return await fetch(API).then(res=>res.json());
}