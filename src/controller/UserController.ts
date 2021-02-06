import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness"
import {BaseDataBase} from "../data/BaseDatabase"

export class UserController {
  public async signupUser(req: Request, res: Response) {
    try {
      const userData = {
        name: req.body.name,
        nasc: req.body.nasc,
        city: req.body.city,
        job: req.body.job,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      };
    
      const userBusiness = new UserBusiness();
      const accessToken = await userBusiness.signup(userData.name, userData.nasc, 
      userData.email, userData.password, userData.city, userData.job, userData.role);

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

  public async signupAdmin(req: Request, res: Response) {
    try {
      const userData = {
        name: req.body.name,
        nasc: req.body.nasc,
        email: req.body.email,
        password: req.body.password,
        city: req.body.city,
        job: req.body.job,
        role: req.body.role,
        token: req.headers.token as string
      };        
    
      const userBusiness = new UserBusiness();
      const accessToken = await userBusiness.signupAdmin(userData.name, 
        userData.nasc, userData.email, userData.password, userData.city, 
        userData.job, userData.role userData.token);


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

// public async signupBand(req: Request, res: Response) {
//   try {
//     const userData = {
//       name: req.body.name,
//       nickname: req.body.nickname,
//       email: req.body.email,
//       password: req.body.password,
//       description: req.body.description,
//       role: req.body.role

//     };
//     const userBusiness = new UserBusiness();
//     await userBusiness.signupBands(userData.name, userData.nickname, userData.email, 
//     userData.password, userData.description, userData.role)
//     res.status(200).send({
//       message: "created band"
//     });
//     } catch (e) {
//     res.status(400).send({
//       message: e.message,
//     });
//   }
//   BaseDataBase.destroyConnection();
//  }

//  async getAllBandList(req: Request, res: Response) {

//   try {
//     const userBusiness = new UserBusiness();
//     const result = await userBusiness.getAllBand(req.headers.authorization!)
//     res.status(200).send({
//       result
//     });

//   } catch (error) {
//       res.send({ message: error.message }).status(error.code);
//   }
// }
}