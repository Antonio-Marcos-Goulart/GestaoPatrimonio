

export class RelatorioController {
    constructor(relatorioService) {
        this.relatorioService = relatorioService;
    }

    gerarRelatorioCompleto = async (req, res) => {
        try {
            const relatorio = await this.relatorioService.gerarRelatorioCompleto();
            return res.status(200).json(relatorio);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    };

    gerarRelatorioIndividual = async (req, res) => {
        try {
            const id = parseInt(req.params.id);
            const relatorio = await this.relatorioService.gerarRelatorioIndividual(id);
            return res.status(200).json(relatorio);
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    };
}
