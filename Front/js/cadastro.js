const url = `http://localhost:3003/`;
let form = document.querySelector("form")
form.addEventListener('submit', function(event){
    event.preventDefault()
    event.stopPropagation()})

 function cadastroUsuario() {
    const body = {
        role : document.querySelector("#user").value,
        name : document.querySelector("#nome").value,
        email : document.querySelector("#email").value,
        password : document.querySelector("#password").value,
        city : document.querySelector("#city").value,
        uf : document.querySelector("#state").value,
        job : document.querySelector("#job").value,
        linkedin : document.querySelector("#linkedin").value,
        foto : document.querySelector("#foto").value,
        gender : document.querySelector("#genero").value,
        grupo : document.querySelector("#group").value
        
    }
    console.log(body);

    const request = fetch
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