const express = require('express');
const router = express.Router();
const auth = require('../../Middelwares/auth');
const { check, validationResult } = require('express-validator')
const Offre = require ('../../Models/Offre')




// @route  POST  api/offre
// @desc   Creer une offre
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




module.exports = router