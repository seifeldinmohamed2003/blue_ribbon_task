import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GoToSportsButton from '../components/sportpagebutton';

export default function HomePage() {
  return (
    <main>
      <h1>Welcome to the Sports Club</h1>
      <GoToSportsButton />
    </main>
  );
}
