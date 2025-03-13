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

export const volunteerEventsControllers = {
  createVolunteerEvent,
};
