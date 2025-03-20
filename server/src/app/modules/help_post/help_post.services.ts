import { Comments, HelpPost } from "@prisma/client";
import prismaC from "../../../utils/prismaClient";
import { date } from "zod";

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

  if (!post) {
    throw new Error("there have some issue to crete it!");
  }

  const result = await prismaC.helpPost.findUnique({
    where: {
      id: post.id,
    },
    include: {
      user: true,
      comments: {
        include: {
          user: true,
        },
      },
    },
  });

  return result;
};

const getHelpPosts = async (): Promise<HelpPost[] | []> => {
  const result = await prismaC.helpPost.findMany({
    include: {
      user: true,
      comments: {
        include: {
          user: true,
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
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
