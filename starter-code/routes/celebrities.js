const express = require('express');
const Celebrity = require('../models/celebrity.model');
const router  = express.Router();


/* GET home page */
// router.get('/celebrities', celebritiesControler.show);
router.get('/', (req, res, next) => {
  Celebrity.find({})
    .then((celebrities) => {
      console.log(celebrities);
      res.render('celebrities/index', { celebrities });
    })
    .catch(next);
});

router.post('/', (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.create({ name, occupation, catchPhrase })
    .then((result) => {
      res.redirect('/celebrities');
    })
    .catch(next);
});

module.exports = router;

// router.get('/', (req, res, next) => {
//     Celebrity.find({})
//       .then((celebrities) => {
//         console.log(celebrities);
//         res.render('celebrities/index', { celebrities });
//       })
//       .catch(next);
//   });
  
  
  

