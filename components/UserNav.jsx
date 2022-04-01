import Link from 'next/link';

const UserNav=({section})=> {
    return (
        <div>
            <Link href="/user/login">
              <a className={`${section=='signIn' ? 'text-sky-600 font-bold' : 'border-dashed border-b-2'} mr-4 border-sky-600 hover:text-sky-600`}>Sign in</a>
            </Link>
            <Link href="/user/register">
              <a className={`${section=='register' ? 'text-sky-600 font-bold' : 'border-dashed border-b-2'} border-sky-600 hover:text-sky-600`}>Registration</a>
            </Link>
        </div>
    )
}
export default UserNav;