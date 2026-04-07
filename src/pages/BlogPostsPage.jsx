import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


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


    // const posts = [
    //     { id: 1, title: "Spiderman Stops Bank Heist" },
    //     { id: 2, title: "Spiderman Saves Cat from Tree" },
    //     { id: 3, title: "extra" }
    // ];

    return (
        <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
            <ul className="space-y-3">
                {posts.map((post) => (
                    <li key={post.id} className="bg-white p-4 rounded shadow">
                        <Link
                            to={`/post/${post.id}`}
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );

}

export default BlogPostsPage;