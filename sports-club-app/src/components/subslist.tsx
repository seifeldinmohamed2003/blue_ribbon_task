// components/subscriptions/SubscriptionList.tsx
interface Props {
  member: string;
  subscriptions: Record<string, string[]>;
}

export default function SubsList({ member, subscriptions }: Props) {
  return (
    <div style={{ marginTop: 20 }}>
      <h3>{member} is subscribed to:</h3>
      <ul>
        {(subscriptions[member] || []).map((sport, i) => (
          <li key={i}>{sport}</li>
        ))}
      </ul>
    </div>
  );
}
