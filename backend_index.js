const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

// Create a new playthrough
app.post('/playthrough', async (req, res) => {
  const { name } = req.body;
  const id = await db.createPlaythrough(name);
  res.json({ id });
});

// Add a game result to a playthrough
app.post('/playthrough/:id/game', async (req, res) => {
  const { categories, scores } = req.body; // categories: ['A', 'B'], scores: [10, 5]
  await db.addGameToPlaythrough(req.params.id, categories, scores);
  res.sendStatus(200);
});

// Get a playthrough with its games
app.get('/playthrough/:id', async (req, res) => {
  const data = await db.getPlaythrough(req.params.id);
  res.json(data);
});

// List all playthroughs
app.get('/playthroughs', async (req, res) => {
  const list = await db.listPlaythroughs();
  res.json(list);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
