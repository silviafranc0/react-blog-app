import React, { useState } from "react";
import { useUsername } from "../authWrapper/AuthContext";

function CommentForm({ onAddComment }) {
    const [body, setBody] = useState("");
    const username = useUsername();

    function handleSubmit() {
        if (body.trim() === "") {
            alert("Please enter a comment.");
            return;
        }
        onAddComment({name: username, body: body});
        setBody("");
    }

    return (
        <div className="space-y-3">
            <h3 className="font-semibold text-gray-700">Leave a comment.</h3>

            <textarea
                placeholder="Your comment"
                value={body}
                onChange={(e) => setBody(e.target.value)}
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