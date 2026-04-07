import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Content from "../components/blog/Content";
import CommentForm from "../components/blog/CommentForm";

function IndividualPostPage() {
  const { id: postId } = useParams();

  const [post, setPost]         = useState(null);
  const [author, setAuthor]     = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        const fetchedPost = response.data;
        setPost(fetchedPost);

        axios.get(`https://jsonplaceholder.typicode.com/users/${fetchedPost.userId}`)
          .then((userResponse) => {
            setAuthor(userResponse.data);
          });

        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
          .then((commentsResponse) => {
            setComments(commentsResponse.data);
          });
      })
      .catch((err) => {
        console.log("Post fetch failed:", err);
        setError("Could not load the post. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [postId]);

  // ✅ keep this!
  function handleAddComment(newComment) {
    axios.post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, newComment)
      .then((response) => {
        setComments([response.data, ...comments]);
      })
      .catch(() => {
        alert("Could not post your comment. Please try again.");
      });
  }

  if (loading) {
    return <p className="text-center text-gray-500 mt-10">Loading post...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-10">{error}</p>;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <Content
          title={post.title}
          content={post.body}
          author={author}
        />
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Comments ({comments.length})
        </h2>
        <CommentForm onAddComment={handleAddComment} />
        <div className="mt-6 space-y-4">
          {comments.length === 0 ? (
            <p className="text-gray-500 italic">No comments yet. Be the first to comment!</p>
          ) : (
            comments.map((comment, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4 bg-gray-50">
                <p className="font-medium text-gray-800 text-sm mb-1">{comment.name}</p>
                <p className="text-gray-600 text-sm">{comment.body}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default IndividualPostPage;