import React, { useState } from "react";
import './App.css';

//Logo
import Logo from './assets/Dorfromantik_Sakura.png';

// Wald
import Wald from './assets/Wald.png';
import Wald_4 from './assets/Wald_active_4.png';
import Wald_5 from './assets/Wald_active_5.png';
import Wald_6 from './assets/Wald_active_6.png';
import Wald_7 from './assets/Wald_active_7.png';

// Feld
import Feld from './assets/Feld.png';
import Feld_4 from './assets/Feld_active_4.png';
import Feld_5 from './assets/Feld_active_5.png';
import Feld_6 from './assets/Feld_active_6.png';
import Feld_7 from './assets/Feld_active_7.png';

// Dorf
import Dorf from './assets/Dorf.png';
import Dorf_4 from './assets/Dorf_active_4.png';
import Dorf_5 from './assets/Dorf_active_5.png';
import Dorf_6 from './assets/Dorf_active_6.png';
import Dorf_7 from './assets/Dorf_active_7.png';

// Schiene
import Schiene from './assets/Schiene.png';
import Schiene_4 from './assets/Schiene_active_4.png';
import Schiene_5 from './assets/Schiene_active_5.png';
import Schiene_6 from './assets/Schiene_active_6.png';

// Fluss
import Fluss from './assets/Fluss.png';
import Fluss_4 from './assets/Fluss_active_4.png';
import Fluss_5 from './assets/Fluss_active_5.png';
import Fluss_6 from './assets/Fluss_active_6.png';

//Rundum
import Rundum from './assets/Rundum.png';
import Rundum_4 from './assets/Rundum_active_4.png';
import Rundum_5 from './assets/Rundum_active_5.png';
import Rundum_6 from './assets/Rundum_active_6.png';

//Doppelauf
import Doppelauf from './assets/Doppel.png';
import Doppelauf_Wald_Feld_active_7 from './assets/Doppel_Wald_Feld_active_7.png';
import Doppelauf_Dorf_Wald_active_7 from './assets/Doppel_Dorf_Wald_active_7.png';
import Doppelauf_Feld_Dorf_active_7 from './assets/Doppel_Feld_Dorf_active_7.png';

// Wald done
import Wald_done_4 from './assets/Wald_done_4.png';
import Wald_done_5 from './assets/Wald_done_5.png';
import Wald_done_6 from './assets/Wald_done_6.png';
import Wald_done_7 from './assets/Wald_done_7.png';

// Feld done
import Feld_done_4 from './assets/Feld_done_4.png';
import Feld_done_5 from './assets/Feld_done_5.png';
import Feld_done_6 from './assets/Feld_done_6.png';
import Feld_done_7 from './assets/Feld_done_7.png';

// Dorf done
import Dorf_done_4 from './assets/Dorf_done_4.png';
import Dorf_done_5 from './assets/Dorf_done_5.png';
import Dorf_done_6 from './assets/Dorf_done_6.png';
import Dorf_done_7 from './assets/Dorf_done_7.png';

// Schiene done
import Schiene_done_4 from './assets/Schiene_done_4.png';
import Schiene_done_5 from './assets/Schiene_done_5.png';
import Schiene_done_6 from './assets/Schiene_done_6.png';

// Fluss done
import Fluss_done_4 from './assets/Fluss_done_4.png';
import Fluss_done_5 from './assets/Fluss_done_5.png';
import Fluss_done_6 from './assets/Fluss_done_6.png';

// Rundum done
import Rundum_done_4 from './assets/Rundum_done_4.png';
import Rundum_done_5 from './assets/Rundum_done_5.png';
import Rundum_done_6 from './assets/Rundum_done_6.png';

// Doppelauf done
import Doppelauf_Wald_Feld_done_7 from './assets/Doppel_Wald_Feld_done_7.png';
import Doppelauf_Dorf_Wald_done_7 from './assets/Doppel_Dorf_Wald_done_7.png';
import Doppelauf_Feld_Dorf_done_7 from './assets/Doppel_Feld_Dorf_done_7.png';

//Fahnen & Längste
import Wald_Fahne from './assets/Wald_Fahne.png';
import Feld_Fahne from './assets/Feld_Fahne.png';
import Dorf_Fahne from './assets/Dorf_Fahne.png';
import Schiene_max from './assets/Schiene_max.png';
import Fluss_max from './assets/Fluss_max.png';
import Rundum_max from './assets/Rundum_max.png';

