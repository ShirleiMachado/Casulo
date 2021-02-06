import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

export const controller = new UserController();

userRouter.post("/", controller.signupUser);
userRouter.post("/signupAdmin", controller.signupAdmin);
userRouter.post("/login", controller.login);
// userRouter.post("/signupBand", controller.signupBand);
// userRouter.get("/getAllBands", controller.getAllBandList);
