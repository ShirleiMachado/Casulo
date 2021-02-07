import { Request, Response } from "express";
import { MentoriesBusiness } from "../business/MentoriesBusiness"
import {BaseDataBase} from "../data/BaseDatabase"



export class MentoriesController {
  public async createMentories(req: Request, res: Response) {
    try {
      const mentoriesData = {
        name: req.body.name,
        theme: req.body.theme,
        description: req.body.description,
        idUser: req.body.idUser,
        idMentor: req.body.idMentor,
        aproved: req.body.aproved,
        };
    
      const mentoriesBusiness = new MentoriesBusiness();
      await mentoriesBusiness.create(mentoriesData.name, mentoriesData.theme, mentoriesData.description,
        mentoriesData.idUser, mentoriesData.idMentor, mentoriesData.aproved );
      
      res.status(200).send({
        token: accessToken
      });
    } catch (e) {
      res.status(400).send({
        message: e.message,
      });
          
    }
    BaseDataBase.destroyConnection();
  }
}