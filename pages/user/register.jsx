import Head from 'next/head';
import loginStyles from '../../styles/Login.module.css';
import Link from 'next/link';
import { HiOutlineUser } from "react-icons/hi";
import { RiLock2Line } from 'react-icons/ri';
import { FaGoogle, FaFacebookF, FaTwitter } from 'react-icons/fa';
import UserNav from '../../components/UserNav';
//
import { app } from '../../firebaseConfig';
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Register = () => {
  
  const data = { section:'register' };

  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();

  const { push } = useRouter();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const signUp = () => {
    try {
      createUserWithEmailAndPassword(
        auth,
        credentials.email,
        credentials.password
      ).then((response) => {
        const user = response.user;
        sessionStorage.setItem('Token', user.accessToken);

        const userData = {
          'name':user.displayName,
          'email':user.email,
          'pic':user.photoURL
        }

        localStorage.setItem('UserData',JSON.stringify(userData));
        push('/')
      });
    } catch (error) {
      console.log(error);
    }

  }

  const handleAuth = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  const signUpGoogle = () => {
    try {
      signInWithPopup(auth, googleProvider)
        .then((response) => {
          const user = response.user;
          sessionStorage.setItem('Token', user.accessToken);

          const userData = {
            'name':user.displayName,
            'email':user.email,
            'pic':user.photoURL
          }

          localStorage.setItem('UserData',JSON.stringify(userData));
          push('/')
        })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let token = sessionStorage.getItem('Token');

    if (token) {
      push('/');
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Registro | Prueba Técnica - El Universo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={loginStyles.background + ' h-screen flex items-center justify-center'}>
        <div className='bg-white lg:w-4/12 md:w-6/12 sm:w-12/12
              rounded-large drop-shadow-3xl mx-auto mt-6 py-8 px-10'>
          <div className='form'>

            <header className="flex items-center justify-end text-sky-400">
              <UserNav section={data.section} />
            </header>

            <section>
              <div className="relative text-gray-400 hover:text-sky-600 mb-4">
                <HiOutlineUser size={25} className='absolute left-0 top-2 trasition duration-200' />
                <input type="email"
                  name='email'
                  className="w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none"
                  placeholder='Email'
                  onChange={handleAuth} />
              </div>

              <div className="relative text-gray-400 hover:text-sky-600 mb-4">
                <RiLock2Line size={25} className='absolute left-0 top-2 trasition duration-200' />
                <input type="password"
                  name='password'
                  className='w-full text-gray-600 pl-8 py-2 border-solid border-b-2 focus:border-sky-500 border-gray-400 outline-none'
                  placeholder='Password'
                  onChange={handleAuth} />
              </div>

              <div className="text-center">
                <button className='w-10/12 mx-auto my-6 p-4 rounded-full bg-sky-600 hover:bg-sky-800 text-white text-xl
                                  trasition duration-200 drop-shadow-xl hover:drop-shadow-md'
                  onClick={signUp}>REGISTER</button>
              </div>

            </section>

            <footer>
              <div className="flex items-center justify-between w-12/12 md:w-8/12 sm:w-12/12 mx-auto mt-6 trasition duration-200 text-gray-400 hover:text-sky-600">
                <span>Registrarse con</span>
                <div className='flex items-center justify-between grid grid-flow-col gap-4 text-gray-400'>
                  <button 
                    className="outline-0 bg-none border-none hover:text-red-600 trasition duration-200"
                    onClick={signUpGoogle}>
                      <FaGoogle size={30} />
                  </button>
                  <Link href="/b"><a className="hover:text-blue-600 trasition duration-200"><FaFacebookF size={30} /></a></Link>
                  <Link href="/c"><a className="hover:text-sky-400 trasition duration-200"><FaTwitter size={35} /></a></Link>
                </div>
              </div>
            </footer>

          </div>
        </div>
      </div>
    </div>
  )
}
export default Register;