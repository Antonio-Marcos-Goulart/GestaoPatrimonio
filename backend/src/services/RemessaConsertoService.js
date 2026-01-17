import RemessaConsertoDTO from "../dtos/RemessaConsertoDTO.js";
import RemessaConsertoModel from "../models/RemessaConsertoModel.js";

export default class RemessaConsertoService {
  constructor(repository) {
    this.repository = repository;
  }

  validarDTO(data) {
    const dto = data instanceof RemessaConsertoDTO
      ? data
      : new RemessaConsertoDTO(data);

    if (dto.id == null) {
      throw new Error("ID é obrigatório.");
    }

    if (!dto.dataEnvio || isNaN(new Date(dto.dataEnvio).getTime())) {
      throw new Error("Data de envio inválida.");
    }

    if (!dto.fornecedor || dto.fornecedor.trim() === "") {
      throw new Error("Fornecedor é obrigatório.");
    }

    if (!Array.isArray(dto.patrimonios) || dto.patrimonios.length === 0) {
      throw new Error("Informe ao menos um patrimônio.");
    }

    return dto;
  }

  create(data) {
    const dto = this.validarDTO(data);
    const model = new RemessaConsertoModel(dto);
    return this.repository.save(model);
  }

  findAll() {
    return this.repository.findAll();
  }

  findById(id) {
    return this.repository.findById(id);
  }

  update(id, data) {
    const dto = this.validarDTO({ ...data, id });
    return this.repository.update(id, dto);
  }

  delete(id) {
    this.repository.delete(id);
  }
}
