import  IdGenerator  from "../sevices/IdGenerator";
import { UserDatabase } from "../data/UserDatabase";
import HashManager from "../sevices/HashManager";
import Authenticator from "../sevices/Authenticator";

export class UserBusiness {
 
  async signup(name: string, email: string, password: string, city: string,
    job: string, gender: string, question:string, role:string) {

        if (!name || !email || !password || !city ||!job || !gender || !question 
          || !role)
        {
          throw new Error("Invalid input");
        }
        if (email.indexOf("@") === -1) {
          throw new Error("Invalid email address");
        }
        if (password.length < 6) {
          throw new Error("Password must have at least 6 characters");
        }
        if (role === "MENTOR") {
          throw new Error("Error creating user. Please check your system mentor.")
        }

    const hashManager = new HashManager();
    const cipherText = await hashManager.hash(password);

    const idGenerator = new IdGenerator();
    const id = idGenerator.generateId();

    const userDatabase = new UserDatabase();
    await userDatabase.CreateUser(id, name, email, city, job, gender, 
      cipherText, role);

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken({id, role})
    
    return accessToken
  }

  async signupMentor(name: string, email: string, password: string, city: string,
    job: string, gender: string, question:string, description:string, role:string, token:string) {

        if (!name || !email || !password || !city ||!job || !gender || !question 
          || !description|| !role)
        {
          throw new Error("Invalid input");
        }
        if (email.indexOf("@") === -1) {
          throw new Error("Invalid email address");
        }
        if (password.length < 10) {
          throw new Error("Password must have at least 10 characters");
        }
    

      const userAuthenticator = new Authenticator();
      const authenticationData = userAuthenticator.getData(token);
      const userRole = authenticationData.role;

      if(userRole !== "MENTOR") {
        throw new Error("Access Denied")
      }


    const hashManager = new HashManager();
    const cipherText = await hashManager.hash(password);

    const idGenerator = new IdGenerator();
    const id = idGenerator.generateId();

    const userDatabase = new UserDatabase();
    await userDatabase.CreateUser(id, name, email, password, city, job, 
      gender, role);

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken({id, role})

    return accessToken
  }

  public async login(email:string,  password: string) {
    if (!password || !email)
      {
        throw new Error("Invalid user");
      }
      const userDatabase = new UserDatabase();
      const user = await userDatabase.getUserEmail(email)
      const hashManager = new HashManager();
      const hashCompare = await hashManager.compare(password, user.getPassword());

      if (!hashCompare) {
        throw new Error("Invalid Password!");
      }
        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({id: user.getId(), role: user.getRole()})

        return accessToken
    }

  public async getAllMentor(token:string){
      if(!token) {
        throw new Error ("missing access token");
      }
  
      const authenticator = new Authenticator();
      const tokenData = authenticator.getData(token);
  
      if(tokenData.role !== "MENTOR"){
        throw new Error ("Only MENTOR");
      }
      const mentorDatabase = new UserDatabase();
      const result = await mentorDatabase.getAllMentor();
  
      return result;
    }
    
};