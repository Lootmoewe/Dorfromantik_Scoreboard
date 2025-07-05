const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db.sqlite');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS playthroughs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  )`);
  db.run(`CREATE TABLE IF NOT EXISTS games (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    playthrough_id INTEGER,
    categories TEXT, -- JSON array
    scores TEXT      -- JSON array
  )`);
});

module.exports = {
  createPlaythrough: (name) => new Promise((resolve, reject) => {
    db.run('INSERT INTO playthroughs (name) VALUES (?)', [name], function(err) {
      if (err) reject(err);
      else resolve(this.lastID);
    });
  }),

  addGameToPlaythrough: (playthrough_id, categories, scores) => new Promise((resolve, reject) => {
    db.run('INSERT INTO games (playthrough_id, categories, scores) VALUES (?, ?, ?)',
      [playthrough_id, JSON.stringify(categories), JSON.stringify(scores)], function(err) {
        if (err) reject(err);
        else resolve();
      }
    );
  }),

  getPlaythrough: (id) => new Promise((resolve, reject) => {
    db.get('SELECT * FROM playthroughs WHERE id = ?', [id], (err, row) => {
      if (err) reject(err);
      else {
        db.all('SELECT * FROM games WHERE playthrough_id = ?', [id], (err2, games) => {
          if (err2) reject(err2);
          else resolve({ ...row, games });
        });
      }
    });
  }),

  listPlaythroughs: () => new Promise((resolve, reject) => {
    db.all('SELECT * FROM playthroughs', [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  }),
};
