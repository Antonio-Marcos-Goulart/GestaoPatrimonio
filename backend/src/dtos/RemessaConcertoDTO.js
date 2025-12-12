export default class RemessaConcertoDTO {
    constructor({
        id,
        valorTotal,
        dataEnvio,
        fornecedor,
        patrimonios = []
    }) {
        this.id = id;
        this.valorTotal = valorTotal;
        this.dataEnvio = dataEnvio;
        this.fornecedor = fornecedor;
        this.patrimonios = patrimonios;

    }
}