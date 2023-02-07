import './App.css';
import StationsFilter from './AppComponents/StationsFilter/StationsFilter';
import StationsMap from './AppComponents/StationsMap/StationsMap';
import StationsTable from './AppComponents/StationsTable/StationsTable';
export default function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="h1-searchbar">Gas Station Finder</h1>
      </header>
      <div className="main-components">
        <div className="left-section">
          <StationsFilter />
          <StationsTable />
        </div>
        <StationsMap />
      </div>
    </div>
  );
}