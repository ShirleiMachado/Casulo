
  export class User{
  
    constructor(
      private id: string,
      private role: string,
      private name: string,
      private email: string,      
      private password: string,
      private city: string,
      private uf: string,
      private job: string,
      private linkedin: string,
      private foto: string,
      private gender: string,
      private grupo: string,
            
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

    getUf(): string {
      return this.uf;
    }
  
    getJob(): string {
      return this.job;
    }
  
    getLinkedin(): string {
      return this.linkedin;
    }

    getFoto(): string {
      return this.foto;
    }

    getGender(): string {
      return this.gender;
    }

    getGrupo(): string {
      return this.grupo;
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