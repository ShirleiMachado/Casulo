import  IdGenerator  from "../sevices/IdGenerator";
import { UserDatabase } from "../data/UserDatabase";
import HashManager from "../sevices/HashManager";
import Authenticator from "../sevices/Authenticator";

export class UserBusiness {
 
  async signup(role:string, name: string, email: string, password: string, city: string, uf:string,
    job: string, linkedin:string,foto:string, gender: string, grupo:string) {
    
      if (!role || !name || !email || !password || !city ||!uf||!job || !linkedin || !foto ||!gender || !grupo )
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
    await userDatabase.CreateUser(id, role, name, email, cipherText, city, uf, job,linkedin, foto, 
      gender, grupo );

    const authenticator = new Authenticator();
    const accessToken = authenticator.generateToken({id, role})
    
    return accessToken
  }

  async signupMentor(role:string, name: string, email: string, password: string, city: string, uf:string,
    job: string, linkedin:string,foto:string, gender: string, grupo:string, token:string) {

        if (!role || !name || !email || !password || !city ||!uf||!job || !linkedin || !foto ||!gender || !grupo )
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
    await userDatabase.CreateUser(id, role, name, email, cipherText, city, uf, job,linkedin, foto, 
      gender, grupo);

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
      console.log(user, user.getPassword)
      const hashManager = new HashManager();
      const hashCompare = await hashManager.compare(password, user.getPassword());

      if (!hashCompare) {
        throw new Error("Invalid Password!");
      }
        const authenticator = new Authenticator();
        const accessToken = authenticator.generateToken({id: user.getId(), role: user.getRole()})

        return accessToken
    }
    
};