import RemessaConcertoDTO from "../dtos/RemessaConcertoDTO";

export default class RemessaConsertoService {
  constructor(repository) {
    this.repository = repository;
  }
  validarDTO(dto) {
    if (!(dto instanceof RemessaConcertoDTO)) {
      dto = new RemessaConcertoDTO(dto);
    }

    // ID obrigatório
    if (dto.id === undefined || dto.id === null) {
      throw new Error("ID é obrigatório.");
    }

    // Data de envio
    if (dto.dataEnvio == null || isNaN(new Date(dto.dataEnvio).getTime())) {
      throw new Error("Data de envio inválida.");
    }

    // Fornecedor obrigatório
    if (dto.fornecedor == null || dto.fornecedor.trim() === "") {
      throw new Error("Fornecedor é obrigatório.");
    }

    // Lista de patrimônios
    if (!Array.isArray(dto.patrimonios) || dto.patrimonios.length === 0) {
      throw new Error("É necessário informar ao menos um patrimônio na remessa.");
    }

    // Se tudo ok, devolve o DTO “limpo”
    return dto;
  }

  salvarRemessaConserto(dtoData) {
    const dto = this.validarDTO(dtoData)
    return new RemessaConcertoDTO(dto);
  }
}

