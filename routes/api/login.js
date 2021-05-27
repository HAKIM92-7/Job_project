const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../Middelwares/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const Candidat = require ('../../Models/Candidat')
const Entreprise = require ('../../Models/Entreprise')


//-------------------------------------Entreprise----------------------------------------------------------------

// @route    GET api/login/entreprise
// @desc     Get entreprise by token
// @access   Private

router.get('/entreprise', auth, async (req, res) => {
  try {
    const entreprise = await Entreprise.findById(req.user.id).select('-password');
    return res.json(entreprise);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});

// @route    POST api/login/entreprise
// @desc     login entreprise & get token
// @access   PUBLIC

router.post(
  '/entreprise',
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let entreprise = await Entreprise.findOne({ email });

      if (!entreprise) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'email ou mot de passe incorrect' }] });
      }

      const isMatch = await bcrypt.compare(password, entreprise.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'email ou mot de passe incorrect' }] });
      }

      const payload = {
        entreprise: {
          id: entreprise.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: '5 days' },
        (err, token) => {
          if (err) throw err;
          return res.json({ 
              token , 

              entreprise
            
            
            
            });
        }
      );
    } catch (err) {
      console.error(err.message);
     return  res.status(500).send('Server error');
    }
  }
);


//-------------------------------------Candidat------------------------------------------------------------------------------------

// @route    GET api/login/candidat
// @desc     Get candidat by token
// @access   Private

router.get('/candidat', auth, async (req, res) => {
    try {
      const candidat = await Candidat.findById(req.user.id).select('-password');
      return res.json(candidat);
    } catch (err) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  });

  
  // @route    POST api/login/candidat
  // @desc     login entreprise & get token
  // @access   PUBLIC
  
  router.post(
    '/candidat',
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { email, password } = req.body;
  
      try {
        let candidat = await Candidat.findOne({ email });
  
        if (!candidat) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'email ou mot de passe incorrect' }] });
        }
  
        const isMatch = await bcrypt.compare(password, candidat.password);
  
        if (!isMatch) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'email ou mot de passe incorrect' }] });
        }
  
        const payload = {
          candidat: {
            id: candidat.id
          }
        };
  
        jwt.sign(
          payload,
          config.get('jwtSecret'),
          { expiresIn: '5 days' },
          (err, token) => {
            if (err) throw err;
            return res.json({ 
                token , 
  
                candidat
              
              
              
              });
          }
        );
      } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server error');
      }
    }
  );

















module.exports = router;