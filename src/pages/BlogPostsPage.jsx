import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import blogBg from '../assets/blog-bg.jpg'


function BlogPostsPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPosts(response.data);
            })
            .catch(() => {
                console.error('Error fetching posts');
            });
    }, []);

    return (
        <div style={{ backgroundImage: `url(${blogBg})` }}
            className="min-h-screen bg-cover bg-center bg-no-repeat">
            <div className='min-h-screen bg-black/60 w-full px-8 py-8'>
                <h1 className="text-3xl text-white text-center font-bold mb-6">
                    Blog Posts
                </h1>
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <li key={post.id} className="bg-white p-4 rounded-lg shadow">
                            <Link
                                to={`/post/${post.id}`}
                                className="text-blue-600 font-semibold hover:underline hover:text-rose-600"
                            >
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );

}

export default BlogPostsPage;