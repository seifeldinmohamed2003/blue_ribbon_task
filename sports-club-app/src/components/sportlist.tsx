// components/sportlist.tsx
type Props = {
  sports: string[];
};

export default function SportList({ sports }: Props) {
  return (
    <ul style={{ textAlign: "left", marginBottom: "1rem" }}>
      {sports.map((sport, i) => (
        <li key={i}>{sport}</li>
      ))}
    </ul>
  );
}
