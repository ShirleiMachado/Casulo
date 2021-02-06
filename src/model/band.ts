export enum UserType {
    BAND = "BAND",
    PAYING_LISTENER = "PAYING_LISTENER",
    NO_PAYING_LISTENER = "NO_PAYING_LISTENER",
    ADMIN = "ADMIN"
  }
  
  export class Band{
   
    constructor(
      private id: string,
      private name: string,
      private nickname: string,
      private email: string,
      private password: string,
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
  
    getNickName(): string {
        return this.nickname;
    }

    getEmail(): string {
      return this.email;
    }
      
    getPassword(): string {
      return this.password;
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
  
    setNickName(nickname: string) {
      this.nickname = nickname;
    }

    setEmail(email: string) {
        this.email = email;
    }

    setAproved(aproved: boolean) {
        this.aproved = aproved;
    }      
   
   }