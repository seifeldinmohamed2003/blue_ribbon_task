import { useState } from "react";
import { members, sports, subscriptions } from "../data/data";

export default function SubscriptionsPage() {
  const [selectedMember, setSelectedMember] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [subscribed, setSubscribed] = useState({ ...subscriptions });

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
        <select onChange={(e) => setSelectedMember(e.target.value)}>
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
        <select onChange={(e) => setSelectedSport(e.target.value)}>
          <option value="">Select</option>
          {sports.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleSubscribe}>Subscribe</button>

      {selectedMember && (
        <div>
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
