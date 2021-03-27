import { useState, useEffect } from "react";
import Map from "./components/Map";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Map />
    </div>
  );
}

export default App;