import { useState } from "react";
import data from "../data/data.json";
import SportList from "../components/sportlist";
import AddSport from "../components/addsport";
import BackButton from "../components/backbutton"; 

export default function SportsPage() {
  const [sportList, setSportList] = useState<string[]>([...data.sports]);

  const handleAddSport = (sport: string) => {
    if (!sportList.includes(sport)) {
      setSportList([...sportList, sport]);
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
        <BackButton /> {/* ← Step 2 */}

        <h1 style={{ marginBottom: "1.5rem" }}>🏅 Sports</h1>

        <SportList sports={sportList} />

        <div style={{ marginTop: "1.5rem" }}>
          <AddSport onAdd={handleAddSport} />
        </div>
      </div>
    </div>
  );
}