const imageMap = {
  Wald: {
    4: Wald_4,
    5: Wald_5,
    6: Wald_6,
    done: {
      4: Wald_done_4,
      5: Wald_done_5,
      6: Wald_done_6,
    }
  },
  Feld: {
    4: Feld_4,
    5: Feld_5,
    6: Feld_6,
    done: {
      4: Feld_done_4,
      5: Feld_done_5,
      6: Feld_done_6,
    }
  },
  Dorf: {
    4: Dorf_4,
    5: Dorf_5,
    6: Dorf_6,
    done: {
      4: Dorf_done_4,
      5: Dorf_done_5,
      6: Dorf_done_6,
    }
  },
  Schiene: {
    4: Schiene_4,
    5: Schiene_5,
    6: Schiene_6,
    done: {
      4: Schiene_done_4,
      5: Schiene_done_5,
      6: Schiene_done_6,
    }
  },
  Fluss: {
    4: Fluss_4,
    5: Fluss_5,
    6: Fluss_6,
    done: {
      4: Fluss_done_4,
      5: Fluss_done_5,
      6: Fluss_done_6,
    }
  },
  Rundum: {
    4: Rundum_4,
    5: Rundum_5,
    6: Rundum_6,
    done: {
      4: Rundum_done_4,
      5: Rundum_done_5,
      6: Rundum_done_6,
    }
  },
  Doppelauf: {
    0: Doppelauf_Wald_Feld_active_7,
    1: Doppelauf_Dorf_Wald_active_7,
    2: Doppelauf_Feld_Dorf_active_7,
    done: {
      0: Doppelauf_Wald_Feld_done_7,
      1: Doppelauf_Dorf_Wald_done_7,
      2: Doppelauf_Feld_Dorf_done_7,
    }
  }
};

// Category setup
const categories = [
{ key: "wald", label: "Wald", color: "#ef95bf", light: "#ef95bf" },
{ key: "feld", label: "Feld", color: "#89c876", light: "#89c876" },
{ key: "dorf", label: "Dorf", color: "#bb6661", light: "#bb6661" },
{ key: "schiene", label: "Schiene", color: "#6c4f40", light: "#6c4f40" },
{ key: "fluss", label: "Fluss", color: "#70cbcf", light: "#70cbcf" },
{ key: "rundum", label: "Rundum", color: "#40384d", light: "#40384d" },
{ key: "doppelauf", label: "Doppelauf", color: "#ffffff", light: "#ffffff" }
];

// Tasks for each category
const tasksData = {
  wald:   [4,4,5,5,6,6],
  feld:   [4,4,5,5,6,6],
  dorf:   [4,4,5,5,6,6],
  schiene:[4,4,5,5,6,6],
  fluss:  [4,4,5,5,6,6],
  rundum: [4,4,5,5,6,6,],
  doppelauf: [7, 7, 7]
};

// Images for Task Buttons
const getTaskImagePath = (category, value, state) => {
  if (state === 0 || state === 1) {
    return `/pics/${category}_active_${value}.png`;
  } else {
    return `/pics/${category}.png`;
  }
};

// Extra point input fields (page 2)
const extraFields = [
  { key: "wald_fahnen", label: "Fahnen (Wald)", cat: "wald" },
  { key: "feld_fahnen", label: "Fahnen (Feld)", cat: "feld" },
  { key: "dorf_fahnen", label: "Fahnen (Dorf)", cat: "dorf" },
  { key: "schiene_laengste", label: "Längste Schiene", cat: "schiene" },
  { key: "fluss_laengste", label: "Längster Fluss", cat: "fluss" },
  { key: "rundum_laengste", label: "Längster Rundum", cat: "rundum" }
];

