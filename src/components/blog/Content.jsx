import React from 'react';

function Content({ title, content, author, date }) {
    return (
        <div>
            <h1 className='text-3xl font-bold mb-3 text-gray-900 capitalize'>{title}</h1>
            { }
            {author && (
                <div>
                    <p className='text-sm font-medium text-gray-800'>By {author.name}</p>
                    <p className='text-xs text-gray-400'>{author.email}</p>
                </div>
            )}
            <p className='text-sm text-gray-800'>{date}</p>
            <p className='text-gray-700 leading-relaxed'>{content}</p>
        </div>
    );
}

export default Content;