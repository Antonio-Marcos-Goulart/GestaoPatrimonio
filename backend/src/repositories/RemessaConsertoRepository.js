export default class RemessConsertoRepository {
    constructor(){
        this.key = "remessasConserto";
        this.remessasConserto = this._load();
    }

    _load(){
        const data = localStorage.getItem(this.key);
        return data ? JSON.parse(data) : [];
    }

    _save(){
        localStorage.setItem(this.key, JSON.stringify(this.remessasConserto));
    }

    save(remessaConserto){
        this.remessasConserto.push(remessaConserto);
        this._save();
        return remessaConserto;
    }

    findAll(){
        return this.remessasConserto;
    }

    findById(id){
        return this.remessasConserto.find((r) => r.id == id);
    }

    update(id, novo){
        const index = this.remessasConserto.findIndex((r) => r.id == id);
        if(index === -1) return null;

        this.remessasConserto[index] = {...this.remessasConserto[index], ...novo};
        this._save();
        return this.remessasConserto[index];
    }

    delete(id){
        this.remessasConserto = this.remessasConserto.filter((r) => r.id != id);
        this._save();
    }
}
