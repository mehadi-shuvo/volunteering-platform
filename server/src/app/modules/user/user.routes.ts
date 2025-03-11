import { Router } from "express";
import { userController } from "./user.controllers";

const router = Router();

router.post("/register", userController.createUser);
router.get("/", userController.getUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", userController.updateUser);

export const userRouter = router;
