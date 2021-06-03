const express = require('express');
const router = express.Router();
const auth = require('../../Middelwares/auth');
const { check, validationResult } = require('express-validator');
const Profile = require('../../Models/Profil_candidat');
const Candidat = require ('../../Models/Candidat')

const path = require ('path');
const fs= require('fs');

// @route  GET  api/profile_candidat
// @desc   current candidat profile
// @access Private

router.get('/me', auth, async function (req, res) {
  try {
    const profile = await Profile.findOne({
      candidat : req.user.id
    });

    if (!profile) {
   return res.status(400).json({ msg: "you haven't a profile yet" });
    }
    return res.json({msg : "current profile" , profile});
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('server error');
  }
});



// @route  POST  api/profile_candidat
// @desc   Create or update a profile
// @access Private

router.post(
  '/',
  [
    auth,

    [
      check('telephone', 'veuiller ajouter un numéro de téléphone').not().isEmpty(),
      check('etat_civile', 'veuiller ajouter votre état civile').not().isEmpty(),
      check('contact_email', 'veuillez ajouter un email de contact').not().isEmpty(),
      check('zone_géographique', 'veuillez choisir votre zone géographique').not().isEmpty(),
      check('region', 'veuillez choisir votre région').notEmpty() , 
      check('district', 'veuillez choisir votre district').notEmpty() , 
      check('dernier_diplome_obtenu', 'veuillez ajouter votre dernier diplome obtenu').notEmpty() , 
      check('langues', 'veuillez choisir au moins une langue').notEmpty() , 
      check('competences', 'veuillez ajouter des compétences').notEmpty() 



               
      

 
  ] ],

  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    const {telephone , etat_civile , contact_email , zone_géographique ,
       region , district ,dernier_diplome_obtenu ,
       langues , competences , experiences_professionelles  } = req.body;

try {
    const  profileFields = {};

    profileFields.candidat = req.user.id;
    if (telephone) profileFields.telephone = telephone;
    if (etat_civile) profileFields.etat_civile = etat_civile;
    if (contact_email) profileFields.contact_email = contact_email;

    if (zone_géographique) profileFields.zone_géographique = zone_géographique;
    if (region) profileFields.region = region;
    if (district) profileFields.district = district;
    if (dernier_diplome_obtenu) profileFields.dernier_diplome_obtenu = dernier_diplome_obtenu;
    if (langues) profileFields.langues = langues;
    if (competences) profileFields.competences = competences;
    if (experiences_professionelles) profileFields.experiences_professionelles = experiences_professionelles;


   

    
      let profile = await Profile.findOne({ candidat: req.user.id });

      if (profile) {
        //update
        profile = await Profile.findOneAndUpdate(
          { candidat: req.user.id },
          { $set: profileFields },
          { new: true }
        );
        return res.json({msg:"profile updated" , profile});
      }

      profile = new Profile(profileFields);

      await profile.save();

      return res.json({msg : "profile added" , profile});
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('server Error');
    }
  }
);


// @route  GET  api/profile_candidat/:candidat_id
// @desc   Get profile by candidat id
// @access Private

router.get('/:candidat_id',auth , async (req, res) => {
  try {
    let profile = await Profile.findOne({
      candidat : req.params.candidat_id,
    })
    if (!profile)
      return res
        .status(400)
        .json({ errors: [{ msg: "ce candidat n'a pas de profile ! " }] });

    return res.json(profile);
  } catch (err) {
    console.error(err.message);

    if (err.kind === 'ObjectId') {
      return res
        .status(400)
        .json({ errors: [{ msg: "ce candidat n'a pas de profile !"}] });
    }
    return res.status(500).send('error server');
  }
});

// @route  DELETE  api/profile_candidat
// @desc   Delete a profile and candidat
// @access Private

router.delete('/',auth, async (req, res) => {
  try {
    // await Product.deleteMany({ seller: req.user.id });
    // remove profile
    await Profile.findOneAndDelete({candidat: req.user.id });
    
    //supprimer candidat
    await Candidat.findByIdAndDelete({ _id: req.user.id });
    return res.json({ msg: 'Candidat & Profile supprimés' });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('server error');
  }
});



module.exports = router