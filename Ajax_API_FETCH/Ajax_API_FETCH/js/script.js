
let url = 'http://localhost/Ajax_API_FETCH/backEnd/controller/produtoController.php'


// requisição HTTP do tipo GET

fetch(url)     // definindo a requisição
    
    // tratamento da resposta
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response[0])
    })