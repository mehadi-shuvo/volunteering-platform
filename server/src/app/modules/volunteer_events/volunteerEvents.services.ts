import { Events, Prisma } from "@prisma/client";
import prismaC from "../../../utils/prismaClient";

const createVolunteerEvent = async (volunteerEvent: Events) => {
  const result = await prismaC.events.create({
    data: volunteerEvent,
  });
  console.log(result);

  if (!result) {
    throw new Error("Failed to create volunteer event");
  }
  return result;
};

// Get all events with optional filters
const getAllEvents = async (filters: {
  category?: string;
  date?: Date;
  location?: string;
}) => {
  const { category, date, location } = filters;

  // Build the filter object dynamically
  const where: Prisma.EventsWhereInput = {};

  if (category) {
    where.category = {
      contains: category,
      mode: "insensitive", // Case-insensitive search
    };
  }
  if (date) {
    where.date = {
      equals: date,
    };
  }
  if (location) {
    where.location = {
      contains: location,
      mode: "insensitive", // Case-insensitive search
    };
  }

  const result = await prismaC.events.findMany({
    where,
    include: {
      organizer: true, // Include organizer details
      attendees: true, // Include attendees details
      history: true, // Include event history
    },
  });
  return result;
};

export const volunteerEventsServices = {
  createVolunteerEvent,
  getAllEvents,
};
