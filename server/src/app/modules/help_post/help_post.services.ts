import { Comments, HelpPost } from "@prisma/client";
import prismaC from "../../../utils/prismaClient";

const createHelpPost = async (payload: HelpPost) => {
  const user = await prismaC.user.findUnique({
    where: {
      id: payload.posted_by,
    },
  });

  if (!user) {
    throw new Error("user does not exist");
  }
  const post = await prismaC.helpPost.create({
    data: payload,
  });

  return post;
};

const getHelpPosts = async (): Promise<HelpPost[] | []> => {
  const result = await prismaC.helpPost.findMany({
    include: { comments: true, user: true },
  });
  return result;
};

const addComment = async (data: {
  comment: string;
  user_id: string;
  post_id: string;
}): Promise<Comments> => {
  const result = await prismaC.comments.create({
    data,
  });
  return result;
};

export const helpPostServices = {
  createHelpPost,
  getHelpPosts,
  addComment,
};
