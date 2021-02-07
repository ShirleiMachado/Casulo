import * as express from "express";
import { MentoriesController } from "../controller/MentoriesController";

export const mentoriesRouter = express.Router();

export const controller = new MentoriesController();


mentoriesRouter.post("/mentories", controller.createMentories)



