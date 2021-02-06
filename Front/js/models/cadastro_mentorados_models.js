class CadastroMentoradoModel {

    constructor(){

        this.nome = "";
        this.email = "";
        this.senha = "";
        this.uf = "";
        this.especialidade = "";
        this.genero = "";
        this.grupo = ""
    };

    buscarMentorado(){
        let request = new XMLHttpRequest();

        request.addEventListener("load", ()=> {
            if (request.status == 200){

                let dados = this.processaResponse(request.responseText);
                this.atualiza(dados);
            }
        })

        request.open("GET", " " +this.nome, false)
        request.send();
    }

    processaResponse(responseText){
        console.log(responseText)
        let response = JSON.parse(responseText);
        return response;
    }

    atualiza(dados){

        this.nome = "";
        this.email = "";
        this.senha = "";
        this.uf = "";
        this.especialidade = "";
        this.genero = "";
        this.grupo = ""
    }


}