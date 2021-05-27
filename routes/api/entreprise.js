const express = require('express')
const router = express.Router()
const Entreprise = require('../../Models/Entreprise')
const config = require('config')
const jwt = require('jsonwebtoken')
const bcrypt = require ('bcryptjs')
const {check , validationResult} = require('express-validator')
const auth = require('../../Middelwares/auth')

//@method POST  /api/entreprise
//@desc  ajouter une entreprise
//@access PUBLIC


router.post ('/' , [

check('nom' , 'le nom est requis').notEmpty() ,
check('email' , 'vous devez entrer un email valide').isEmail() ,
check('password' , 'password is required').notEmpty() ,
check('matricule_fiscale' , 'le matricule fiscale est requis').notEmpty() , 
check('forme_juridique' , 'la forme juridique est requise').notEmpty() ,
check('secteur' , 'le secteur est requis').notEmpty() , 
check('nbre_employes' , 'le nombre d\' employés est requis').notEmpty()
 ] ,

async (req ,res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

const {nom , email , password ,password2, matricule_fiscale , forme_juridique , secteur , nbre_employes} = req.body


try {

    let entreprise = await Entreprise.findOne({ email });

    if (entreprise) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Entreprise existe déja' }] });
    }

    if(password !== password2) {

        return res
        .status(400)
        .json({ errors: [{ msg: 'confirmation mot de passe incorrecte' }] });
    }


    const newEntreprise = new Entreprise({

        nom , email , password , matricule_fiscale , forme_juridique , secteur , nbre_employes
        
      });

      const salt = await bcrypt.genSalt(10);

      newEntreprise.password = await bcrypt.hash(password, salt);

      await newEntreprise.save();

      const payload = {
        entreprise: {
          id: newEntreprise.id
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
           entreprise : {
            nom : newEntreprise.nom , 
            email : newEntreprise.email


           }

        });
        }
      );

 



    
} 

catch (error) {
    console.error(error.message);
      return res.status(500).send('Server error');
    
}})

//@method GET   /api/entreprise
//@desc  get tous les entreprises
//@access Public

router.get ('/' , async (req,res) => {

try {
  
const entreprises = await Entreprise.find({})

if(entreprises.length === 0) res.status(400).json({errors :[{msg : "pas d'entreprises encore"}] })




return res.
status(200)
.json({msg :"liste d'entreprises" , entreprises})




} catch (error) {
  console.error(error.message);
  return res.status(500).send('Server error');

  
}})


//@method GET   /api/entreprise/:id
//@desc  get une entreprise par id
//@access PRIVATE

router.get ('/:id' ,auth ,async (req,res) => {

  try {
    
  const entreprise= await Entreprise.find({_id : req.params.id})
  
  if(!entreprise) res.status(400).json({errors :[{msg : "pas de candidats trouvés"}] })
  
  
  
  
  return res.
  status(200)
  .json({msg :"entreprise" , entreprise})
  
  
  
  
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Server error');
  
    
  }})







//@method PUT  /api/entreprise
//@desc  modifier les infos d'une entreprise
//@access PRIVATE





router.put ('/:id' , [

  check('nom' , 'le nom est requis').notEmpty() ,
  check('email' , 'vous devez entrer un email valide').isEmail() ,
  check('password' , 'password is required').notEmpty() ,
  check('matricule_fiscale' , 'le matricule fiscale est requis').notEmpty() , 
  check('forme_juridique' , 'la forme juridique est requise').notEmpty() ,
  check('secteur' , 'le secteur est requis').notEmpty() , 
  check('nbre_employes' , 'le nombre d\' employés est requis').notEmpty()
   ], auth  , async (req,res) => {


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
const {nom , email , password, matricule_fiscale , forme_juridique , secteur , nbre_employes} = req.body

  try {


   await Entreprise.findByIdAndUpdate(req.params.id ,{
    nom , email , password, matricule_fiscale , forme_juridique , secteur , nbre_employes})

  const entrepriseModifié = await Entreprise.findById(req.params.id)
  
  
  
  
  return res.
  status(200)
  .json({msg :"entreprise modifiée" , entrepriseModifié})
  
  
  
  
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Server error');
  
    
  }})
  

//@method DELETE /api/entreprise/:id
//@desc  supprimer une entreprise par son id
//@access PRIVATE 


router.delete('/:id' , auth , async (req , res) => {


try{
await Entreprise.findByIdAndDelete(req.params.id) 

res 
.status(200)
.json({msg:"entreprise supprimée"})

}

catch (error){

  console.error(error.message);
  return res.status(500).send('Server error');

}




})


 module.exports= router