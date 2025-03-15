import { useState } from "react";

const Events = () => {
  // Dummy data for events
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Community Cleanup Drive",
      description:
        "Join us to clean up the local park and make our community greener!",
      date: "2023-11-15",
      time: "10:00 AM",
      location: "Central Park, New York",
      category: "Environment",
      attendees: 25,
    },
    {
      id: 2,
      title: "Food Distribution for the Homeless",
      description:
        "Help distribute food to those in need at the downtown shelter.",
      date: "2023-11-20",
      time: "2:00 PM",
      location: "Downtown Shelter, Chicago",
      category: "Social Welfare",
      attendees: 15,
    },
    {
      id: 3,
      title: "Weekly Tutoring Session",
      description:
        "Volunteer to tutor kids in math and science every Saturday.",
      date: "2023-11-18",
      time: "9:00 AM",
      location: "Community Center, Los Angeles",
      category: "Education",
      attendees: 10,
    },
  ]);

  const [showEventForm, setShowEventForm] = useState(false);
  console.log(showEventForm);

  const handleJoinEvent = (id: number) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === id ? { ...event, attendees: event.attendees + 1 } : event
      )
    );
    alert("You have successfully joined the event!");
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold primary-text mb-4">
            Discover & Join Volunteer Events
          </h1>
          <p className="text-lg text-gray-600">
            Find upcoming events, register with one click, and make a difference
            in your community!
          </p>
          <button
            onClick={() => setShowEventForm(true)} // Open modal or redirect
            className="secondary-bg mt-4 px-6 py-2 rounded-lg text-white font-bold hover:bg-yellow-500 transition-all"
          >
            Create Event
          </button>
        </div>

        {/* Event Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search events..."
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-bg"
          />
          <select className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-bg">
            <option value="">All Categories</option>
            <option value="Environment">Environment</option>
            <option value="Social Welfare">Social Welfare</option>
            <option value="Education">Education</option>
          </select>
          <select className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-bg">
            <option value="">All Locations</option>
            <option value="New York">New York</option>
            <option value="Chicago">Chicago</option>
            <option value="Los Angeles">Los Angeles</option>
          </select>
        </div>

        {/* Event Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
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
                  <span className="">{event.attendees} Attendees</span>
                </div>
              </div>
              <button
                onClick={() => handleJoinEvent(event.id)}
                className="secondary-bg w-full py-2 rounded-lg text-white font-bold hover:bg-yellow-500 transition-all"
              >
                Join Event
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
