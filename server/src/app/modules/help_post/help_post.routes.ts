import express from "express";
import { helpPostControllers } from "./help_post.controllers";

const router = express.Router();

router.post("/", helpPostControllers.createHelpPost);

export const helpPostRouter = router;
