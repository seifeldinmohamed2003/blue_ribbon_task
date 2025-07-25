// components/MemberList.tsx

type Props = {
  members: string[];
};

const MemberList = ({ members }: Props) => {
  return (
    <ul>
      {members.map((member, i) => (
        <li key={i}>{member}</li>
      ))}
    </ul>
  );
};

export default MemberList;
