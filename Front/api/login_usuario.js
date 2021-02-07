const url = `rota`;

async function cadastroMentorados() {
    const body = {
        email : document.querySelector("#email").value,
        senha : document.querySelector("#senha").value
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