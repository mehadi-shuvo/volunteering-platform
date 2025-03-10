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

export const userController = {
  createUser,
  getUsers,
};
