export default class PatrimonioModel {
  constructor(dto) {
    this.id = dto.id;
    this.descricao = dto.descricao;
    this.dataEntrada = dto.dataEntrada;
    this.categoria = dto.categoria;
    this.notaFiscal = dto.notaFiscal;
    this.valor = dto.valor;
    this.setor = dto.setor;
    this.estado = dto.estado;
  }

  toJSON() {
    return { ...this };
  }
}
