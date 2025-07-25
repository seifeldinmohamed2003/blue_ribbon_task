interface Props {
  members: string[];
  selectedMember: string;
  onChange: (value: string) => void;
}

export default function SelectMember({ members, selectedMember, onChange }: Props) {
  return (
    <div>
      <label>Member: </label>
      <select value={selectedMember} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select</option>
        {members.map((m, i) => (
          <option key={i} value={m}>
            {m}
          </option>
        ))}
      </select>
    </div>
  );
}
