import { Router } from "express";
import { userController } from "./user.controllers";

const router = Router();

router.post("/register", userController.createUser);
router.get("/", userController.getUsers);

export const userRouter = router;
