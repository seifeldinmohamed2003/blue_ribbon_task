interface Props {
  sports: string[];
  selectedSport: string;
  onChange: (value: string) => void;
}

export default function SelectSport({ sports, selectedSport, onChange }: Props) {
  return (
    <div>
      <label>Sport: </label>
      <select value={selectedSport} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select</option>
        {sports.map((s, i) => (
          <option key={i} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
}
