// components/AddSport.tsx
import { useState } from "react";

type Props = {
  onAdd: (sport: string) => void;
};

const AddSport = ({ onAdd }: Props) => {
  const [newSport, setNewSport] = useState("");

  const handleAdd = () => {
    if (newSport.trim()) {
      onAdd(newSport.trim());
      setNewSport("");
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <input
        value={newSport}
        onChange={(e) => setNewSport(e.target.value)}
        placeholder="Add new sport"
      />
      <button onClick={handleAdd} style={{ marginLeft: 8 }}>
        Add Sport
      </button>
    </div>
  );
};

export default AddSport;
