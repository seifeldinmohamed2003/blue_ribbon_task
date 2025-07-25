// src/components/GoToSportsButton.tsx

import { useRouter } from "next/router";

const GoToSubsButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/subscriptions"); // Absolute route
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#28a745",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Go to Subscriptions Page
    </button>
  );
};

export default GoToSubsButton;
