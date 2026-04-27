import { Link } from 'react-router-dom';
import { useAuth, useUsername } from '../authWrapper/AuthContext';

function Header() {
    const username = useUsername();
    const { logout } = useAuth();

    return (
        <div className="bg-linear-to-r from-blue-600 to-rose-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-4xl font-bold tracking-wide">All Things Spidey</h1>
            <nav>
                <ul className="flex space-x-6 font-medium">
                    <li><Link to="/" className="cursor-pointer hover:underline">Home</Link></li>
                    <li><Link to="/posts" className='cursor-pointer hover:underline'>Blog Posts</Link></li>
                    <li><Link to="/contact" className="cursor-pointer hover:underline">Contact</Link></li>
                    <li>{username ? (<p className='cursor-pointer hover:underline' onClick={logout}>Hi {username}, Logout</p>)
                        : (<Link to="/login">Login</Link>)}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;