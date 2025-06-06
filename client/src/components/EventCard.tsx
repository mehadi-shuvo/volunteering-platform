import toast from "react-hot-toast";
import { TEvent } from "../utils/types/types";
import { joinEventApi } from "../apis/event/joinEventApi";

const EventCard = ({ event, userId }: { event: TEvent; userId: string }) => {
  const handleJoinEvent = async (id: string) => {
    if (userId === event.organizer_id) {
      toast.error("You already join this event as organizer!", {
        style: {
          background: "#212121",
          color: "#fff",
        },
      });
      return;
    }

    await joinEventApi({ eventId: id, userId });
  };
  return (
    <div
      key={event.id}
      className="primary-bg text-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all"
    >
      <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
      <p className="text-sm mb-4">{event.description}</p>
      <div className="flex flex-col gap-2 mb-4">
        {/* Date & Time */}
        <div className="flex items-center gap-2 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
            />
          </svg>
          <span className="">
            {event.date} | {event.time}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <span className="">{event.location}</span>
        </div>

        {/* Attendees */}
        <div className="flex items-center gap-2 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            />
          </svg>
          <span className="">{event.attendees.length} Attendees</span>
        </div>
      </div>
      <button
        onClick={() => handleJoinEvent(event.id)}
        className="secondary-bg w-full py-2 rounded-lg text-white font-bold hover:bg-yellow-500 transition-all"
      >
        Join Event
      </button>
    </div>
  );
};

export default EventCard;
