// components/SportList.tsx

type Props = {
  sports: string[];
};

const SportList = ({ sports }: Props) => {
  return (
    <ul>
      {sports.map((sport, i) => (
        <li key={i}>{sport}</li>
      ))}
    </ul>
  );
};

export default SportList;
