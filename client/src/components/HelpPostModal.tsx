import { useForm, SubmitHandler } from "react-hook-form";
import { createHelpPostApi } from "../apis/post/createHelpPostApi";
import { THelpPost } from "../utils/types/types";
import toast from "react-hot-toast";

type HelpPostFormData = {
  title: string;
  description: string;
  urgency_level: string;
};

const HelpPostModal = ({
  userId,
  setHelpPosts,
}: {
  userId: string;
  setHelpPosts: React.Dispatch<React.SetStateAction<THelpPost[]>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<HelpPostFormData>();

  const onSubmit: SubmitHandler<HelpPostFormData> = async (data) => {
    try {
      const newPost = {
        id: Math.random().toString(),
        title: data.title,
        description: data.description,
        urgency_level: data.urgency_level,
        posted_by: userId,
      };

      const response = await createHelpPostApi(newPost);

      if (response) {
        toast.success("Post created successfully", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        setHelpPosts((prevPosts: THelpPost[]) => [...prevPosts, response.data]);
        reset();
        (
          document.getElementById("help-post-modal") as HTMLDialogElement
        ).close();
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <dialog id="help-post-modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Create a New Help Post</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          {/* Title Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter title"
              className="input input-bordered w-full"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <span className="text-red-500 text-sm">
                {errors.title.message}
              </span>
            )}
          </div>

          {/* Description Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="Enter description"
              className="textarea textarea-bordered w-full"
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <span className="text-red-500 text-sm">
                {errors.description.message}
              </span>
            )}
          </div>

          {/* Urgency Level Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Urgency Level</span>
            </label>
            <select
              className="select select-bordered w-full"
              {...register("urgency_level", {
                required: "Urgency level is required",
              })}
            >
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="URGENT">Urgent</option>
            </select>
            {errors.urgency_level && (
              <span className="text-red-500 text-sm">
                {errors.urgency_level.message}
              </span>
            )}
          </div>

          {/* Modal Actions */}
          <div className="modal-action">
            <button
              type="button"
              className="btn secondary-bg text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
              onClick={() =>
                (
                  document.getElementById(
                    "help-post-modal"
                  ) as HTMLDialogElement
                ).close()
              }
            >
              Close
            </button>
            <button
              type="submit"
              className="primary-bg text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default HelpPostModal;
