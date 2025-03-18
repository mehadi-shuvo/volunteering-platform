import { useState } from "react";
import { TComment, THelpPost, TUser } from "../utils/types/types";
import CommentForm from "./CommentForm";
import { addCommentApi } from "../apis/post/addCommentApi";

const HelpPostCard = ({ post }: { post: THelpPost }) => {
  const [AllComments, setAllComment] = useState<TComment[]>(post.comments);
  const res = localStorage.getItem("user");
  const user: TUser = res ? JSON.parse(res) : null;
  const handleCommentSubmit = async (commentText: string) => {
    try {
      const res = await addCommentApi({
        id: post.id,
        comment: { user_id: user.id, comment: commentText },
      });

      if (res) {
        const newComment: TComment = {
          id: res.id,
          comment: res.comment,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            skills: user.skills,
            causes_supported: user.causes_supported,
          },
        };
        setAllComment((prevComments) => [...prevComments, newComment]);
      } else {
        console.error("Failed to add comment. Response:", res);
      }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div key={post.id} className="bg-blue-100 p-6 rounded-lg shadow-xl">
      <h2 className="text-2xl font-bold primary-text">{post.title}</h2>
      <p className="text-gray-700 mt-2">{post.description}</p>
      <div className="mt-4">
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${
            post.urgency_level === "LOW"
              ? "bg-green-100 text-green-800"
              : post.urgency_level === "MEDIUM"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          {post.urgency_level}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-sm text-gray-600">
          Posted by: <span className="font-semibold">{post.user.name}</span>
        </p>
      </div>

      {/* Comments Section */}
      <div className="mt-6">
        <h3 className="text-xl font-bold primary-text">Comments</h3>
        {AllComments.length > 0 ? (
          AllComments.map((comment) => (
            <div
              key={comment.id}
              className="mt-4 pl-4 border-l-2 border-gray-200 bg-blue-50 py-1 rounded-md"
            >
              <p className="text-gray-700">{comment.comment}</p>
              <p className="text-sm text-gray-600 mt-1">
                - {comment.user.name}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No comments yet.</p>
        )}
        <CommentForm onSubmit={handleCommentSubmit} />
      </div>
    </div>
  );
};

export default HelpPostCard;
