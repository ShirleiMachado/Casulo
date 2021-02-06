import { BaseDataBase } from "./BaseDatabase";
import { User } from "../model/User";
import { Mentories } from "../model/mentor";



export class UserDatabase extends BaseDataBase {
  public static TABLE_NAME = "USERS";

  public async CreateUser(
    id: string,
    name: string,
    nasc: string,
    email: string,
    password: string,
    city: string,
    job: string,
    role: string
  ): Promise<void> {
    await this.getconnection()
      .insert({
        id,
        name,
        nasc,
        email,
        password,
        city,
        job,
        role
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public async getUserEmail(email: string): Promise<User> {
    const result = await this.getconnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });
    const data = result[0];
    const user = new User(data.id, data.name, data.email, data.password, data.city, data.job, data.gender, data.question, data.role);
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


  public async createMentories(
    id: string,
    name: string,
    theme: string,
    description: string,
    isApproved: boolean = false,
    role: string
  ): Promise<void> {
    await this.getconnection()
      .insert({
        id,
        name,
        theme,
        description,
        isApproved,
        role
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public async getAllMentor(): Promise<Mentories[]> {
    try {
      const result = await this.getconnection()
        .select("name", "theme", "description", "isApproved")
        .from(UserDatabase.TABLE_NAME)
        .where({ role: "MENTORIES" });

      return result;

    } catch (err) {
      throw new Error(err.sqlMessage || err.message)
    }
  }
  public async toApprove(theme: string) {
    try {
      await this.getconnection()
        .update({ isApproved: "1" })
        .from(UserDatabase.TABLE_NAME)
        .where({ theme })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}
