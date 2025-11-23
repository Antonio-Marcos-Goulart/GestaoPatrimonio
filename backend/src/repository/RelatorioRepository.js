export class RelatorioRepository {
    constructor(databaseConnection) {
        this.db = databaseConnection;
    }

    async findAllPatrimonios() {
        return await this.db.patrimonio.findMany();
    }

    async findPatrimonioById(id) {
        return await this.db.patrimonio.findUnique({
            where: { id },
        });
    }
}
