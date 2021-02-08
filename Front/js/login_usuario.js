const url = `http://localhost:3003/login`;
let form = document.querySelector("form")
form.addEventListener('submit', function(event){
    event.preventDefault()
    event.stopPropagation()})

 function loginUsuario() {
    const body = {
        email : document.querySelector("#email").value,
        password : document.querySelector("#password").value       
    }
    
    console.log(body);

    const request = fetch
        (url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
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