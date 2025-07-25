// pages/sports.tsx
import { useState } from "react";
import data from "../data/data.json";
import SportList from "../components/sportlist";
import AddSport from "../components/addsport";

export default function SportsPage() {
  const [sportList, setSportList] = useState<string[]>([...data.sports]);

  const handleAddSport = (sport: string) => {
    if (!sportList.includes(sport)) {
      setSportList([...sportList, sport]);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Sports</h1>
      <SportList sports={sportList} />
      <AddSport onAdd={handleAddSport} />
    </div>
  );
}
