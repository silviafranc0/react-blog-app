import  {Link}  from 'react-router-dom';

function Header() {
    return (
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h1 className="text-4xl font-bold tracking-wide">Spidey Sightings</h1>
            <nav>
                <ul className="flex space-x-6 font-medium">
                    <li><Link to="/" className="hover:underline">Home</Link></li>
                    <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;