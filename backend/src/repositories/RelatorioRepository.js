export default class RelatorioRepository {
  constructor(prisma) {
    this.prisma = prisma;
  }

  findAllPatrimonios() {
    return this.prisma.patrimonio.findMany();
  }

  findPatrimonioById(id) {
    return this.prisma.patrimonio.findUnique({
      where: { id }
    });
  }
}