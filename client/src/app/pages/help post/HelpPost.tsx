import { useEffect, useState } from "react";
import HelpPostModal from "../../../components/HelpPostModal";
import HelpPostCard from "../../../components/HelpPostCard";
import { getHelpPostApi } from "../../../apis/post/getHelpPostApi";
import { THelpPost } from "../../../utils/types/types";

const HelpPost = () => {
  const [helpPosts, setHelpPosts] = useState<THelpPost[]>([]);

  useEffect(() => {
    const fetchHelpPosts = async () => {
      try {
        const response = await getHelpPostApi();
        setHelpPosts(response);
      } catch (error) {
        console.error("Failed to fetch help posts:", error);
      }
    };

    fetchHelpPosts();
  }, []);

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold primary-text mb-4">
            Help your Community
          </h1>
          <p className="text-lg text-gray-600">
            Find upcoming events, register with one click, and make a difference
            in your community!
          </p>
          <button
            className="secondary-bg mt-4 px-6 py-2 rounded-lg text-white font-bold hover:bg-yellow-500 transition-all"
            onClick={() =>
              (
                document.getElementById("help-post-modal") as HTMLDialogElement
              ).showModal()
            }
          >
            Create Post
          </button>
        </div>

        {/* Help Post Listing */}
        <div className="space-y-6">
          {helpPosts.map((post) => (
            <HelpPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Modal for Creating a Post */}
      <HelpPostModal />
    </div>
  );
};

export default HelpPost;
