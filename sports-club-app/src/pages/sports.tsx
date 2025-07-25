// pages/sports.tsx

import { useState } from "react";
import { sports } from "../data/data";

export default function SportsPage() {
  const [newSport, setNewSport] = useState("");
  const [sportList, setSportList] = useState([...sports]);

  const handleAddSport = () => {
    if (newSport && !sportList.includes(newSport)) {
      setSportList([...sportList, newSport]);
      setNewSport("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Sports</h1>
      <ul>
        {sportList.map((sport, i) => (
          <li key={i}>{sport}</li>
        ))}
      </ul>
      <input
        value={newSport}
        onChange={(e) => setNewSport(e.target.value)}
        placeholder="Add new sport"
      />
      <button onClick={handleAddSport}>Add Sport</button>
    </div>
  );
}
