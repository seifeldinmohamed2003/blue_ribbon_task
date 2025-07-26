// components/memberlist.tsx
type Props = {
  members: string[];
};

export default function MemberList({ members }: Props) {
  return (
    <ul style={{ textAlign: "left", marginBottom: "1rem" }}>
      {members.map((member, i) => (
        <li key={i}>{member}</li>
      ))}
    </ul>
  );
}
