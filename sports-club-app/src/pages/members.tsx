import { useState } from "react";
import data from "../data/data.json";
import MemberList from "../components/memberlist";
import AddMember from "../components/addmember";
import BackButton from "../components/backbutton"; // ← Import

export default function MembersPage() {
  const [memberList, setMemberList] = useState<string[]>([...data.members]);

  const handleAddMember = (member: string) => {
    if (!memberList.includes(member)) {
      setMemberList([...memberList, member]);
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh"
    }}>
      <div style={{
        maxWidth: "500px",
        width: "100%",
        padding: "2rem",
        borderRadius: "var(--radius)",
        boxShadow: "var(--shadow)",
        backgroundColor: "var(--background)"
      }}>
        <BackButton /> 
        <h1 style={{ textAlign: "center" }}>👥 Members</h1>
        <MemberList members={memberList} />
        <AddMember onAdd={handleAddMember} />
      </div>
    </div>
  );
}
