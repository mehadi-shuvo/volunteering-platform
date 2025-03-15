import { useForm, SubmitHandler } from "react-hook-form";
import { registrationApi } from "../../../apis/auth/registrationApi";

// Rename the interface to avoid conflict with the browser's FormData
interface RegistrationFormData {
  email: string;
  name: string;
  password: string;
  skills: string; // Optional field
  causes_supported: string; // Optional field
}

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>(); // Use the renamed interface

  // Use SubmitHandler<RegistrationFormData> to type the onSubmit function
  const onSubmit: SubmitHandler<RegistrationFormData> = (data) => {
    registrationApi(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center primary-text mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message?.toString()}
              </p>
            )}
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message?.toString()}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message?.toString()}
              </p>
            )}
          </div>

          {/* Skills */}
          <div className="mb-4">
            <label className="block text-gray-700">
              Skills (comma-separated)
            </label>
            <input
              type="text"
              {...register("skills", { required: "Skills are required" })}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
              placeholder="e.g., Teaching, Cooking, Coding"
            />
          </div>

          {/* Causes Supported */}
          <div className="mb-6">
            <label className="block text-gray-700">
              Causes You Support (comma-separated)
            </label>
            <input
              type="text"
              {...register("causes_supported", {
                required: "causes are required",
              })}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
              placeholder="e.g., Environment, Education, Healthcare"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="secondary-bg w-full py-2 rounded-lg text-white font-bold hover:bg-yellow-500 transition-all"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <a href="/auth/login" className="primary-text hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
