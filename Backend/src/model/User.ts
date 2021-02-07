export enum UserType {
  MENTORIES = "MENTORIES",
  LIST_MENTORIES = "LIST_MENTORIES",
  LIST_MENTOR = "LIST_MENTOR",
  MENTOR = "MENTOR"
}

// export enum GenderType {
//   MULHER_CIS = "MULHER_CIS",
//   HOMEM_CIS = "HOMEM_CIS",
//   MULHER_TRANS = "MULHER_TRANS",
//   HOMEM_TRANS = "HOMEM_TRANS",
//   NAO_BINARIO = "NAO_BINARIO",
//   PREF_NAO_IDENTIFICAR = "PREFIRO_NAO_IDENTIFICAR"
// }
  
  export class User{
  
    constructor(
      private id: string,
      private name: string,
      private email: string,      
      private password: string,
      private city: string,
      private job: string,
      private gender: string,
      private question: string,
      private description: string,
      private foto: string,
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

    getPassword(): string {
      return this.password;
    }

    getCity(): string {
      return this.city;
    }
  
    getJob(): string {
      return this.job;
    }
  
    getGender(): string {
      return this.gender;
    }

    getQuestion(): string {
      return this.question;
    }
  
    getDescription(): string {
      return this.description;
    }

    getFoto(): string {
      return this.foto;
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

    setEmail(email: string) {
      this.email = email;
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