import express from "express";
import { helpPostControllers } from "./help_post.controllers";

const router = express.Router();

router.post("/", helpPostControllers.createHelpPost);
router.get("/", helpPostControllers.getHelpPosts);
router.put("/comment/:id", helpPostControllers.addComment);

export const helpPostRouter = router;
