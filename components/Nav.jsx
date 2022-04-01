import Link from "next/link";

const Nav = () => {
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/user/login">Login</Link>
            <Link href="/user/register">Register</Link>
        </div>
    )
};
export default Nav;