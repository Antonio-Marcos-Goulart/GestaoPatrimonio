export default class PatrimonioController {
  constructor(service) {
    this.service = service;

    this.listar = this.listar.bind(this);
    this.buscar = this.buscar.bind(this);
    this.criar = this.criar.bind(this);
    this.atualizar = this.atualizar.bind(this);
    this.deletar = this.deletar.bind(this);
  }

  listar(req, res) {
    const dados = this.service.listar();
    return res.json(dados);
  }

  buscar(req, res) {
    const { id } = req.params;
    const dado = this.service.buscar(id);

    if (!dado) {
      return res.status(404).json({ error: 'Patrimônio não encontrado' });
    }

    return res.json(dado);
  }

  criar(req, res) {
    const novo = this.service.criar(req.body);
    return res.status(201).json(novo);
  }

  atualizar(req, res) {
    const { id } = req.params;
    const atualizado = this.service.atualizar(id, req.body);

    if (!atualizado) {
      return res.status(404).json({ error: 'Patrimônio não encontrado' });
    }

    return res.json(atualizado);
  }

  deletar(req, res) {
    const { id } = req.params;
    this.service.deletar(id);
    return res.status(204).send();
  }
}
