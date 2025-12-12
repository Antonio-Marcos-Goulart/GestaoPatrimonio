export default class RemessaConsertoModel {
    constructor(dto) {
        this.id = dto.id;
        this.valorTotal = dto.valorTotal;
        this.dataEnvio = dto.dataEnvio;
        this.fornecedor = dto.fornecedor;

        this.patrimonios = Array.isArray(dto.patrimonios)
            ? dto.patrimonios.map(p => new PatrimonioModel(p))
            : [];

    }

    toJSON() {
        return { ...this, patrimonios: this.patrimonios.map(p => p.toJSON()) };
    }
}