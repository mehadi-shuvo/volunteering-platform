import { useState, useEffect } from "react";
import { getEventsApi } from "../../../apis/auth/eventsApi";
import EventCard from "../../../components/EventCard";
import { TEvent } from "../../../utils/types/types";
import CreateEventModal from "../../../components/CreateEventModal";

const Events = () => {
  const [events, setEvents] = useState<TEvent[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch events with filters
  const fetchEvents = async () => {
    try {
      const filters = {
        category: selectedCategory,
        location: selectedLocation,
        date: selectedDate,
      };
      const data = await getEventsApi(filters);
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  // Fetch events when filters change
  useEffect(() => {
    fetchEvents();
  }, [selectedCategory, selectedLocation, selectedDate]);

  // Handle search locally (frontend filtering)
  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
            className="secondary-bg mt-4 px-6 py-2 rounded-lg text-white font-bold hover:bg-yellow-500 transition-all"
            onClick={() =>
              (
                document.getElementById("my_modal_3") as HTMLDialogElement
              ).showModal()
            }
          >
            Create Event
          </button>
        </div>

        {/* Event Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-bg"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-bg"
          >
            <option value="">All Categories</option>
            <option value="Environment">Environment</option>
            <option value="Social Welfare">Social Welfare</option>
            <option value="Education">Education</option>
          </select>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-bg"
          >
            <option value="">All Locations</option>
            <option value="New York">New York</option>
            <option value="Chicago">Chicago</option>
            <option value="Los Angeles">Los Angeles</option>
          </select>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-bg"
          />
        </div>

        {/* Event Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event}></EventCard>
          ))}
        </div>
      </div>

      {/* Modal */}

      <dialog id="my_modal_3" className="modal">
        <CreateEventModal userId="opp" />
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Events;
