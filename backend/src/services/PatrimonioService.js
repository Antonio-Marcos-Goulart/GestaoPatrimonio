import PatrimonioModel from '../models/PatrimonioModel.js';
import PatrimonioDTO from '../dtos/PatrimonioDTO.js';

export default class PatrimonioService {
  constructor(repository) {
    this.repository = repository;
  }

  criar(data) {
    const dto = new PatrimonioDTO(data);
    const model = new PatrimonioModel(dto);
    return this.repository.save(model);
  }

  listar() {
    return this.repository.findAll();
  }

  buscar(id) {
    return this.repository.findById(id);
  }

  atualizar(id, data) {
    const dto = new PatrimonioDTO(data);
    return this.repository.update(id, dto);
  }

  deletar(id) {
    this.repository.delete(id);
  }
}
