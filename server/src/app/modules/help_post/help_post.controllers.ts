import { HelpPost, URGENCY_LEVELS } from "@prisma/client";
import catchAsync from "../../../utils/catchAsync";
import { helpPostServices } from "./help_post.services";
import { date } from "zod";

const createHelpPost = catchAsync(async (req, res) => {
  const post: HelpPost = req.body;
  const result = await helpPostServices.createHelpPost(post);
  res.status(201).json({
    message: "successfully post created!",
    success: true,
    data: result,
  });
});

export const helpPostControllers = {
  createHelpPost,
};
