'use client'; // only needed in app router – can be removed for pages router

import { useRouter } from "next/router";

const GoToSportsButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/pages/sports"); // ✅ Correct route
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#0070f3",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Go to Sports Page
    </button>
  );
};

export default GoToSportsButton;
