import { Events } from "@prisma/client";
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

export const volunteerEventsServices = {
  createVolunteerEvent,
};
