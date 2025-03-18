import express from "express";
import { helpPostControllers } from "./help_post.controllers";

const router = express.Router();

router.post("/", helpPostControllers.createHelpPost);
router.get("/", helpPostControllers.getHelpPosts);

export const helpPostRouter = router;
