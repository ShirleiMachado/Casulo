import  IdGenerator  from "../sevices/IdGenerator";
import Authenticator from "../sevices/Authenticator";
import { MentoriesDatabase } from "../data/MentoriesDataBase";


export class MentoriesBusiness {
 
  async create(name: string, theme: string, description:string, 
    idUser:string, idMentor:string, aproved: boolean ) {
    
    const idGenerator = new IdGenerator();
    const id = idGenerator.generateId();

    const mentoriesDatabase = new MentoriesDatabase();
    await mentoriesDatabase.createMentories(id, name, theme, 
      description, idUser, idMentor, aproved);

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken({id})
    
    return accessToken
  }
};