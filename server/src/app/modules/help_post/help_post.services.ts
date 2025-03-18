import { HelpPost } from "@prisma/client";
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

export const helpPostServices = {
  createHelpPost,
};
