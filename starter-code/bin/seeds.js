
const Celebrity = require('../models/celebrity.model');
const Celebrities = require('../data/celebrities.json');
const mongoose = require('mongoose');
require('../config/db.config');


Celebrity.create(Celebrities)
  .then((Celebrities) => console.info(`${Celebrities.length} new Celeb added to the database`))
  .catch(error => console.error(error))
  .then(() => mongoose.connection.close());