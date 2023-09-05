let url = 'https://valorant-api.com/v1/agents?!pt-BR';
//Requisição HTTP do tipo GET
fetch(url) //Definindo a requisição

 //Tratamento da resposta
 .then(function(response){
    return response.json()
})

//Fazendo uma tabela com os dados da requisição

.then(function(response){
    console.log(response)
    const div = document.getElementById('resultado')
    let tabela = document.createElement('table')
    let thead = document.createElement('thead')
    let tbody = document.createElement('tbody')
    
    let tr = document.createElement('tr')
    let thUuid = document.createElement('th')
    let thImg = document.createElement('th')
    let thNome = document.createElement('th')
    let thDescricao = document.createElement('th')
    let thNomeD = document.createElement('th')

thUuid.innerHTML = 'ID'
thImg.innerHTML = 'Imagem'
thNome.innerHTML = 'Nome'
thNomeD.innerHTML = 'Desenvolvedor'
thDescricao.innerHTML = "Descrição"

tr.appendChild(thUuid)
tr.appendChild(thImg)
tr.appendChild(thNome)
tr.appendChild(thDescricao)
tr.appendChild(thNomeD)

thead.appendChild(tr)
tabela.appendChild(thead)

response.data.forEach(function(personagem) {
    console.log(personagem)
    let tr = document.createElement('tr')
    let tdUuid = document.createElement('td')
    let tdImg = document.createElement('td')
    let tdNome = document.createElement('td')
    let tdDescricao = document.createElement('td')
    let tdNomeD = document.createElement('td')

    let img = document.createElement('img')

    tdUuid.innerHTML = personagem.uuid
    
    img.src = personagem.displayIcon
    tdNome.innerHTML = personagem.displayName
    tdNomeD.innerHTML = personagem.developerName
    tdDescricao.innerHTML = personagem.description
   

    tr.appendChild(tdUuid)
    tr.appendChild(tdImg)
    tdImg.appendChild(img)
    tr.appendChild(tdNome)
    tr.appendChild(tdDescricao)
    tr.appendChild(tdNomeD)
    
    tbody.appendChild(tr)

})

    tabela.appendChild(tbody)
    div.appendChild(tabela)
    
});