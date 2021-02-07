import { BaseDataBase } from "./BaseDatabase";
import { User } from "../model/User";


export class UserDatabase extends BaseDataBase {
  public static TABLE_NAME = "USERS";
  
  public async CreateUser(
    id: string,
    role: string,
    name: string,
    email: string,      
    password: string,
    city: string,
    uf: string,
    job: string,
    linkedin: string,
    foto: string,
    gender: string,
    grupo: string
    
  ): Promise<void> {
    await this.getconnection()
      .insert({
        id,
        role,
        name,
        email,
        password,
        city,
        uf,
        job,
        linkedin,
        foto,
        gender,
        grupo
      })
      .into(UserDatabase.TABLE_NAME);
  }
 
  public async getUserEmail(email: string): Promise<User> {
    const result = await this.getconnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });
    const data = result[0];
    console.log(data)
    const user = new User(data.id, data.Role, data.Name, data.Email, data.Password, 
      data.City, data.Uf, data.Job, data.Linkedin, data.Foto, data.Gender, data.Grupo );

    return user;
  }

  public async getPassword(password: string): Promise<any> {
    const result = await this.getconnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ password });

    return result[0];
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getconnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }

  public async deleteUser(id: string): Promise<void> {
    await this.getconnection().raw(`
    DELETE FROM ${UserDatabase.TABLE_NAME} WHERE id = "${id}"`);
  }

}