// Freigespielt (manual input fields & checkboxes, page 2)
const freigespieltFields = [
  { key: "kirschblueten", label: "Kirschblüten", max: 24, type: "number" },
  { key: "tempel", label: "Tempel", type: "checkbox", points: 6 },
  { key: "heisse_quellen_1", label: "Heiße Quellen", type: "number" },
  { key: "heisse_quellen_2", label: "", type: "number" },
  { key: "bruecken", label: "Brücken", type: "number" },
  { key: "tore", label: "Tore", type: "number" },
  { key: "einsiedler", label: "Einsiedler", type: "number" },
  { key: "sternwarte", label: "Steernwarte", type: "number" },
  { key: "kartograph", label: "Kartograph", max: 12, type: "even" },
  { key: "sumoringer", label: "Sumoringer", type: "number" },
  { key: "moossammlerin", label: "Moossammlerin", type: "number" },
  { key: "reisbaeuerin", label: "Reisbäuerin", type: "number" },
  { key: "schiff_anlegestelle", label: "Schiff-Anlegestelle", type: "number" },
  { key: "ochsenkarren_handelsposten", label: "Ochsenkarren-Handelsposten", type: "number" },
  { key: "poet", label: "Poet", type: "number" },
];

const freigespieltFieldsPlus = [
  { key: "fotograf", label: "Fotograf", type: "number" },
  { key: "schule", label: "Schule", type: "number" },
  { key: "kornspeicher", label: "Kornspeicher", type: "number" },
  { key: "alte_eiche", label: "Alte Eiche", type: "number" },
  { key: "grosse_muehle", label: "Große Mühle", type: "number" },
  { key: "adolfturm", label: "Adolfturm", type: "number" },
  { key: "fernsehturm", label: "Fernsehturm", type: "number" },
  { key: "pegasus", label: "Pegasus", type: "number" }
];
// Baustelle allowed values
const baustelleOptions = [0, 7, 14, 21];



function TaskButton({ value, state, onClick, catLabel, idx = 0 }) {
  const category = catLabel.charAt(0).toUpperCase() + catLabel.slice(1);
  let imgSrc = "";

  

  if (category === "Doppelauf") {
    imgSrc = (state === 0 || state === 1)
      ? imageMap[category]?.[idx]
      : imageMap[category]?.done?.[idx];
  } else {
    if (state === 0 || state === 1) {
      imgSrc = imageMap[category]?.[value];
    } else if (state === 2 || state === 3) {
      imgSrc = imageMap[category]?.done?.[value];
    }
  }
  const style = {
    width: 56,
    height: 56,
    margin: 4,
    position: "relative",
    cursor: "pointer",
    opacity: state === 0 ? 0.4 : 1,
  };

  return (
    <div style={style} onClick={onClick}>
      <img
        src={imgSrc}
        alt={`${category}-${value}`}
        style={{ width: "100%", height: "100%", borderRadius: 8 }}
      />
      {state === 3 && (
        <span style={{
          position: "absolute",
          right: 2,
          bottom: 2,
          fontSize: 20,
          color: "#fff",
          background: "#444",
          borderRadius: 4,
          padding: "0 3px"
        }}>×2</span>
      )}
    </div>
  );
}

function evenInput(value, max) {
  let v = value.replace(/[^0-9]/g,"");
  let n = Number(v);
  if (v === "") return "";
  if (max !== undefined) n = Math.min(n, max);
  if (n < 0) n = 0;
  if (n % 2 !== 0) n = n - 1;
  return n.toString();
}


