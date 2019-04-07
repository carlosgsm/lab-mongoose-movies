const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost:27017/lab-mongoose-movies';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.info(`Successfully connected to the database ${MONGODB_URI}`))
  .catch(() => console.error(`An error ocurred trying to connect to de database ${MONGODB_URI}`, error))