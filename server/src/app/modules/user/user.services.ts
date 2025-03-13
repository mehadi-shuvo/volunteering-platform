import { User } from "@prisma/client";
import prismaC from "../../../utils/prismaClient";
import bcrypt from "bcryptjs";
import { log } from "console";
import { jwtHelper } from "../../../utils/jwtHelper";

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

const getUserById = async (id: string) => {
  const result = await prismaC.user.findUnique({
    where: {
      id,
    },
    omit: {
      password: true,
    },
  });
  if (!result) {
    throw new Error("User not found");
  }
  return result;
};

const updateUser = async (id: string, user: User) => {
  const result = await prismaC.user.update({
    where: {
      id,
    },
    data: user,
  });
  if (!result) {
    throw new Error("User not updated");
  }
  return result;
};

const login = async (email: string, password: string) => {
  const user = await prismaC.user.findUnique({
    where: {
      email,
    },
    omit: {
      password: false,
    },
  });
  if (!user) {
    throw new Error("User not found");
  }
  const isMatch = bcrypt.compareSync(password, user?.password);
  if (!isMatch) {
    throw new Error("Invalid password");
  }

  const accessToken = jwtHelper.generateToken(
    { email: user.email, name: user.name },
    process.env.ACCESS_TOKEN_SECRET as string,
    "1h"
  );

  const refreshToken = jwtHelper.generateToken(
    { email: user.email, name: user.name },
    process.env.REFRESH_TOKEN_SECRET as string,
    "7d"
  );

  return {
    accessToken,
    refreshToken,
    user: {
      ...user,
      password: undefined,
    },
  };
};

const refreshTokenAIP = async (token: string) => {
  let decodedData;
  try {
    decodedData = jwtHelper.tokenVerify(
      token,
      process.env.REFRESH_TOKEN_SECRET as string
    );
  } catch (err) {
    throw new Error("You are not authorized!");
  }

  const user = await prismaC.user.findUniqueOrThrow({
    where: {
      email: decodedData.email,
    },
  });
  const accessToken = jwtHelper.generateToken(
    { email: user.email, name: user.name },
    process.env.ACCESS_TOKEN_SECRET as string,
    "1h"
  );

  return {
    accessToken,
  };
};

export const userService = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  login,
  refreshTokenAIP,
};
