import { useState } from "react";
import data from "../data/data.json";
import MemberList from "../components/memberlist";
import AddMember from "../components/addmember";

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
      height: "100vh",
      backgroundColor: "var(--background)",
      color: "var(--foreground)",
      padding: "2rem"
    }}>
      <div style={{
        maxWidth: "500px",
        width: "100%",
        backgroundColor: "var(--background)",
        padding: "2rem",
        borderRadius: "var(--radius)",
        boxShadow: "var(--shadow)",
        textAlign: "center"
      }}>
        <h1 style={{ marginBottom: "1.5rem" }}>👥 Members</h1>

        <MemberList members={memberList} />

        <div style={{ marginTop: "1.5rem" }}>
          <AddMember onAdd={handleAddMember} />
        </div>
      </div>
    </div>
  );
}
