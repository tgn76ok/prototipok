import bethouses from '../models/bethouses';


class bethouserController {
  async store(req, res) {

      
    
    bethouses.create(req.body)
    .then(() => {
      return res.json({ message: 'Sucesso' });
    })
    .catch((error) => {
      console.error('Erro ao criar nova entrada:', error);
      return res.status(500).json({ message: 'Erro ao criar nova entrada na tabela bethouses.' });
    });
    
  }

  async contador(req, res){
    try {
      const bethouse = await bethouses.findByPk(req.params.id,{

        attributes:["id", "all_cont", "nome", "bethouse_url",]
      });

      if (!bethouse) {
        return res.status(400).json({
          errors: ['bethouse não existe'],
        });
      }

      const novosDados = await bethouse.update({
        all_cont:bethouse.all_cont +1
      });
      return res.json(novosDados);
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.errors,
      });
    }
  }
  // Index
  async index(req, res) {
    try {
      const bethouse = await bethouses.findAll({
        attributes:["id", "all_cont", "nome", "bethouse_url",]
      });
      return res.json(bethouse);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const bethouse = await bethouses.findByPk(req.params.id,{

        attributes:["id", "all_cont", "nome", "bethouse_url",]
      });

      return res.json(bethouse);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const bethouse = await bethouses.findByPk(req.params.id,{

        attributes:["id", "all_cont", "nome", "bethouse_url",]
      });

      if (!bethouse) {
        return res.status(400).json({
          errors: ['bethouse não existe'],
        });
      }

      const novosDados = await bethouse.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const bethouse = await bethouses.findByPk(req.params.id,{

        attributes:["id", "all_cont", "nome", "bethouse_url",]
      });

      if (!bethouse) {
        return res.status(400).json({
          errors: ['bethouse não existe'],
        });
      }

      await bethouse.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new bethouserController();