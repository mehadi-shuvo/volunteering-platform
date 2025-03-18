import React from "react";

const HelpPostModal = () => {
  return (
    <dialog id="help-post-modal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Create a New Help Post</h3>
        <form className="mt-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter title"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              placeholder="Enter description"
              className="textarea textarea-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Urgency Level</span>
            </label>
            <select className="select select-bordered w-full">
              <option value="LOW">Low</option>
              <option value="MEDIUM">Medium</option>
              <option value="URGENT">Urgent</option>
            </select>
          </div>
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
