import "./StationsFilter.css";
export default function StationsFilter() {
  const fuelTypes = ["E10", "E85", "Gazole", "GPLc", "SP95", "SP98"];

  return (
    <form className="search-form">
      <input type="text" placeholder="Postal Code" className="general-input" />
      <select value="SP98" className="general-input">
        {fuelTypes.map((e) => (
          <option value={e}>{e}</option>
        ))}
      </select>
      <button className="send-request-button">Find Stations</button>
    </form>
  );
}
