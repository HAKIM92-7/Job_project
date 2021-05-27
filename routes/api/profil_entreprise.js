const express = require('express');
const router = express.Router();
const auth = require('../../Middelwares/auth');
const { check, validationResult } = require('express-validator');
const Profile = require('../../Models/Profil_entreprise');
const Entreprise = require ('../../Models/Entreprise')

const path = require ('path');
const fs= require('fs');

// @route  GET  api/profile_entreprise
// @desc   current entreprise profile
// @access Private

router.get('/', auth, async function (req, res) {
  try {
    const profile = await Profile.findOne({
      entreprise : req.user.id
    });

    if (!profile) {
   return res.status(400).json({ msg: "you haven't a profile yet" });
    }
    return res.json(profile);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('server error');
  }
});

// @route  POST  api/profile_entreprise
// @desc   Create or update a profile
// @access Private

router.post(
  '/',
  [
    auth,

    [
      check('adresse', 'veuiller ajouter une adresse').not().isEmpty(),
      check('code_postale', 'veuiller ajouter un code postal').not().isEmpty(),
      check('pays', 'veuillez choisir un pays').not().isEmpty(),
      check('numero_fixe', 'veuillez ajouter un  numero fixe').not().isEmpty(),
      check('contact_email', 'veuillez ajouter un email de contact').isEmail()
 
  ] ],

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    const {adresse , code_postale , pays , mobile , numero_fixe , fax , contact_email} = req.body;

try {
    const  profileFields = {};

    profileFields.entreprise = req.user.id;
    if (adresse) profileFields.adresse = adresse;
    if (code_postale) profileFields.code_postale = code_postale;
    if (pays) profileFields.pays = pays;

    if (mobile) profileFields.mobile = mobile;
    if (numero_fixe) profileFields.numero_fixe = numero_fixe;
    if (fax) profileFields.fax = fax;
    if (contact_email) profileFields.contact_email = contact_email;
   

    
      let profile = await Profile.findOne({ entreprise: req.user.id });

      if (profile) {
        //update
        profile = await Profile.findOneAndUpdate(
          { entreprise: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json(profile);
      }

      profile = new Profile(profileFields);

      await profile.save();

      return res.json(profile);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('server Error');
    }
  }
);

// @route  POST  api/entreprise/upload
// @desc   upload shop logo
// @access Private

// router.post('/upload',auth, (req, res) => {

//   if (req.files === null) {

//     return res.status(400).json({ errors: [{ msg: 'no logo uploaded' }] });

//   }

//   const file = req.files.file;  
  

//   fs.readdir(path.join(__dirname , `../../client/public/uploads/shops_logos`),function(err, files) {
//     if (err) {
//        return console.error(err);
//     }
  
    
      
 
    
 
// if (!files.includes(file.name) )
// {
// file.mv(path.join(__dirname , `../../client/public/uploads/shops_logos/${file.name}`), err => {
 

//     if (err) {

//       console.error(err);
//       return res.status(500).send(err);
//     }
//     res.json({ fileName: file.name, filePath: `/uploads/shops_logos/${file.name}` });
//   }) ;}});
// });















// @route  GET  api/profile_entreprise
// @desc   Get all profiles
// @access Public

router.get('/', async (req, res) => {
  try {
    let profiles = await Profile.find()

    return res.json(profiles);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('error server');
  }
});

// @route  GET  api/profile_entreprise/:entreprise_id
// @desc   Get profile by entreprise id
// @access Public

router.get('/:entreprise_id', async (req, res) => {
  try {
    let profile = await Profile.findOne({
      entreprise : req.params.entreprise_id,
    })
    if (!profile)
      return res
        .status(400)
        .json({ errors: [{ msg: "cette entreprise n'a pas de profile ! " }] });

    return res.json(profile);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res
        .status(400)
        .json({ errors: [{ msg: "cette entreprise n'a pas de profile !"}] });
    }
    return res.status(500).send('error server');
  }
});

// @route  DELETE  api/profile_entreprise
// @desc   Delete a profile and company
// @access Private

router.delete('/', auth, async (req, res) => {
  try {
    // await Product.deleteMany({ seller: req.user.id });
    // remove profile
    await Profile.findOneAndDelete({ entreprise: req.user.id });

    // remove user
    await Entreprise.findByIdAndDelete({ _id: req.user.id });
    return res.json({ msg: 'Entreprise & Profile supprimés' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server error');
  }
});

module.exports = router;