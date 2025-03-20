import { Events, Prisma, VolunteerType } from "@prisma/client";
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
  date?: string;
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
      attendees: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });
  return result;
};

const joinEvent = async (eventId: string, userId: string) => {
  const result = await prismaC.$transaction(async (tc) => {
    const isExistingAttendee = await tc.events.findFirst({
      where: {
        id: eventId,
        attendees: {
          some: {
            id: userId,
          },
        },
      },
    });

    if (isExistingAttendee) {
      throw new Error("User is already an attendee");
    }

    const event = await tc.events.update({
      where: {
        id: eventId,
      },
      data: {
        attendees: {
          connect: {
            id: userId,
          },
        },
      },
    });

    await tc.history.create({
      data: {
        title: event.title,
        type: VolunteerType.VOLUNTEER,
        date: event.date,
        user_id: userId,
        event_id: eventId,
      },
    });

    return event;
  });

  return result;
};

export const volunteerEventsServices = {
  createVolunteerEvent,
  getAllEvents,
  joinEvent,
};
