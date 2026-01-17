export default class RelatorioService {
  constructor(patrimonioRepository) {
    this.patrimonioRepository = patrimonioRepository;
  }

  async gerarRelatorioCompleto() {
    const patrimonios = await this.patrimonioRepository.findAll();

    return {
      totalItens: patrimonios.length,
      valorTotal: patrimonios.reduce((acc, p) => acc + p.valor, 0),
      itens: patrimonios
    };
  }

  async gerarRelatorioIndividual(id) {
    const item = await this.patrimonioRepository.findById(id);

    if (!item) {
      throw new Error("Patrimônio não encontrado");
    }

    return item;
  }
}
