import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { loginApi } from "../../../apis/auth/loginApi";
import { setCredentials } from "../../../redux/authSlice";

interface LoginFormData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const response = await loginApi(data);
      const { user, accessToken } = response.data;

      // Dispatch the setCredentials action
      dispatch(setCredentials({ user, accessToken, refreshToken: "" })); // refreshToken is handled via cookies
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:shadow-xl">
      <h2 className="text-3xl font-bold primary-text mb-8 text-center">
        Login
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg focus:border-transparent transition-all placeholder-gray-400"
            placeholder="Enter your email"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message?.toString()}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg focus:border-transparent transition-all placeholder-gray-400"
            placeholder="Enter your password"
            required
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message?.toString()}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-3 primary-bg rounded-lg text-white font-semibold hover:bg-blue-600 transition-all"
        >
          Login
        </button>
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a
            href="/auth/user-registration"
            className="text-primary-bg hover:underline"
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
