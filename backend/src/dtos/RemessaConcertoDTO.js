export default class RemessaConcertoDTO {
    constructor({
        id,
        valorTotal,
        dataEnvio,
        dataRetorno,
        fornecedor,
        patrimonios = []
    }) {
        this.id = id;
        this.valorTotal = valorTotal;
        this.dataEnvio = dataEnvio;
        this.dataRetorno = dataRetorno;
        this.fornecedor = fornecedor;
        this.patrimonios = patrimonios;

    }
}