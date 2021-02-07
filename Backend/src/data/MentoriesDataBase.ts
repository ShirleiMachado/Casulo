import { Mentories } from "../model/mentories";
import { BaseDataBase } from "./BaseDatabase";
  
export class MentoriesDatabase extends BaseDataBase {
  public static TABLE_NAME = "Mentories";
  
  public async createMentories(
    id: string,
    name: string,
    theme: string,
    description: string,
    idUser: string,
    idMentor: string,
    isApproved: boolean = false,
      ): Promise<void> {
    await this.getconnection()
      .insert({
        id,
        name,
        theme,
        description,
        idUser,
        idMentor,
        isApproved
      })
      .into(MentoriesDatabase.TABLE_NAME);
  }

  public async getAllMentories(): Promise<Mentories[]> {
    try {
      const result = await this.getconnection()
        .select("name", "theme", "description", "idUser", "idMentor", "isApproved")
        .from(MentoriesDatabase.TABLE_NAME);

      return result;

    } catch (err) {
      throw new Error(err.sqlMessage || err.message)
    }
  }
  public async toApprove(theme: string) {
    try {
      await this.getconnection()
        .update({ isApproved: "1" })
        .from(MentoriesDatabase.TABLE_NAME)
        .where({ theme })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
};