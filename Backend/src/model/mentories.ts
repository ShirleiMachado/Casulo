
  
  export class Mentories{

    constructor(
      private id: string,
      private name: string,
      private theme: string,
      private description: string,
      private idUser: string,
      private idMentor: string,
      private aproved: boolean = false,
      
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

    getidUser(): string {
      return this.idUser;
      }

    getMentor(): string {
        return this.idMentor;
      }

    getAproved(): boolean  {
        return this.aproved;
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