interface Props {
  onClick: () => void;
}

export default function SubscribeButton({ onClick }: Props) {
  return (
    <button onClick={onClick} style={{ marginTop: 10 }}>
      Subscribe
    </button>
  );
}
