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

const getHelpPosts = catchAsync(async (req, res) => {
  const result = await helpPostServices.getHelpPosts();
  res.status(200).json({
    message: "Successfully fetched help post!",
    success: true,
    data: result,
  });
});

const addComment = catchAsync(async (req, res) => {
  const post_id = req.params.id;
  const { comment, user_id } = req.body;
  const result = await helpPostServices.addComment({
    comment,
    user_id,
    post_id,
  });
  res.status(201).json({
    message: "Successfully added comment!",
    success: true,
    data: result,
  });
});

export const helpPostControllers = {
  createHelpPost,
  getHelpPosts,
  addComment,
};