function App() {

  const [page, setPage] = useState(0);
  const [extensions, setExtensions] = useState({
    duell: true,
    //grosseMuehle: false,
    //wetterau: false
  });
  
  const handleExtensionChange = (key) => {
  setExtensions(prev => ({ ...prev, [key]: !prev[key] }));
};

  const [taskStates, setTaskStates] = useState(() => {
  const state = {};
  for (let cat in tasksData) {
    state[cat] = tasksData[cat].map(() => 0);
  }
  return state;
});
  const [extras, setExtras] = useState(() => {
    const st = {};
    extraFields.forEach(f => st[f.key] = "");
    return st;
  });
  const [frei, setFrei] = useState(() => {
    const st = {};
    freigespieltFields.forEach(f => st[f.key] = f.type === "checkbox" ? false : "");
    return st;
  });
  const [results, setResults] = useState(null);

  const getTaskValue = (cat, idx) => tasksData[cat][idx];

  const handleTaskClick = (cat, idx) => {
    setTaskStates(prev => {
      const currentState = prev[cat][idx];
      const isRundum = cat === "rundum";
      const maxState = isRundum ? 3 : 4;
      const nextState = (currentState + 1) % maxState;
  
      // Count all tasks in state 1
      let active1Count = 0;
      for (let c in prev) {
        active1Count += prev[c].filter(s => s === 1).length;
      }
  
      // If trying to go into state 1 and already 3 exist — block it
      if (nextState === 1 && active1Count >= 3) {
        return prev; // No change
      }
  
      // Otherwise apply state change
      return {
        ...prev,
        [cat]: prev[cat].map((s, i) => i === idx ? nextState : s)
      };
    });
  };

  const handleExtraChange = (e, key, max) => {
    let val = e.target.value.replace(/[^0-9]/g,"");
    if (max) val = Math.max(0, Math.min(Number(max), Number(val))).toString();
    setExtras(prev => ({ ...prev, [key]: val }));
  };

  const handleFreiChange = (e, key, field) => {
    if (field.type === "checkbox") {
      setFrei(prev => ({ ...prev, [key]: e.target.checked }));
    } else if (field.type === "even") {
      setFrei(prev => ({ ...prev, [key]: evenInput(e.target.value, field.max) }));
    } else if (field.type === "baustelle") {
      setFrei(prev => ({ ...prev, [key]: e.target.value }));
    } else {
      let val = e.target.value.replace(/[^0-9]/g,"");
      if (field.max) val = Math.max(0, Math.min(Number(field.max), Number(val))).toString();
      setFrei(prev => ({ ...prev, [key]: val }));
    }
  };

  const handleSubmitTasks = () => setPage(2);
  const handleBackExtras = () => setPage(1);
  const handleBackResults = () => setPage(2)

  const handleSubmitExtras = () => {
    const auftraege = {};
    categories.forEach(cat => {
      let normal = 0, double = 0;
      taskStates[cat.key].forEach((state, idx) => {
        if (state === 2) normal += getTaskValue(cat.key, idx);
        if (state === 3 && cat.key !== "rundum") {
          normal += getTaskValue(cat.key, idx); 
          double += getTaskValue(cat.key, idx); 
        }
      });
      auftraege[cat.key] = { normal, double };
    });
    const fahnen = {};
    categories.forEach(cat => {
      fahnen[cat.key] = 0;
      let fh = extraFields.find(f => f.cat === cat.key && (f.key.endsWith("fahnen") || f.key.endsWith("laengste")));
      if (fh) fahnen[cat.key] += Number(extras[fh.key] || 0);
    });
    let freiSum = 0;

[...freigespieltFields, ...freigespieltFieldsPlus].forEach(f => {
  if (f.type === "checkbox") freiSum += frei[f.key] ? f.points : 0;
  else if (f.type === "baustelle") freiSum += Number(frei[f.key] || 0);
  else freiSum += Number(frei[f.key] || 0);
});
    const auftraegeSum = categories.reduce((s,cat) => s+auftraege[cat.key].normal,0);
    const extrasSum = categories.reduce((s,cat) => s+auftraege[cat.key].double,0);
    const fahnenSum = categories.reduce((s,cat) => s+fahnen[cat.key],0);
    const extraAndFreiSum = extrasSum + freiSum;
    const total = auftraegeSum + fahnenSum + extraAndFreiSum;

    setResults({
      auftraege, auftraegeSum,
      fahnen, fahnenSum,
      extrasSum,
      freiSum,
      extraAndFreiSum,
      total
    });
    setPage(3);
  };

  const handleReset = () => {
    setTaskStates(() => {
      const state = {};
      for (let cat in tasksData) state[cat] = tasksData[cat].map(() => 0);
      return state;
    });
    setExtras(() => {
      const st = {};
      extraFields.forEach(f => st[f.key] = "");
      return st;
    });
    setFrei(() => {
      const st = {};
      freigespieltFields.forEach(f => st[f.key] = f.type === "checkbox" ? false : "");
      return st;
    });
    setResults(null);
    setPage(0);
  };

  // Build grid: rows = 4,4,5,5,6,6,7 (max 7), columns = categories
  const maxRows = Math.max(...Object.values(tasksData).map(a=>a.length));
  const cellWidth = 60;
  const taskRows = [];
  for (let row = 0; row < maxRows; ++row) {
    taskRows.push(
      <tr key={row}>
        {categories
  .filter(cat => !["rundum","doppelauf"].includes(cat.key))
  .map(cat => (
    <td key={cat.key}
  style={{
    textAlign: "center",
    width: cellWidth,
    padding: 0
  }}
>
  {tasksData[cat.key][row] !== undefined ? (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <TaskButton
        value={tasksData[cat.key][row]}
        state={taskStates[cat.key][row]}
        onClick={() => handleTaskClick(cat.key, row)}
        catLabel={cat.label}
      />
    </div>
  ) : null}
</td>
        ))}
      </tr>
    );
  }

  
  //Page 0:Extension Selection
  if (page === 0) return (  
  <div style={{ padding: 24, maxWidth: 580, margin: "auto" }}>
    <div style={{ textAlign: "center", marginBottom: 24 }}>
      <div
        style={{
          backgroundColor: "#18846c",
          padding: 20,
          borderRadius: 12,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          marginBottom: 36
        }}
      >
        <img src={Logo} alt="Dorfromantik Logo" style={{ height: 80 }} />
      </div>
    </div>
    {/*<h2 style={{ marginTop: 0 }}>Erweiterungen aktivieren</h2>
    <div style={{
      backgroundColor: "#c5dcd2",
      padding: 20,
      borderRadius: 12,
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
  {[
    { label: "Das Duell", key: "duell" },
    { label: "Große Mühle", key: "grosseMuehle" },
    { label: "Wetterau", key: "wetterau" },
  ].map(({ label, key }) => (
    <div key={key} style={{ display: "flex", alignItems: "center" }}>
      <div style={{
        fontSize: 20,
        fontWeight: 700,
        flex: 1,
        lineHeight: 1.4
      }}>
        {label}
      </div>
      <div style={{
        width: 36,
        height: 36,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <input
          type="checkbox"
          checked={extensions[key]}
          onChange={() => handleExtensionChange(key)}
          style={{
            width: 20,
            height: 20,
            accentColor: "#505a35",
            cursor: "pointer"
          }}
        />
      </div>
    </div>
  ))}
</div>
    </div>
*/}
    <div style={{ textAlign: "center", marginTop: 24 }}>
      <button onClick={() => setPage(1)}>Spiel starten</button>
    </div>
  </div>
);



  // Page 1: Task grid
  if (page === 1)
  return (
    <div style={{ padding: 24, maxWidth: 580, margin: "auto" }}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
      <div
        style={{
          backgroundColor: "#18846c",
          padding: 20,
          borderRadius: 12,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          marginBottom: 36
        }}
      >
  <img src={Logo} alt="Dorfromantik Logo" style={{ height: 80 }} />
  </div>
</div>

      {/* Card container */}
      <h2 style={{ marginTop: 0, marginBottom: 16, textalign:"center" }}>Aufträge</h2>
      <div
        style={{
          backgroundColor: "#c5dcd2",
          padding: 20,
          borderRadius: 12,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          marginBottom: 24
        }}
      >
        <table
          style={{
            borderCollapse: "collapse",
            marginLeft: "auto",
            marginRight: "auto",
            tableLayout: "fixed",
            width: "100%"
          }}
        >
          <tbody>
            {taskRows}
          </tbody>
        </table>
        <br/><br/>  
        <div style={{
  display: "flex",
  justifyContent: "center",
  textalign: "center",
  gap: 12,
  flexWrap: "wrap",
  marginBottom: 0
}}>
  {extensions.duell && (
  <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
  {tasksData.rundum.map((val, idx) => (
    <TaskButton
      key={`rundum-${idx}`}
      value={val}
      state={taskStates.rundum[idx]}
      onClick={() => handleTaskClick("rundum", idx)}
      catLabel="Rundum"
    />
  ))}
</div>
)}
</div>
<div style={{
  display: "flex",
  justifyContent: "center",
  gap: 12,
  flexWrap: "wrap",
  marginBottom: 0
}}>
  {extensions.duell && (
  <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
  {tasksData.doppelauf.map((val, idx) => (
    <TaskButton
      key={`doppelauf-${idx}`}
      value={val}
      state={taskStates.doppelauf[idx]}
      onClick={() => handleTaskClick("doppelauf", idx)}
      catLabel="Doppelauf"
      idx={idx}
    />
  ))}
  </div>
)}
</div>

      </div>

      <div style={{ textAlign: "center" }}>
  <button onClick={() => setPage(0)} style={{ marginRight: 16 }}>
    Zurück
  </button>
  <button onClick={handleSubmitTasks} style={{ marginRight: 0 }}>
    Weiter
  </button><br/>
  <button onClick={handleReset}>
    Zurücksetzen
  </button>
</div>
    </div>
  );


  // Page 2: Extras
  if (page === 2) return (
    <div style={{padding:24, maxWidth:740, margin:"auto"}}>
      <div style={{ textAlign: "center", marginBottom: 24 }}>
      <div
        style={{
          backgroundColor: "#18846c",
          padding: 20,
          borderRadius: 12,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          marginBottom: 36
        }}
      >
  <img src={Logo} alt="Dorfromantik Logo" style={{ height: 80 }} />
  </div>
  </div>
      <h2>Fahnen & Längste</h2>
      <form onSubmit={e => {e.preventDefault(); handleSubmitExtras();}} autoComplete="off">
      {/* Card for Fahnen & Längste */}
      <div
  style={{
    backgroundColor: "#c5dcd2",
    padding: 20,
    borderRadius: 12,
    marginBottom: 36,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  }}
>
  {/* Fahnen row */}
  <div style={{ display: "flex", justifyContent: "center", gap: 40, marginBottom: 24 }}>
    {[ 
      { key: "wald_fahnen", img: Wald_Fahne },
      { key: "feld_fahnen", img: Feld_Fahne },
      { key: "dorf_fahnen", img: Dorf_Fahne }
    ].map(({ key, img }) => (
      <div key={key} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <img src={img} alt={key} style={{ width: 48, height: 48 }} />
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          min={0}
          step={1}
          value={extras[key]}
          onChange={(e) => handleExtraChange(e, key)}
          style={{
            width: 50,
            padding: "4px 6px",
            border: "1px solid #ccc",
            borderRadius: 6
          }}
        />
      </div>
    ))}
  </div>

  {/* Längste row */}
  <div style={{ display: "flex", justifyContent: "center", gap: 40 }}>
    {[ 
      { key: "schiene_laengste", img: Schiene_max },
      { key: "fluss_laengste", img: Fluss_max },
      { key: "rundum_laengste", img: Rundum_max}
    ].map(({ key, img }) => (
      <div key={key} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        <img src={img} alt={key} style={{ width: 48, height: 48 }} />
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          min={0}
          step={1}
          value={extras[key]}
          onChange={(e) => handleExtraChange(e, key)}
          style={{
            width: 50,
            padding: "4px 6px",
            border: "1px solid #ccc",
            borderRadius: 6
          }}
        />
      </div>
    ))}
  </div>
</div>

{/* Card for Freigespielt*/}
<h2 style={{ marginBottom: 16, marginTop: 16 }}>Freigespielt</h2>
<div
  style={{
    display: "grid",
    gridTemplateColumns: window.innerWidth <= 600 ? "1fr" : "1fr 1fr",
    columnGap: 32,
    rowGap: 16,
    padding: 20,
    backgroundColor: "#c5dcd2",
    borderRadius: 12,
    marginBottom: 32,
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  }}
>
  {freigespieltFields.map((f) => (
    <div key={f.key} style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ flex: 1 }}>
  <div style={{ fontSize: 20, fontWeight: 700 }}>{f.label}</div>
  {(() => {
    const hintMap = {
            kirschblueten: "gesammelt",
            tempel: "(passend umschlossen = 6)",
            heisse_quellen_1: "(abgeschlossen = 3)",
            heisse_quellen_2: "(3/Rundumauftrag)",
            bruecken: "(längste Fluss = 5/Brücke)",
            tore: "(längste Straße) 5/Tor)",
            einsiedler: "(3/freier Kante)",
            sternwarte: "(abgeschlossenesFahnengebiet (FG) = 3/abgeschlossees FG)",
            kartograph: "(Blickrichtung = 2/Auftrag",
            sumoringer: "(1/passender Kante)",
            moossammlerin: "(1/passender Kante)",
            reisbaeuerin: "(1/passender Kante)",
            schiff_anlegestelle: "(1/Plättchen dazwischen)",
            ochsenkarren_handelsposten: "1/Plättchen dazwischen)",
            poet: "(3/Wiesenkante)"
          };
          return hintMap[f.key] ? (
      <div style={{ fontSize: 14, color: "#888", marginTop: 2 }}>
        {hintMap[f.key]}
      </div>
    ) : null;
  })()}
</div>

      {/* Aligned inputs */}
      {f.type === "checkbox" ? (
  <div
    style={{
      width: 50,
      height: 30,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <input
      type="checkbox"
      checked={!!frei[f.key]}
      onChange={(e) => handleFreiChange(e, f.key, f)}
      style={{
        width: 20,
        height: 20,
        accentColor: "#18846c",
        cursor: "pointer",
        marginLeft: 2
      }}
    />
  </div>
      ) : f.type === "even" ? (
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          min={0}
          step={2}
          value={frei[f.key]}
          onChange={(e) => handleFreiChange(e, f.key, f)}
          style={{
            width: 50,
            padding: "4px 6px",
            border: "1px solid #ccc",
            borderRadius: 6
          }}
        />
      ) : f.type === "baustelle" ? (
        <select
          value={frei[f.key]}
          onChange={(e) => handleFreiChange(e, f.key, f)}
          style={{
            width: 50,
            padding: "4px 6px",
            border: "1px solid #ccc",
            borderRadius: 6,
            textAlign: "center"
          }}
        >
          {baustelleOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          min={0}
          max={f.max}
          step={1}
          value={frei[f.key]}
          onChange={(e) => handleFreiChange(e, f.key, f)}
          style={{
            width: 50,
            padding: "4px 6px",
            border: "1px solid #ccc",
            borderRadius: 6
          }}
        />
      )}
    </div>
  ))}
</div>

{/*{(extensions.duell || extensions.grosseMuehle || extensions.wetterau) && (
  <>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: window.innerWidth <= 600 ? "1fr" : "1fr 1fr",
        columnGap: 32,
        rowGap: 16,
        padding: 20,
        backgroundColor: "#c5dcd2",
        borderRadius: 12,
        marginBottom: 32,
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
      }}
    >
      {freigespieltFieldsPlus
        .filter(f =>
          (extensions.duell && ["fotograf", "alte_eiche", "schule", "kornspeicher"].includes(f.key)) ||
          (extensions.grosseMuehle && f.key === "grosse_muehle") ||
          (extensions.wetterau && ["adolfturm", "fernsehturm", "pegasus"].includes(f.key))
        )
        .map((f) => (
          <div key={f.key} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 20, fontWeight: 700 }}>{f.label}</div>
              {(() => {
                const hintMap = {
                  fotograf: "(1/Marker)",
                  schule: "(im Abstand 2 = 1/Dorf)",
                  kornspeicher: "(im Abstand 2 = 1/Feld)",
                  alte_eiche: "(im Abstand 2 = 1/Wald)",
                  grosse_muehle: "(Gebiet abgeschlossen = 2/Auftrag & Fahne)",
                  adolfturm: "(1/passende Dorfkante)",
                  fernsehturm: "(1/passende Feldkante)",
                  pegasus: "(1/passende Waldkante)"
                };
                return hintMap[f.key] ? (
                  <div style={{ fontSize: 14, color: "#888", marginTop: 2 }}>
                    {hintMap[f.key]}
                  </div>
                ) : null;
              })()}
            </div>
            <input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              min={0}
              max={f.max}
              step={1}
              value={frei[f.key]}
              onChange={(e) => handleFreiChange(e, f.key, f)}
              style={{
                width: 50,
                padding: "4px 6px",
                border: "1px solid #ccc",
                borderRadius: 6
              }}
            />
          </div>
        ))}
        
    </div>
  </>
)}
*/}
<div style={{ textAlign: "center" }}>
      <button type="button" onClick={handleBackExtras} style={{marginRight:16}}>Zurück</button>
      <button type="submit" >Weiter</button><br/>
      <button type="button" onClick={handleReset} style={{marginLeft:0}}>Zurücksetzen</button>
</div>      
      </form>
    </div>
  );

  // Page 3: Results
  if (page === 3 && results) return (
    <div style={{ padding: 24, maxWidth: 320, margin: "auto" }}>
  <div style={{ textAlign: "center", marginBottom: 24 }}>
  <div
        style={{
          backgroundColor: "#18846c",
          padding: 20,
          borderRadius: 12,
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          marginBottom: 36
        }}
      >
  <img src={Logo} alt="Dorfromantik Logo" style={{ height: 80 }} />
  </div>
  </div>
  <h2 style={{ marginTop: 0 }}>Ergebnisse</h2>
  <div
    style={{
      backgroundColor: "#c5dcd2",
      padding: 24,
      borderRadius: 12,
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
      marginTop: 24,
      marginBottom: 32,
      maxWidth: 700,
      marginLeft: "auto",
      marginRight: "auto"
    }}
  >
    
    <table
  style={{
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: 16,
    backgroundColor: "#fff",
    border: "1px solid #bbb",
  }}
>
  <thead>
    <tr>
      <th style={{
        textAlign: "center",
        border: "1px solid #ffffff",
        borderBottom: "3px solid #ffffff",
        backgroundColor: "#ee85a1",
        padding: "8px"
      }}>
        {/* empty cell for icons */}
      </th>
      <th style={{
        textAlign: "center",
        border: "1px solid #ffffff",
        borderBottom: "3px solid #ffffff",
        backgroundColor: "#ee85a1",
        padding: "8px"
      }}>Aufträge</th>
      <th style={{
        textAlign: "center",
        border: "1px solid #ffffff",
        borderBottom: "3px solid #ffffff",
        backgroundColor: "#ee85a1",
        padding: "8px"
      }}>Fahnen/<br/>Längste</th>
      <th style={{
        textAlign: "center",
        border: "1px solid #ffffff",
        borderBottom: "3px solid #ffffff",
        backgroundColor: "#ee85a1",
        padding: "8px"
      }}>Doppelt</th>
    </tr>
  </thead>
  <tbody>
    {categories
  .filter(cat => {
    if (cat.key === "rundum" || cat.key === "doppelauf") {
      return extensions.duell;
    }
    return true;
  })
  .map(cat => (
      <tr key={cat.key}>
        <td
          style={{
            textAlign: "center",
            padding: "8px",
            border: "1px solid #ffffff",
            backgroundColor: "#ee85a1"
          }}
        >
          <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100%",
    }}
  >
  
          <img
            src={{
              wald: Wald,
              feld: Feld,
              dorf: Dorf,
              schiene: Schiene,
              fluss: Fluss,
              rundum: Rundum,
              doppelauf: Doppelauf
            }[cat.key]}
            alt={cat.label}
            style={{ width: 28, height: 28 }}
          />
        </div>
        </td>
        <td
          style={{
            textAlign: "center",
            padding: "8px",
            border: "1px solid #ffffff",
            color: cat.color,
            fontWeight: "bold",
            backgroundColor: "#f2abad"
          }}
        >
          
          {results.auftraege[cat.key].normal}
        </td>
        <td
          style={{
            textAlign: "center",
            padding: "8px",
            border: "1px solid #ffffff",
            color: cat.color,
            fontWeight: "bold",
            backgroundColor: "#f2abad"
          }}
        >
          {results.fahnen[cat.key]}
        </td>
        <td
          style={{
            textAlign: "center",
            padding: "8px",
            border: "1px solid #ffffff",
            color: cat.color,
            fontWeight: "bold",
            backgroundColor: "#f2abad"
          }}
        >
          {results.auftraege[cat.key].double}
        </td>
        
      </tr>
      
    ))}
  </tbody>
  <tr style={{ backgroundColor: "#ee85a1", fontWeight: "bold" }}>
  <td style={{
    textAlign: "center",
    padding: "8px",
    border: "1px solid #ffffff",
    borderTop: "3px solid #ffffff",
  }}>
    Σ
  </td>
  <td style={{
    textAlign: "center",
    padding: "8px",
    border: "1px solid #ffffff",
    borderTop: "3px solid #ffffff"
  }}>
    {results.auftraegeSum}
  </td>
  <td style={{
    textAlign: "center",
    padding: "8px",
    border: "1px solid #ffffff",
    borderTop: "3px solid #ffffff"
  }}>
    {results.fahnenSum}
  </td>
  <td style={{
    textAlign: "center",
    padding: "8px",
    border: "1px solid #ffffff",
    borderTop: "3px solid #ffffff"
  }}>
    {results.extrasSum}
  </td>
</tr>
</table>

    <div style={{ display: "flex", flexWrap: "wrap", gap: 30, marginBottom: 10 }}>
      <div><br/><h2>Freigespielt: <b>{results.freiSum}</b></h2></div>
    </div>

    <div style={{ fontSize: 20, fontWeight: 700, marginTop: 4 }}>
      <br/><h1>Gesamt: <span style={{ color: "#000" }}>{results.total}</span></h1>
    </div>
  </div>

  <div style={{ textAlign: "center" }}>
    <button onClick={handleBackResults} style={{marginRight:110}}>Zurück</button>
    <br/>
    <button onClick={handleReset} style={{width: 142}}>Neues Spiel</button>
  </div>
</div>
  );
}



export default App;