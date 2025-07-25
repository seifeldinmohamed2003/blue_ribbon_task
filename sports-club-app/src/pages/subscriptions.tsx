// pages/subscriptions.tsx
import { useState } from "react";
import data from "../data/data.json";
import SelectMember from "../components/selectmember";
import SelectSport from "../components/selectsport";
import SubscribeButton from "../components/subscribebutton";
import SubsList from "../components/subslist";

const { members, sports, subscriptions } = data;

export default function SubscriptionsPage() {
  const [selectedMember, setSelectedMember] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [subscribed, setSubscribed] = useState<Record<string, string[]>>({ ...subscriptions });

  const handleSubscribe = () => {
    if (!selectedMember || !selectedSport) return;
    if (subscribed[selectedMember]?.includes(selectedSport)) return;

    const updated = {
      ...subscribed,
      [selectedMember]: [...(subscribed[selectedMember] || []), selectedSport],
    };
    setSubscribed(updated);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Subscribe Members</h1>

      <SelectMember
        members={members}
        selectedMember={selectedMember}
        onChange={setSelectedMember}
      />

      <SelectSport
        sports={sports}
        selectedSport={selectedSport}
        onChange={setSelectedSport}
      />

      <SubscribeButton onClick={handleSubscribe} />

      {selectedMember && (
        <SubsList member={selectedMember} subscriptions={subscribed} />
      )}
    </div>
  );
}
