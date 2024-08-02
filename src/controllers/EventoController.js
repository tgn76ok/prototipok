import Profile from '../models/profile';
import Grands from '../models/grant';
import Grandsprofile from '../models/profileGrant';

class GrandsController {
  async store(req, res) {

      
      
      const [profile, created] = await Profile.findOrCreate({
        where: {  name: 'User_comun'},
        defaults: {
                  
          name: 'User_comun',
          description: 'usuario comun',
          isAdmin: false
        }
      })

      const routes = await Grands.bulkCreate([
        { grant: 'post', route: '/users/cheking/', note: 'User comun fazer o cheking' },
        { grant: 'get,update,delete', route: '/users/', note: 'acesso as infos do proprio user' },
        { grant: 'get', route: '/users/plano/', note: 'pegar o plano do user' },
        { grant: 'get', route: '/users/treino/:id/', note: 'pegar o treino' },

        { grant: 'get', route: '/treino/:id/exercicios/', note: 'pegar todos os treinos por cateoria' },

      ]);
      

      const newlints = routes.map(grand =>{
        return { profileId : profile.id , grantId:grand.id  }
      })
      
      const grandsPrfile = await Grandsprofile.bulkCreate(newlints)


      


      return res.json({ message: 'Sucesso' });
    
  }
  
  // Index
  async index(req, res) {
    console.log('-----------------------')
    try {
      const grands = await Grands.findAll({});
      
      return res.status(200).json({mesn:'dsfsd',dados:grands});
    } catch (e) {
      console.log(e)
      return res.json(e);
    }
  }
  

  async indexligaçoes(req, res) {
    console.log('-----------------------')
    try {
      const grands = await Grandsprofile.findAll({});
      
      return res.status(200).json(grands);
    } catch (e) {
      console.log(e)
      return res.json(e);
    }
  }
  // Show
  async show(req, res) {
    try {
      const profile = await profile.findByPk(req.params.id);

      const { id, name, isAdmin } = profile;
      return res.json({ id, name, isAdmin });
    } catch (e) {
      return res.json(null);
    }
  }

  // Update
  async update(req, res) {
    try {
      const profile = await profile.findByPk(req.profileId);

      if (!profile) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await profile.update(req.body);
      const { id, name, isAdmin } = novosDados;
      return res.json({ id, name, isAdmin });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const profile = await profile.findByPk(req.profileId);

      if (!profile) {
        return res.status(400).json({
          errors: ['Perfio do usuairo não existe'],
        });
      }

      await profile.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new GrandsController();