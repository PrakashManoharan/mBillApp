const express = require(`express`);
const mongoose = require(`mongoose`);

const users = require(`./src/routes/api/users`);
const profile = require(`./src/routes/api/profile`);

const app = express();

// DB Config

const db = require(`./config/keys`).mongoURI;

// connect to MongoDB

mongoose
  .connect(db)
  .then(() => console.log(`MongoDB connected`))
  .catch(err => console.log(`err`));

app.get('/', (req, res) => res.send('Helloooo Bommu!'));

// Use Routes

app.use(`/api/users`, users);
app.use(`/api/profile`, profile);

// create a PORT

const port = process.env.PORT || 5000;

// Listening at PORT

app.listen(port, () => console.log(`Server running on port ${port}`));
