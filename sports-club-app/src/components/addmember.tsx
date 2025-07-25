// components/AddMember.tsx
import { useState } from "react";

type Props = {
  onAdd: (member: string) => void;
};

const AddMember = ({ onAdd }: Props) => {
  const [newMember, setNewMember] = useState("");

  const handleAdd = () => {
    if (newMember.trim()) {
      onAdd(newMember.trim());
      setNewMember("");
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <input
        value={newMember}
        onChange={(e) => setNewMember(e.target.value)}
        placeholder="Add new member"
      />
      <button onClick={handleAdd} style={{ marginLeft: 8 }}>
        Add Member
      </button>
    </div>
  );
};

export default AddMember;
