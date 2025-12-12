// src/controller/RemessaConsertoController.js

export class RemessaConsertoController {
  constructor(service) {
    this.service = service;

    // garante que o "this" continue apontando para a instância no Express
    this.findAll = this.findAll.bind(this);
    this.findById = this.findById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async findAll(req, res) {
    try {
      const remessas = await this.service.listar();
      // se o service retornar models, toJSON cuida
      const resultado = remessas.map((r) =>
        r.toJSON ? r.toJSON() : r
      );
      return res.json(resultado);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ erro: "Erro ao listar remessas de conserto." });
    }
  }

  async findById(req, res) {
    try {
      const { id } = req.params;
      const remessa = await this.service.buscar(id);

      if (!remessa) {
        return res
          .status(404)
          .json({ erro: "Remessa de conserto não encontrada." });
      }

      return res.json(remessa.toJSON ? remessa.toJSON() : remessa);
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ erro: "Erro ao buscar remessa de conserto." });
    }
  }

  async create(req, res) {
    try {
      const dados = req.body;

      const criada = await this.service.criar(dados);

      return res
        .status(201)
        .json(criada.toJSON ? criada.toJSON() : criada);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ erro: error.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const dados = req.body;

      const atualizada = await this.service.atualizar(id, dados);

      if (!atualizada) {
        return res
          .status(404)
          .json({ erro: "Remessa de conserto não encontrada para atualização." });
      }

      return res.json(atualizada.toJSON ? atualizada.toJSON() : atualizada);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ erro: error.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const removida = await this.service.deletar(id);

      if (!removida) {
        return res
          .status(404)
          .json({ erro: "Remessa de conserto não encontrada para exclusão." });
      }

      return res.status(204).send();
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ erro: "Erro ao excluir remessa de conserto." });
    }
  }
}
