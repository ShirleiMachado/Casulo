import knex from "knex"
import Knex from "knex"


export class BaseDataBase {
    private static connection: knex | null = null

    protected getconnection(): Knex {
        if (!BaseDataBase.connection) {
            BaseDataBase.connection = Knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                },
            })
        }
        return BaseDataBase.connection
    }
    public static async destroyConnection(): Promise<void> {
        if (BaseDataBase.connection) {
            await BaseDataBase.connection.destroy()
            BaseDataBase.connection = null
        }
    }
}