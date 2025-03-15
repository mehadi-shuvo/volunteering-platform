const Registration = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center primary-text mb-6">
          Register
        </h2>
        {/* {error && <p className="text-red-500 text-center mb-4">{error}</p>} */}
        <form>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
              required
            />
          </div>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-bg"
              required
            />
          </div>

          {/* Skills */}
          <div className="mb-4">
            <label className="block text-gray-700">
              Skills (comma-separated)
            </label>
            <input
              type="text"
              name="skills"
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
              name="causes_supported"
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
          <a href="/login" className="primary-text hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;
