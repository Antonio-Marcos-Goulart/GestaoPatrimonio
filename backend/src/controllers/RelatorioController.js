export default class RelatorioController {
  constructor(service) {
    this.service = service;

    this.gerarRelatorioCompleto = this.gerarRelatorioCompleto.bind(this);
    this.gerarRelatorioIndividual = this.gerarRelatorioIndividual.bind(this);
  }

  async gerarRelatorioCompleto(req, res) {
    const relatorio = await this.service.gerarRelatorioCompleto();
    return res.json(relatorio);
  }

  async gerarRelatorioIndividual(req, res) {
    const { id } = req.params;
    const relatorio = await this.service.gerarRelatorioIndividual(Number(id));
    return res.json(relatorio);
  }
}
