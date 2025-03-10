import { User } from "@prisma/client";
import prismaC from "../../../utils/prismaClient";
import bcrypt from "bcryptjs";

const createUser = async (user: User) => {
  const { password } = user;

  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);
  user.password = hashedPassword;
  const result = await prismaC.user.create({
    data: user,
  });
  if (!result) {
    throw new Error("User not created");
  }
  return result;
};

const getUsers = async () => {
  return await prismaC.user.findMany();
};

export const userService = {
  createUser,
  getUsers,
};
