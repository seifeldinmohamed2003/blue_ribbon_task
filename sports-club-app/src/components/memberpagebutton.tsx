// src/components/GoToSportsButton.tsx

import { useRouter } from "next/router";

const GoToMembersButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/members"); // Absolute route
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
      Go to Members Page
    </button>
  );
};

export default GoToMembersButton;
