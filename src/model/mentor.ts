export enum UserType {
    MENTORIES = "MENTORIES",
    LIST_MENTORIES = "LIST_MENTORIES",
    LIST_MENTOR = "LIST_MENTOR",
    MENTOR = "MENTOR"
  }
  
  export class Mentories{
   
    constructor(
      private id: string,
      private name: string,
      private theme: string,
      private description: string,
      private aproved: boolean = false,
      private role: UserType
    ) {}
  
    getId(): string {
      return this.id;
    }
  
    getName(): string {
      return this.name;
    }
  
    getTheme(): string {
        return this.theme;
    }

    getDescription(): string {
        return this.description;
      }

    getAproved(): boolean  {
        return this.aproved;
      }
  
    getRole(): string {
      return this.role;
    }
  
    setId(id: string) {
      this.id = id;
    }
  
    setName(name: string) {
      this.name = name;
    }
  
    setTheme(theme: string) {
      this.theme = theme;
    }

    setAproved(aproved: boolean) {
        this.aproved = aproved;
    }      
   
   }