export default class PatrimonioController {
  constructor(service) {
    this.service = service;
  }

  criar(data) {
    try {
      return this.service.criar(data);
    } catch (error) {
      alert("Erro ao criar patrimônio: " + error.message);
      return null;
    }
  }

  listar() {
    return this.service.listar();
  }

  buscar(id) {
    return this.service.buscar(id);
  }

  atualizar(id, data) {
    try {
      return this.service.atualizar(id, data);
    } catch (error) {
      alert("Erro ao atualizar: " + error.message);
      return null;
    }
  }

  deletar(id) {
    this.service.deletar(id);
  }
}
