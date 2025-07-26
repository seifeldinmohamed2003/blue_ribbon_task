import { useRouter } from "next/router";

const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/")}
      style={{
        marginBottom: "1.5rem",
        backgroundColor: "#0070f3",
        color: "white",
        padding: "0.5rem 1rem",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "1rem"
      }}
    >
      ← Back to Home
    </button>
  );
};

export default BackButton;
