import { access } from "fs";
import catchAsync from "../../../utils/catchAsync";
import { userService } from "./user.services";

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(201).json({
    success: true,
    message: "successfully created user",
    data: user,
  });
});

const getUsers = catchAsync(async (req, res) => {
  const users = await userService.getUsers();
  res.status(200).json({
    success: true,
    message: "successfully retrieved users",
    data: users,
  });
});

const getUserById = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.status(200).json({
    success: true,
    message: "successfully retrieved user",
    data: user,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  res.status(200).json({
    success: true,
    message: "successfully updated user",
    data: user,
  });
});

const login = catchAsync(async (req, res) => {
  const user = await userService.login(req.body.email, req.body.password);
  const { refreshToken } = user;
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
  });
  res.status(200).json({
    success: true,
    message: "successfully logged in",
    data: {
      user: user.user,
      accessToken: user.accessToken,
    },
  });
});

const refreshTokenAPI = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  const result = await userService.refreshTokenAIP(refreshToken);

  res.status(200).json({
    success: true,
    message: "successfully token generated",
    data: result,
  });
});

export const userController = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  login,
  refreshTokenAPI,
};
