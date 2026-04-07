import React, {useState} from 'react';
import CommentForm from './CommentForm';

function Comments() {
    const [comments, setComments] = useState([]);

    const handleAddComment = (newComment) => {
        setComments(function (previousComments) {
            return previousComments.concat(newComment);
        });
    };


    return (
        <div className='mt-4 bg-gray-200 p-4 rounded'>
            <h2 className='text-lg font-bold mb-2'>Comments</h2>
            <CommentForm onAddComment={handleAddComment} />
            <h3 className='mt-4 font-semibold'>Comments:</h3>
            <ul className='mt-2 space-y-1'>
                {comments.map((comment) => (
                    <li key={comment.id} className='bg-white p-2 rounded shadow-sm'>
                        <strong>{comment.author}:</strong> {comment.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Comments;