const express = require('express');
const app = express();
const {sequelize} = require("./db/db")
const commentsMiddlew = require("./routes/comment")
require('dotenv').config();
const cors = require('cors');
let LOCALPORT = 3001;

app.use(express.json());

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      return callback(new Error(msg), false);
    }

    return callback(null, true);
  }
}));

app.use('/comments', commentsMiddlew);

const allowedOrigins = ["http://localhost:3000", "https://helendreamworld.vercel.app"];



const PORT = process.env.PORT || LOCALPORT;
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
}).catch(error => console.log(error));