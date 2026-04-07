import React, { useState } from "react";

function CommentForm({ onAddComment }) {
    const [name, setName] = useState("");
    const [body, setBody] = useState("");
    // const [author, setAuthor] = React.useState("");
    // const [text, setText] = React.useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     if (author.trim() === "" || text.trim() === "") {
    //         alert("Please fill in both fields");
    //         return;
    //     }

    //     onAddComment({ author, text });

    //     setAuthor("");
    //     setText("");
    // };

    function handleSubmit() {
        if (name.trim() === "") {
            alert("Please enter your name.");
            return;
        }
        if (body.trim() === "") {
            alert("Please enter a comment.");
            return;
        }

        onAddComment({name: name, body: body});

        setName("");
        setBody("");
    }

    return (
        <div className="space-y-3">
            <h3 className="font-semibold text-gray-700">Leave a comment.</h3>

            <input
                // id="comment-author"
                // name="author"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={function(e) { setName(e.target.value); }}
                className="border border-gray-200 p-2 w-full rounded text-sm"
            />

            <textarea
                // id="comment-text"
                // name="text"
                placeholder="Your comment"
                value={body}
                onChange={function(e) { setBody(e.target.value); }}
                rows={3}
                className="border border-gray-200 p-2 w-full rounded text-sm resize-none"
            />

            <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium"
            >
                Add Comment
            </button>
        </div>
    );
}

export default CommentForm;