import GoToSportsButton from "../components/sportpagebutton";
import GoToMembersButton from "../components/memberpagebutton";
import GoToSubsButton from "../components/subspagebutton";

export default function HomePage() {
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
        maxWidth: "400px",
        width: "100%",
        backgroundColor: "var(--background)",
        padding: "2rem",
        borderRadius: "var(--radius)",
        boxShadow: "var(--shadow)",
        textAlign: "center"
      }}>
        <h1 style={{ marginBottom: "1.5rem" }}>🏆 Welcome to the Sports Club</h1>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem"
        }}>
          <GoToSportsButton />
          <GoToMembersButton />
          <GoToSubsButton />
        </div>
      </div>
    </div>
  );
}
