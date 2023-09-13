export default class Personagem {
    constructor(uuid, imagem, nome, descricao, habilidades) {
        this.uuid = uuid;
        this.imagem = imagem;
        this.nome = nome;
        this.descricao = descricao;
        this.habilidades = habilidades;
    }

    //getters and setters
    getUuid() {
        return this.uuid;
    }
    setUuid(uuid) {
        this.uuid = uuid;
    }

    getImagem() {
        return this.imagem;
    }
    setImagem(imagem) {
        this.imagem = imagem;
    }

    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }

    getDescricao() {
        return this.descricao;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }

    getHabilidades() {
        return this.habilidades;
    }
    setHabilidades(habilidades) {
        this.habilidades = habilidades;
    }
}