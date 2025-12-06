// ReportService.js

export class RelatorioService {
    constructor(relatorioRepository) {
        this.relatorioRepository = relatorioRepository;
    }

    async gerarRelatorioCompleto() {
        const patrimonios = await this.relatorioRepository.findAllPatrimonios();

        return {
            totalItens: patrimonios.length,
            valorTotal: patrimonios.reduce((acc, p) => acc + p.valor, 0),
            itens: patrimonios
        };
    }

    async gerarRelatorioIndividual(id) {
        const item = await this.relatorioRepository.findPatrimonioById(id);

        if (!item) throw new Error("Patrimônio não encontrado");

        return {
            id: item.id,
            nome: item.nome,
            descricao: item.descricao,
            valor: item.valor,
            status: item.status
        };
    }
}
