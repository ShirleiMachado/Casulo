const url = `rota`;

async function cadastroMentorados() {
    const body = {
        name: document.querySelector("#nome").value,
        email : document.querySelector("#email").value,
        senha : document.querySelector("#senha").value,
        cidade : document.querySelector("#cidade").value,
        especialidade : document.querySelector("#especialidade"),
        genero : document.querySelector("#genero").value,
        questao : document.querySelector("#questao").value,
        descricao : document.querySelector("#descricao"),
        foto : document.querySelector("#foto").value,
        grupo : document.querySelector("#grupo").value
    }

    const request = await fetch
        (url, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(body), mode: 'cors', cache: 'default'
        })

        .then(response => {
            response.json();
        })
        .catch(error => {
            this.errorMessage = error;
            console.error("Está ocorrendo um erro", error)
        })
}
