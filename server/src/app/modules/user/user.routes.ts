import { Router } from "express";
import { userController } from "./user.controllers";

const router = Router();

router.post("/register", userController.createUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/refresh-token", userController.refreshTokenAPI);

export const userRouter = router;
