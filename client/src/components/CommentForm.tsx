import React, { useState } from "react";

const CommentForm = ({ onSubmit }: { onSubmit: (comment: string) => void }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      onSubmit(comment);
      setComment("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mt-4">
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Write a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
        >
          Comment
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
