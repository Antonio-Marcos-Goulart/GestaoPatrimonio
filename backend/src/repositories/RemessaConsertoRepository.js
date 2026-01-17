export default class RemessaConsertoRepository {
  constructor() {
    this.remessas = [];
  }

  save(remessa) {
    this.remessas.push(remessa);
    return remessa;
  }

  findAll() {
    return this.remessas;
  }

  findById(id) {
    return this.remessas.find(r => r.id == id);
  }

  update(id, dados) {
    const index = this.remessas.findIndex(r => r.id == id);
    if (index === -1) return null;

    this.remessas[index] = {
      ...this.remessas[index],
      ...dados
    };

    return this.remessas[index];
  }

  delete(id) {
    this.remessas = this.remessas.filter(r => r.id != id);
  }
}
