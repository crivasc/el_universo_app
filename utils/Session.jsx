import { useState, useEffect } from 'react';
import {useRouter} from 'next/router';

const Session = () => {

    const {push} = useRouter();

    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState([]);

    useEffect(() => {
        let token = sessionStorage.getItem('Token');
        let userData = JSON.parse(localStorage.getItem('UserData'));

        if (!token) {
            setLogged(false)
            setUser([])
            push('/user/login')

        } else {
            setLogged(true)
            setUser(userData)
        }
    }, []);
    return{
        logged,
        user
    }
};

export {Session}
