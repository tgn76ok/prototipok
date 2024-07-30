import Ligas from '../models/Ligas';


class LigasController {
  async store(req, res) {

      Ligas.create(req.body).catch(errr =>{
        console.log(errr)
      })
    


      return res.json({ message: 'Sucesso' });
    
  }
  // Index
  async index(req, res) {
    try {
      const Ligass = await Ligas.findAll({
        attributes:[ 'id','nome',]
      });
      return res.json(Ligass);
    } catch (e) {
      return res.json(e);
    }
  }

  // Show
  async show(req, res) {
    try {
      const Liga = await Ligas.findByPk(req.params.id,{attributes:[ 'id','nome',]});

      return res.json(Liga);
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const Liga = await  Ligas.findByPk(req.params.id,{attributes:[ 'id','nome',]});

      if (!Liga) {
        return res.status(400).json({
          errors: ['Ligas não existe'],
        });
      }

      const novosDados = await Liga.update(req.body);
      return res.json(novosDados);
    } catch (e) {
      console.log(e)
      return res.json(e);

    }
  }

  // Delete
  async delete(req, res) {
    try {
      const Liga = await  Ligas.findByPk(req.params.id,{attributes:[ 'id','nome',]});

      if (!Liga) {
        return res.status(400).json({
          errors: ['Liga não existe'],
        });
      }

      await Liga.destroy();
      return res.json(null);
    } catch (e) {
      console.log(e)
      return res.json(e);

    }
  }
}

export default new LigasController();