import { THelpPost } from "../utils/types/types";

const HelpPostCard = ({ post }: { post: THelpPost }) => {
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
        {post.comments.length > 0 ? (
          post.comments.map((comment) => (
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
      </div>
    </div>
  );
};

export default HelpPostCard;
