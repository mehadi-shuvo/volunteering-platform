import { useForm, SubmitHandler } from "react-hook-form";
import { TEvent } from "../utils/types/types";
import { createEventApi } from "../apis/event/createEventApi";
import toast from "react-hot-toast";

interface CreateEventModalProps {
  userId: string;
}

const CreateEventModal = ({ userId }: CreateEventModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEvent>();

  const onSubmit: SubmitHandler<TEvent> = async (data) => {
    data.organizer_id = userId;
    await createEventApi(data);
    toast.success("Event created successfully !", {
      style: {
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 backdrop-blur-sm p-5 overflow-auto">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto w-full max-w-md md:max-w-4xl transform transition-all duration-300 scale-95 hover:scale-100">
        <h2 className="text-2xl font-bold primary-text mb-6 text-center">
          Create Event
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-lg font-semibold secondary-text mb-2">
              Event Title
            </label>
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-semibold secondary-text mb-2">
              Description
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-semibold secondary-text mb-2">
              Category
            </label>
            <select
              {...register("category", { required: "Category is required" })}
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="Environment">Environment</option>
              <option value="Social Welfare">Social Welfare</option>
              <option value="Education">Education</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-semibold secondary-text mb-2">
              Location
            </label>
            <input
              {...register("location", { required: "Location is required" })}
              type="text"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">
                {errors.location.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-lg font-semibold secondary-text mb-2">
              Date
            </label>
            <input
              {...register("date", { required: "Date is required" })}
              type="date"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
            )}
          </div>
          <div>
            <label className="block text-lg font-semibold secondary-text mb-2">
              Time
            </label>
            <input
              {...register("time", { required: "Time is required" })}
              type="time"
              className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
            )}
          </div>
          <div className="mt-8 flex justify-end space-x-4">
            <form method="dialog">
              <button className="btn secondary-bg text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105">
                Close
              </button>
            </form>
            <button
              type="submit"
              className="primary-bg text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEventModal;
