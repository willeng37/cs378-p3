import './App.css';
import { useState } from 'react';
import TableDisplay from './TableDisplay';
import AppButtons from './AppButtons';

function App() {
  const [city, setCity] = useState("Austin");

  // City buttons
  return (
    <div className="App">
      <AppButtons city={city} setCity={setCity} />
      <TableDisplay city={city} />
    </div>
  );
}

export default App;
