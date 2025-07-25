import GoToSportsButton from "../components/sportpagebutton";
import GoToMembersButton from "../components/memberpagebutton";
import GoToSubsButton from "../components/subspagebutton";

export default function HomePage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome to the Sports Club</h1>
      <GoToSportsButton />
      <GoToMembersButton />
      <GoToSubsButton />
    </div>
  );
}
