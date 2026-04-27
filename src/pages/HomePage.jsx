import { Link } from "react-router-dom";
import blogBg from '../assets/blog-bg.jpg'


function Homepage() {
    return (
        <div
            style={{ backgroundImage: `url(${blogBg})` }}
            className="min-h-screen bg-cover bg-center bg-no-repeat"
        >
            <div className='min-h-screen bg-black/60 w-full flex flex-col justify-center items-center text-center px-6'>


                <h1 className="text-5xl text-white font-bold mb-6">Welcome to All Things Spidey🕸️!</h1>
                <p className="text-lg  text-gray-300 mb-8 text-center max-w-xl">
                    Your friendly neighborhood blog for everything Spider-Man.
                </p>

                <div className="flex gap-4">
                    <Link to="/login" className="bg-rose-500 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-full">
                        Login
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Homepage;