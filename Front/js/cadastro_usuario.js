const url = `rota`;

async function cadastro_usuario() {
    const body = {
        role : document.querySelector("#grupo").value,
        name: document.querySelector("#nome").value,
        email : document.querySelector("#email").value,
        passaword : document.querySelector("#password").value,
        city : document.querySelector("#city").value,
        state : document.querySelector("#state").value,
        especialidade : document.querySelector("#especialidade").value,
        genero : document.querySelector("#genero").value,
        group : document.querySelector("#group").value,
        foto : document.querySelector("#foto").value,
        linkedin : document.querySelector("#linkedin").value,
        
    }

    const request = await fetch
        (url, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
            body: JSON.stringify(body), mode: 'cors', cache: 'default'
        })

        .then(response => {
            console.log(response.json());
        })
        .catch(error => {
            this.errorMessage = error;
            console.error("Está ocorrendo um erro", error)
        })
}
