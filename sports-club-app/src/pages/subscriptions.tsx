import { useState } from "react";
import data from "../data/data.json";
import BackButton from "../components/backbutton";

const { members, sports, subscriptions } = data;

export default function SubscriptionsPage() {
  const [selectedMember, setSelectedMember] = useState("");
  const [selectedSport, setSelectedSport] = useState("");
  const [subscribed, setSubscribed] = useState<Record<string, string[]>>({ ...subscriptions });
  const [error, setError] = useState("");

  const handleSubscribe = () => {
    if (!selectedMember || !selectedSport) return;

    const alreadySubscribed = subscribed[selectedMember]?.includes(selectedSport);

    if (alreadySubscribed) {
      setError(`${selectedMember} is already subscribed to ${selectedSport}`);
    } else {
      const updated = {
        ...subscribed,
        [selectedMember]: [...(subscribed[selectedMember] || []), selectedSport],
      };
      setSubscribed(updated);
      setError("");
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
        boxShadow: "var(--shadow)"
      }}>
        <BackButton />
        <h1 style={{ textAlign: "center", marginBottom: "1.5rem" }}>📋 Subscribe Members</h1>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>Member:</label>
          <select
            onChange={(e) => setSelectedMember(e.target.value)}
            value={selectedMember}
            style={{ width: "100%" }}
          >
            <option value="">Select</option>
            {members.map((m, i) => (
              <option key={i} value={m}>{m}</option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>Sport:</label>
          <select
            onChange={(e) => setSelectedSport(e.target.value)}
            value={selectedSport}
            style={{ width: "100%" }}
          >
            <option value="">Select</option>
            {sports.map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <button onClick={handleSubscribe} style={{ width: "100%" }}>
          Subscribe
        </button>

        {error && (
          <div style={{ color: "red", marginTop: "1rem", textAlign: "center" }}>
            <strong>{error}</strong>
          </div>
        )}

        {selectedMember && (
          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ marginBottom: "0.5rem", textAlign: "center" }}>
              {selectedMember} is subscribed to:
            </h3>
            <ul style={{ textAlign: "left", paddingLeft: "1.5rem" }}>
              {(subscribed[selectedMember] || []).map((sport, i) => (
                <li key={i}>{sport}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
