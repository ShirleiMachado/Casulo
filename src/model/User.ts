export enum UserType {
    BAND = "BAND",
    PAYING_LISTENER = "PAYING_LISTENER",
    NO_PAYING_LISTENER = "NO_PAYING_LISTENER",
    ADMIN = "ADMIN"
  }
  
  export class User{
   
    constructor(
      private id: string,
      private name: string,
      private nasc: string,
      private email: string,      
      private password: string,
      private city: string,
      private job: string,
      private role: UserType
    ) {}
  
    getId(): string {
      return this.id;
    }
  
    getName(): string {
      return this.name;
    }
  
    getEmail(): string {
      return this.email;
    }
  
    getNasc(): string {
      return this.nasc;
    }

    getJob(): string {
      return this.job;
    }
  
    getPassword(): string {
      return this.password;
    }

    getCity(): string {
      return this.city;
    }
  
    getRole(): string {
      return this.role;
    }
  
    setId(id: string) {
      this.id = id;
    }
  
    setEmail(email: string) {
      this.email = email;
    }
  
    setName(name: string) {
      this.name = name;
    }

    setNasc(nasc: string) {
      this.nasc = nasc;
    }
  
    setCity(city: string) {
      this.city = city;
    }

    setJob(job: string) {
      this.job = job;
    }

    setRole(): string {
      return this.role;
    }
   
   }