import express from "express";
import { volunteerEventsControllers } from "./volunteerEvents.controllers";

const router = express.Router();

router.post("/", volunteerEventsControllers.createVolunteerEvent);
router.get("/", volunteerEventsControllers.getAllEvents);
router.post("/join", volunteerEventsControllers.joinEvent);

export const volunteerEventsRouter = router;
