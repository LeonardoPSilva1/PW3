import Personagem from './Personagem.js';
//import Habilidades from './habilidades.js';

export default function mostrarPers(event) {
    console.log(event.srcElement.id);
    const uuid = event.srcElement.id.split(' ')[0];
    const url = `https://valorant-api.com/v1/agents/${uuid}?language=pt-BR`;
    fetch(url)
    .then(function(response){
        return response.json()
    })

    .then(function(response){
        console.log(response)

        var Pers = new Personagem(response.data.uuid, response.data.fullPortrait,response.data.displayName, response.data.description, response.abilities);

        var imagem = document.getElementById('imgPer');
        var nome = document.getElementById('nomeperso');
        var bio = document.getElementById('bio');
        var deschab = document.getElementById('descHab');

        imagem.setAttribute('src', Pers.getImagem());
        nome.textContent = Pers.getNome();
        bio.textContent = Pers.getDescricao();
        deschab.textContent = 'Selecione uma habilidade para ver a descrição | Não funciona ainda!';
    })
}