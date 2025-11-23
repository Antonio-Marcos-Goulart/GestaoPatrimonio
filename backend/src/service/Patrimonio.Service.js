import PatrimonioModel from "/models/PatrimonioModel.js";
import PatrimonioDTO from "../dtos/PatrimonioDTO.js";

export default class PatrimonioService {
  constructor(repository) {
    this.repository = repository;
  }

  validarDTO(dto) {
    if (!dto.id && dto.id !== 0) {
      throw new Error("ID é obrigatório.");
    }
    if (!dto.descricao || dto.descricao.trim() === "") {
      throw new Error("Descrição é obrigatória.");
    }
    if (!dto.dataEntrada) {
      throw new Error("Data de entrada é obrigatória.");
    }
    if (!dto.categoria || dto.categoria.trim() === "") {
      throw new Error("Categoria é obrigatória.");
    }
    if (dto.valor == null || isNaN(dto.valor) || dto.valor < 0) {
      throw new Error("Valor inválido.");
    }
    if (!dto.setor || dto.setor.trim() === "") {
      throw new Error("Setor é obrigatório.");
    }
    if (!dto.estado || dto.estado.trim() === "") {
      throw new Error("Estado é obrigatório.");
    }
  }

  criar(data) {
    const dto = new PatrimonioDTO(data);
    this.validarDTO(dto);

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
    this.validarDTO(dto);

    return this.repository.update(id, dto);
  }

  deletar(id) {
    this.repository.delete(id);
  }
}
