// pages/members.tsx
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
    <div style={{ padding: 20 }}>
      <h1>Members</h1>
      <MemberList members={memberList} />
      <AddMember onAdd={handleAddMember} />
    </div>
  );
}
