import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'http://localhost:3001';

function App() {
  const [playthroughs, setPlaythroughs] = useState([]);
  const [selected, setSelected] = useState(null);
  const [categories, setCategories] = useState(['Points', 'Bonus']);
  const [scores, setScores] = useState([]);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    axios.get(`${API}/playthroughs`).then(res => setPlaythroughs(res.data));
  }, []);

  const createPlaythrough = async () => {
    const res = await axios.post(`${API}/playthrough`, { name: newName });
    setPlaythroughs([...playthroughs, { id: res.data.id, name: newName }]);
    setNewName('');
  };

  const selectPlaythrough = async (id) => {
    const res = await axios.get(`${API}/playthrough/${id}`);
    setSelected(res.data);
  };

  const addGame = async () => {
    await axios.post(`${API}/playthrough/${selected.id}/game`, { categories, scores });
    selectPlaythrough(selected.id); // Refresh games
  };

  return (
    <div>
      <h1>Board Game Score Tracker</h1>
      <input value={newName} onChange={e => setNewName(e.target.value)} placeholder="New Playthrough Name"/>
      <button onClick={createPlaythrough}>Create</button>
      <ul>
        {playthroughs.map(pt => (
          <li key={pt.id}>
            <button onClick={() => selectPlaythrough(pt.id)}>{pt.name}</button>
          </li>
        ))}
      </ul>
      {selected && (
        <div>
          <h2>{selected.name}</h2>
          <ul>
            {selected.games.map((g, i) => (
              <li key={i}>{JSON.parse(g.categories).map((cat, idx) => <span key={idx}>{cat}: {JSON.parse(g.scores)[idx]} </span>)}</li>
            ))}
          </ul>
          <div>
            <h3>Add Game</h3>
            {categories.map((cat, idx) => (
              <div key={idx}>
                {cat}: <input type="number" value={scores[idx] || ''} onChange={e => {
                  const newScores = [...scores];
                  newScores[idx] = Number(e.target.value);
                  setScores(newScores);
                }} />
              </div>
            ))}
            <button onClick={addGame}>Add Game</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
