import mostrarPers from "./mostrarPers.js";
import filtroClasse from "./filtroClasse.js";

export default function puxarDados(){

let url = 'https://valorant-api.com/v1/agents?language=pt-BR&isPlayableCharacter=true';
//Requisição HTTP do tipo GET
fetch(url) //Definindo a requisição

 //Tratamento da resposta
 .then(function(response){
    return response.json()
})

//Fazendo uma tabela com os dados da requisição

.then(function(response){
    console.log(response)
    const Personagens = document.getElementById("Personagens");

    response.data.forEach(element => {
        
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('id', element.uuid + " "+ element.role.displayName);
        card.addEventListener('click', mostrarPers);
        

        const img = document.createElement("img");
        img.setAttribute("src", element.displayIcon);
        img.setAttribute('class', 'img');
        img.setAttribute('id', element.uuid);

        const nome = document.createElement('h3');
        nome.textContent = element.displayName;
        nome.setAttribute('id', element.uuid);

        card.appendChild(img);
        card.appendChild(nome);
        Personagens.appendChild(card);
        
        

    });    

    //filtro de classe
    const dFiltro = document.getElementById('filtroPers');

    var filtros = ["Iniciador", "Duelista", "Sentinela", "Controlador"];

    filtros.forEach(element => {
        const card = document.createElement('div');
        card.setAttribute('id', element);
        card.addEventListener('click', filtroClasse);

        const img = document.createElement('img');
        img.setAttribute('src', '../img/'+element+'.png');
        img.setAttribute('id', element);
        img.setAttribute('alt', element);

        const nome = document.createElement('h3');
        nome.textContent = element;
        nome.setAttribute('id', element);

        card.appendChild(img);
        card.appendChild(nome);
        dFiltro.appendChild(card);
    });


    //Informações do personagem
    const descPer = document.getElementById('descPer');

    //imagem personagem
    const imgPer = document.createElement('img');
    imgPer.setAttribute('src', '');
    imgPer.setAttribute('alt', 'imgper');
    imgPer.setAttribute('id', 'imgPer');

    //nome do personagem
    const nomeperso = document.createElement('h1');
    nomeperso.textContent = 'Nenhum personagem selecionado';
    nomeperso.setAttribute('id', 'nomeperso');

    //Div DESCRIÇÃO
    const Descrição = document.createElement('div')
    Descrição.setAttribute('class', 'piui')
    
    //bio do personagem
    const lblBio = document.createElement('h3');
    lblBio.textContent = "bio do Personagem";
    const bio = document.createElement('p');
    bio.setAttribute('id', 'bio');
    bio.textContent = 'Selecione um agente';


    //habilidade
    const hab = document.createElement('div');
    hab.setAttribute('id', 'hab');
    const lblhabilidades = document.createElement('h1');
    lblhabilidades.textContent = 'Habilidades';
    hab.appendChild(lblhabilidades);

    //Cards habilidades
    const cardhab = document.createElement('div');
    cardhab.setAttribute('id', 'cardhab');
       
    for(let i = 0; i < 4; i++){
    const Card = document.createElement('div');
    Card.setAttribute('class', 'habilidade');
    Card.setAttribute('id', i+1);

    const img = document.createElement('img');
    img.setAttribute('src', 'https://static.vecteezy.com/system/resources/previews/022/636/388/non_2x/valorant-logo-valorant-icon-transparent-free-png.png');
    img.setAttribute('class', 'imgHab');
    img.setAttribute('id', i+1)

    const nome = document.createElement('h3');
    nome.textContent = 'X';
    nome.setAttribute('class', 'nomeHab');
    nome.setAttribute('id', i+1);

    Card.appendChild(img);
    Card.appendChild(nome);
    cardhab.appendChild(Card);
    }

    const descricao = document.createElement('p');
    descricao.textContent = 'Selecione um agente';
    descricao.setAttribute('id', 'descHab');

    hab.appendChild(cardhab);
    hab.appendChild(descricao);

    
    Descrição.appendChild(nomeperso);
    Descrição.appendChild(lblBio);
    Descrição.appendChild(bio);
    Descrição.appendChild(hab);

    descPer.appendChild(imgPer);
    descPer.appendChild(Descrição);
});
}