import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness"
import {BaseDataBase} from "../data/BaseDatabase"
import HashManager from "../sevices/HashManager";

export class UserController {
  public async signupUser(req: Request, res: Response) {
    try {
      const userData = {
        role: req.body.role,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        city: req.body.city,
        uf: req.body.uf,
        job: req.body.job,
        linkedin:req.body.linkedin,
        foto:req.body.foto,
        gender: req.body.gender,
        grupo: req.body.grupo      
        
      };
    
      const userBusiness = new UserBusiness();
      const accessToken = await userBusiness.signup(userData.role, userData.name, userData.email, userData.password, 
        userData.city, userData.uf, userData.job, userData.linkedin, userData.foto, userData.gender, userData.grupo);

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
        role: req.body.role,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        city: req.body.city,
        uf: req.body.uf,
        job: req.body.job,
        linkedin:req.body.linkedin,
        foto:req.body.foto,
        gender: req.body.gender,
        grupo: req.body.grupo,
        token: req.headers.token as string
      };        
    
      const userBusiness = new UserBusiness();
      const accessToken = await userBusiness.signupMentor(userData.role, userData.name, userData.email, userData.password, 
        userData.city, userData.uf, userData.job, userData.linkedin, userData.foto, userData.gender, userData.grupo, userData.token);

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
      const hashManager = new HashManager()
      const password = await hashManager.compare(userData.email, userData.password)

      if (!password) {
        throw new Error ("Invalid Password")
      }
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