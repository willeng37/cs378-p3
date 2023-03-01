import './App.css';
import { useState } from 'react';
import TableDisplay from './TableDisplay';
import AppButtons from './AppButtons';

function App() {
  const [city, setCity] = useState("Austin");

  // City buttons
  return (
    <div>
      <AppButtons />
      <TableDisplay />
    </div>
  );
}

export default App;
