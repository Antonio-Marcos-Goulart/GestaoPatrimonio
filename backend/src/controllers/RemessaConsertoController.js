export class RemessaConsertoController {
  constructor(service) {
    this.service = service;

    this.findAll = this.findAll.bind(this);
    this.findById = this.findById.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async findAll(req, res) {
    try {
      return res.json(this.service.findAll());
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  }

  async findById(req, res) {
    const remessa = this.service.findById(req.params.id);
    if (!remessa) {
      return res.status(404).json({ error: "Remessa não encontrada" });
    }
    return res.json(remessa);
  }

  async create(req, res) {
    try {
      const remessa = this.service.create(req.body);
      return res.status(201).json(remessa);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }

  async update(req, res) {
    try {
      const remessa = this.service.update(req.params.id, req.body);
      return res.json(remessa);
    } catch (e) {
      return res.status(400).json({ error: e.message });
    }
  }

  async delete(req, res) {
    this.service.delete(req.params.id);
    return res.status(204).send();
  }
}
