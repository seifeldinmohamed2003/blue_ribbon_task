import { useState } from "react";
import data from "../data/data.json";

const { members, sports, subscriptions } = data;

export default function SubscriptionsPage() {
  const [selectedMember, setSelectedMember] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [subscribed, setSubscribed] = useState<Record<string, string[]>>({ ...subscriptions });

  const handleSubscribe = () => {
    if (!selectedMember || !selectedSport) return;

    const alreadySubscribed = subscribed[selectedMember]?.includes(selectedSport);

    if (!alreadySubscribed) {
      const updated = {
        ...subscribed,
        [selectedMember]: [...(subscribed[selectedMember] || []), selectedSport],
      };
      setSubscribed(updated);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Subscribe Members</h1>

      <div>
        <label>Member: </label>
        <select onChange={(e) => setSelectedMember(e.target.value)} value={selectedMember}>
          <option value="">Select</option>
          {members.map((m, i) => (
            <option key={i} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Sport: </label>
        <select onChange={(e) => setSelectedSport(e.target.value)} value={selectedSport}>
          <option value="">Select</option>
          {sports.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleSubscribe} style={{ marginTop: 10 }}>Subscribe</button>

      {selectedMember && (
        <div style={{ marginTop: 20 }}>
          <h3>{selectedMember} is subscribed to:</h3>
          <ul>
            {(subscribed[selectedMember] || []).map((sport, i) => (
              <li key={i}>{sport}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
