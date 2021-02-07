import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness"
import {BaseDataBase} from "../data/BaseDatabase"

export class UserController {
  public async signupUser(req: Request, res: Response) {
    try {
      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        city: req.body.city,
        job: req.body.job,
        gender: req.body.gender,
        question: req.body.question,
        description:req.body.description,
        foto:req.body.foto,
        role: req.body.role
      };
    
      const userBusiness = new UserBusiness();
      const accessToken = await userBusiness.signup(userData.name, userData.email, 
      userData.password, userData.city, userData.job, userData.gender, 
      userData.question, userData.description, userData.foto, userData.role);

      res.status(200).send({
        token: accessToken,
      });
    } catch (e) {
      res.status(400).send({
        message: e.message,
      });
          
    }
    BaseDataBase.destroyConnection();
  }

  public async signupMentor(req: Request, res: Response) {
    try {
      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        city: req.body.city,
        job: req.body.job,
        gender: req.body.gender,
        question: req.body.question,
        description:req.body.description,
        foto:req.body.foto,
        role: req.body.role,
        token: req.headers.token as string
      };        
    
      const userBusiness = new UserBusiness();
      const accessToken = await userBusiness.signupMentor(userData.name, userData.email, 
        userData.password, userData.city, userData.job, userData.gender, 
        userData.question, userData.description, userData.foto, userData.role, userData.token);

        res.status(200).send({
        token: accessToken,
      });
    } catch (e) {
      res.status(400).send({
        message: e.message,
      });
    
      
    }
    BaseDataBase.destroyConnection();
  }

  public async login(req: Request, res: Response) {
    try {
      const userData = {
        email: req.body.email,
        password: req.body.password
      };
      const userBusiness = new UserBusiness();
      const accessToken = await userBusiness.login(userData.email, userData.password)
      res.status(200).send({
        token: accessToken,
      });
      } catch (e) {
      res.status(400).send({
        message: e.message,
      });
    
    }
    BaseDataBase.destroyConnection();
}
}