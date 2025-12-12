export default class RetornoConsertoDTO {
    constructor({
        id,
        descrição,
        dataRetorno,
        valorTotal,
        patrimonios =[]
    }) {
        this.id = id;
        this.descrição = descrição;
        this.dataRetorno = dataRetorno;
        this.valorTotal = valorTotal;
        this.patrimonios = patrimonios;
    }
}