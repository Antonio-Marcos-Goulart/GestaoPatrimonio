export default class RetornoConsertoRepository {
    constructor() {
        this.key = 'retornosConserto';
        this.retornoConcerto = this._load();
    }

    _load() {
        const data = localStorage.getItem(this.key);
        return data ? JSON.parse(data) : [];
    }
    _save() {
        localStorage.setItem(this.key, JSON.stringify(this.retornoConcerto));
    }
    save(retornoConserto) {
        this.retornoConcerto.push(retornoConserto);
        this._save();
        return retornoConserto;
    }
    findAll() {
        return this.retornoConcerto;
    }
    findById(id) {
        return this.retornoConcerto.find((r) => r.id == id);
    }
    update(id, novo) {
        const index = this.retornoConcerto.findIndex((r) => r.id == id);
        if (index === -1) return null;

        this.retornoConcerto[index] = { ...this.retornoConcerto[index], ...novo };
        this._save();
        return this.retornoConcerto[index];
    }

    delete(id) {
        this.retornoConcerto = this.retornoConcerto.filter((r) => r.id != id);
        this._save();
    }
}