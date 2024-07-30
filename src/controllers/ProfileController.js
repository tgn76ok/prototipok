import Profile from '../models/profile';
import Grands from '../models/grant';
import Grandsprofile from '../models/profileGrant';

class profileController {
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
        { grant: 'post', route: '/users/cheking', note: 'User comun fazer o cheking' },
        { grant: 'get,update,delete', route: '/users', note: 'acesso as infos do proprio user' },
        { grant: 'get', route: '/users/plano', note: 'pegar o plano do user' },
        { grant: 'get', route: '/users/MudarSenha', note: 'pegar o plano do user' },
        { grant: 'get', route: '/users/treino/:id', note: 'pegar o treino' },

        { grant: 'get', route: '/treino/categoria/:categoria', note: 'pegar todos os treinos por cateoria' },
        { grant: 'update,post,get', route: '/users/Professores', note: 'pegar todos os treinos por cateoria' },
        { grant: 'get,post',      route: '/MensagemAluno',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' },
      { grant: 'get,post',      route: '/MensagemAluno/:id',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' },
      { grant: 'get,post',      route: '/MensagemAluno/MeusAvisos',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' }
      ]);
      

      const newlints = routes.map(grand =>{
        return { profileId : profile.id , grantId:grand.id  }
      })
      
      const grandsPrfile = await Grandsprofile.bulkCreate(newlints)


      


      return res.json({ message: 'Sucesso' });
    
  }
  async storeProfessor(req, res) {

      
      
    const [profile, created] = await Profile.findOrCreate({
      where: {  name: 'User_professornatacacao'},
      defaults: {
                
        name: 'User_professornatacacao',
        description: 'o profissional da area de edução natacao',
        isAdmin: false
      }
    })
    
  

    const routes = await Grands.bulkCreate([

      { grant: 'get,post',      route: '/natacao/Plano/MeusPlanos',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' },
      { grant: 'get,post',      route: '/natacao/Plano/MeusPlanosAlunos/:id',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' },
      { grant: 'update,post,get', route: '/natacao/users/picture', note: 'pegar todos os treinos por cateoria' },
      { grant: 'update,post,get', route: '/natacao/MudarSenha', note: 'pegar todos os treinos por cateoria' },
      { grant: 'update,post,get', route: '/natacao/RecuperarSenha', note: 'pegar todos os treinos por cateoria' },
      { grant: 'get,post',      route: '/natacao/Professor',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' },
      { grant: 'get,post',      route: '/natacao/Professor/',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' },

      { grant: 'get,post',      route: '/natacao/Formulario',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' },
      { grant: 'get,post',      route: '/natacao/Formulario/iniciacao1',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' },
      { grant: 'get,post',      route: '/natacao/Formulario/iniciacao2',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' },
      { grant: 'get,post',      route: '/natacao/Formulario/Adaptacao1',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' },
      { grant: 'get,post',      route: '/natacao/Formulario/Adaptacao2',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' },
      { grant: 'get,post',      route: '/natacao/Formulario/Aprimoramento1',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' },
      { grant: 'get,post',      route: '/natacao/Formulario/Aprimoramento2',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' },
      { grant: 'get,post',      route: '/natacao/Formulario/Polimento1',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' },
      { grant: 'get,post',      route: '/natacao/Formulario/Polimento2',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' },
      { grant: 'get,post',      route: '/natacao/Formulario/Avancado',     note: 'Criar os planos,ver todos os plano criados pelo proprio treinador' },
    ]);
    

    const newlints = routes.map(grand =>{
      return { profileId : profile.id , grantId:grand.id  }
    })
    
    const grandsPrfile = await Grandsprofile.bulkCreate(newlints)


    


    return res.json({ message: 'Sucesso' });
  
}
  async storeAdmin(req, res) {

        
        
    const [profile, created] = await Profile.findOrCreate({
      where: {  name: 'User_Admin'},
      defaults: {
                
        name: 'User_Admin',
        description: 'o profissional da area de edução fisica',
        isAdmin: true
      }
    })
    



    


    return res.json({ message: 'Sucesso' });

  }
  // Index
  async index(req, res) {
    try {
      const profiles = await Profile.findAll();
      return res.json(profiles);
    } catch (e) {
      return res.json(null);
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

export default new profileController();