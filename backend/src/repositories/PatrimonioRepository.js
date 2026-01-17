export default class PatrimonioRepository {
  constructor() {
    this.patrimonios = [];
  }

  save(patrimonio) {
    this.patrimonios.push(patrimonio);
    return patrimonio;
  }

  findAll() {
    return this.patrimonios;
  }

  findById(id) {
    return this.patrimonios.find(p => p.id == id);
  }

  update(id, novo) {
    const index = this.patrimonios.findIndex(p => p.id == id);
    if (index === -1) return null;

    this.patrimonios[index] = {
      ...this.patrimonios[index],
      ...novo
    };

    return this.patrimonios[index];
  }

  delete(id) {
    this.patrimonios = this.patrimonios.filter(p => p.id != id);
  }
}
