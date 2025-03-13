import { Events } from "@prisma/client";
import { volunteerEventsServices } from "./volunteerEvents.services";
import catchAsync from "../../../utils/catchAsync";

const createVolunteerEvent = catchAsync(async (req, res) => {
  const volunteerEvent: Events = req.body;
  //   console.log(volunteerEvent);

  const result = await volunteerEventsServices.createVolunteerEvent(
    volunteerEvent
  );
  res.status(201).json({
    success: true,
    message: "successfully created volunteer event",
    data: result,
  });
});

const getAllEvents = catchAsync(async (req, res) => {
  const filters = req.query;

  const events = await volunteerEventsServices.getAllEvents(filters);
  res.status(200).json({
    success: true,
    message: "successfully retrieved events",
    data: events,
  });
});

const joinEvent = catchAsync(async (req, res) => {
  const { eventId, userId } = req.body;
  const result = await volunteerEventsServices.joinEvent(eventId, userId);
  res.status(200).json({
    success: true,
    message: "successfully joined event",
    data: result,
  });
});

export const volunteerEventsControllers = {
  createVolunteerEvent,
  getAllEvents,
  joinEvent,
};
