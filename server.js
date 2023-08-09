const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static('src/assets'));

// Ruta para obtener los personajes
app.get('/characters', (req, res) => {
  const data = fs.readFileSync('src/assets/data/database.json', 'utf8');
  const characters = JSON.parse(data).characters;
  res.json(characters);
});

// Ruta para crear un nuevo personaje
app.post('/characters', (req, res) => {
  try {
    const data = fs.readFileSync('src/assets/data/database.json', 'utf8');
    const characters = JSON.parse(data).characters;

    const newCharacter = req.body;
    newCharacter.id = characters.length + 1;

    characters.push(newCharacter);

    fs.writeFileSync('src/assets/data/database.json', JSON.stringify({ characters }, null, 2));

    res.json(newCharacter);
  } catch (error) {
    console.error('Error creating character:', error);
    res.status(500).json({ error: 'Error creating character' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
