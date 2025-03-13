import express from "express";
import { volunteerEventsControllers } from "./volunteerEvents.controllers";

const router = express.Router();

router.post("/", volunteerEventsControllers.createVolunteerEvent);
router.get("/", volunteerEventsControllers.getAllEvents);

export const volunteerEventsRouter = router;
