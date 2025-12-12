export default class RetornoConsertoModel{
    constructor(dto){
        this.id = dto.id;
        this.descrição = dto.descrição;
        this.dataRetorno = dto.dataRetorno;
        this.valorTotal = dto.valorTotal;
        this.patrimonios = dto.patrimonios;
    }

    toJSON(){
        return {...this, patrimonios: this.patrimonios.map(p => p.toJSON())};
    }
}