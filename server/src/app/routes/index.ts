import express from "express";
import { userRouter } from "../modules/user/user.routes";
import { volunteerEventsRouter } from "../modules/volunteer_events/volunteerEvents.routes";
import { helpPostRouter } from "../modules/help_post/help_post.routes";

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
  {
    path: "/help-post",
    route: helpPostRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
