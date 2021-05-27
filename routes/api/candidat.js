const express = require('express')
const router = express.Router()
const  Candidat = require('../../Models/Candidat')
const config = require('config')
const jwt = require('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const {check , validationResult} = require('express-validator')
const auth = require('../../Middelwares/auth')

//@method POST  /api/candidat
//@desc  ajouter un candidat
//@access PUBLIC


router.post ('/' , [

check('nom' , 'le nom est requis').notEmpty() ,

check('prénom' , 'le prénom est requis').notEmpty() , 

check('email' , 'veuillez entrer un email valide').isEmail() ,
check('password' , 'veuillez entrer un mot de passe qui contient au moins 6 caractères').isLength({min:6}) ,
check('date_de_naissance' , 'veuillez entrer une date de naissance').notEmpty() ,
check('sexe' , 'veuillez choisir votre sexe').notEmpty() , 

 ] ,

async (req ,res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

const {nom ,prénom , email , password , password2 , date_de_naissance , sexe } = req.body


try {

    let candidat = await Candidat.findOne({ email });

    if (candidat) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'candidat existe déja' }] });
    }

    if(password !== password2) {

        return res
        .status(400)
        .json({ errors: [{ msg: 'confirmation mot de passe incorrecte' }] });
    }


    const newCandidat = new Candidat({

        nom ,prénom , email , password , date_de_naissance , sexe
        
      });

      const salt = await bcrypt.genSalt(10);

      newCandidat.password = await bcrypt.hash(password, salt);

      await newCandidat.save();

      const payload = {
        candidat: {
          id: newCandidat.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;

          return res.json({ 
              
            token  ,
           candidat: {
            nom : newCandidat.nom , 
            email : newCandidat.email


           }

        });
        }
      );

 



    
} 

catch (error) {
    console.error(error.message);
      return res.status(500).send('Server error');
    
}})

//@method GET   /api/candidat
//@desc  get tous les candidats
//@access PRIVATE

router.get ('/' ,auth ,async (req,res) => {

try {
  
const candidats = await Candidat.find({})

if(candidats.length === 0) res.status(400).json({errors :[{msg : "pas de candidats encore"}] })




return res.
status(200)
.json({msg :"liste des candidats" , candidats})




} catch (error) {
  console.error(error.message);
  return res.status(500).send('Server error');

  
}})


//@method GET   /api/candidat/:id
//@desc  get un candidat par id
//@access PRIVATE

router.get ('/:id' ,auth ,async (req,res) => {

    try {
      
    const candidat= await Candidat.find({_id : req.params.id})
    
    if(!candidat) res.status(400).json({errors :[{msg : "pas de candidats trouvés"}] })
    
    
    
    
    return res.
    status(200)
    .json({msg :"candidat" , candidat})
    
    
    
    
    } catch (error) {
      console.error(error.message);
      return res.status(500).send('Server error');
    
      
    }})
    








//@method PUT  /api/candidat/:id
//@desc  modifier les infos d'un candidat
//@access PRIVATE





router.put ('/:id' , [
    check('nom' , 'le nom est requis').notEmpty() ,

    check('prénom' , 'le prénom est requis').notEmpty() , 
    
    check('email' , 'veuillez entrer un email valide').isEmail() ,
    check('password' , 'veuillez entrer un mot de passe qui contient au moins 6 caractères').isLength({min:6}) ,
    check('date_de_naissance' , 'veuillez entrer une date de naissance').notEmpty() ,
    check('sexe' , 'veuillez choisir votre sexe').notEmpty() , 
    

   ], auth  , async (req,res) => {


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
const  {nom ,prénom , email , password , date_de_naissance , sexe } = req.body



  try {

   await Candidat.findByIdAndUpdate(req.params.id ,{nom ,prénom , email , password , date_de_naissance , sexe })

  const candidatModifié = await Candidat.findById(req.params.id)
  

  return res.
  status(200)
  .json({msg :"candidat modifiée" , candidatModifié})
  
  } 
  
  catch (error) {
    console.error(error.message);
    return res.status(500).send('Server error');
  
    
  }})


  //@method DELETE /api/candidat/:id
//@desc  supprimer un candidat par son id
//@access PRIVATE 


router.delete('/:id' , auth , async (req , res) => {


  try{
  await Candidat.findByIdAndDelete(req.params.id) 
  
  res 
  .status(200)
  .json({msg:"candidat supprimée"})
  
  }
  
  catch (error){
  
    console.error(error.message);
    return res.status(500).send('Server error');
  
  }
  
  
  
  
  })
  
  





 module.exports= router