import express from "express";
import path from "path";
import { userRouter } from "../modules/user/user.routes";
import { volunteerEventsRouter } from "../modules/volunteer_events/volunteerEvents.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: userRouter,
  },
  {
    path: "/volunteer-events",
    route: volunteerEventsRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
