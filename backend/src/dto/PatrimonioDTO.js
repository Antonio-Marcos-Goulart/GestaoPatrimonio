export default class PatrimonioDTO {
  constructor({
    id,
    descricao,
    dataEntrada,
    categoria,
    notaFiscal,
    valor,
    setor,
    estado
  }) {
    this.id = id;
    this.descricao = descricao;
    this.dataEntrada = dataEntrada;
    this.categoria = categoria;
    this.notaFiscal = notaFiscal;
    this.valor = valor;
    this.setor = setor;
    this.estado = estado;
  }
}
