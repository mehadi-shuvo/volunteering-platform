import express from "express";
import { volunteerEventsControllers } from "./volunteerEvents.controllers";

const router = express.Router();

router.post("/", volunteerEventsControllers.createVolunteerEvent);

export const volunteerEventsRouter = router;
