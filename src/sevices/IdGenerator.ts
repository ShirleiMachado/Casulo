import { v4 } from "uuid";

export default class IdGenerator {
    static generate() {
      throw new Error("Method not implemented.");
    }

    public generateId = (): string => (v4());
};