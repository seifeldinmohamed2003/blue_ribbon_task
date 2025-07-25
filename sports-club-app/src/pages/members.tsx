import { useState } from "react";
import { members } from "../data/data";

export default function MembersPage() {
  const [newMember, setNewMember] = useState("");
  const [memberList, setMemberList] = useState([...members]);

  const handleAddMember = () => {
    if (newMember && !memberList.includes(newMember)) {
      setMemberList([...memberList, newMember]);
      setNewMember("");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Members</h1>
      <ul>
        {memberList.map((member, i) => (
          <li key={i}>{member}</li>
        ))}
      </ul>
      <input
        value={newMember}
        onChange={(e) => setNewMember(e.target.value)}
        placeholder="Add new member"
      />
      <button onClick={handleAddMember}>Add Member</button>
    </div>
  );
}
