export default class PatrimonioRepository {
  constructor() {
    this.key = "patrimonios";
    this.patrimonios = this._load();
  }

  _load() {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : [];
  }

  _save() {
    localStorage.setItem(this.key, JSON.stringify(this.patrimonios));
  }

  save(patrimonio) {
    this.patrimonios.push(patrimonio);
    this._save();
    return patrimonio;
  }

  findAll() {
    return this.patrimonios;
  }

  findById(id) {
    return this.patrimonios.find((p) => p.id == id);
  }

  update(id, novo) {
    const index = this.patrimonios.findIndex((p) => p.id == id);
    if (index === -1) return null;

    this.patrimonios[index] = { ...this.patrimonios[index], ...novo };
    this._save();
    return this.patrimonios[index];
  }

  delete(id) {
    this.patrimonios = this.patrimonios.filter((p) => p.id != id);
    this._save();
  }
}
