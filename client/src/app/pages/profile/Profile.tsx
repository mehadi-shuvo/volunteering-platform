import React, { useState } from "react";
import { TUser } from "../../../utils/types/types";
import { updateUserApi } from "../../../apis/user/updateUserApi";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const res = localStorage.getItem("user");
  const user: TUser = res ? JSON.parse(res) : null;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...user });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const skills = e.target.value
      .split(",")
      .map((skill: string) => skill.trim());
    setEditedProfile({ ...editedProfile, skills });
  };

  const handleCausesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const causes = e.target.value
      .split(",")
      .map((cause: string) => cause.trim());
    setEditedProfile({ ...editedProfile, causes_supported: causes });
  };

  const handleSave = async () => {
    await dispatch(updateUserApi({ user: editedProfile, id: user.id }));

    setIsModalOpen(false);
  };

  return (
    <div className="py-10">
      {/* CV Container */}
      <div className="bg-white rounded-md shadow-lg max-w-4xl mx-auto p-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold primary-text capitalize">
            {user.name}
          </h1>
          <p className="text-lg secondary-text mt-2">{user.email}</p>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold primary-text mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full capitalize"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Causes Supported Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold primary-text mb-4">
            Causes Supported
          </h2>
          <div className="flex flex-wrap gap-2">
            {user.causes_supported.map((cause, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full capitalize"
              >
                {cause}
              </span>
            ))}
          </div>
        </div>

        {/* Edit Button */}
        <div className="text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="primary-bg text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            Edit Profile
          </button>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isModalOpen && (
        <div className="min-h-screen overflow-scroll fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-[60] md:z-0 p-5">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 scale-95 hover:scale-100">
            <h2 className="text-2xl font-bold primary-text mb-6 text-center">
              Edit Profile
            </h2>
            <div className="space-y-5">
              <div>
                <label className="block text-lg font-semibold secondary-text mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={editedProfile.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold secondary-text mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={editedProfile.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold secondary-text mb-2">
                  Skills (comma separated)
                </label>
                <input
                  type="text"
                  value={editedProfile.skills.join(", ")}
                  onChange={handleSkillsChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold secondary-text mb-2">
                  Causes Supported (comma separated)
                </label>
                <input
                  type="text"
                  value={editedProfile.causes_supported.join(", ")}
                  onChange={handleCausesChange}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="mt-8 flex justify-end space-x-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="secondary-bg text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="primary-bg text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
