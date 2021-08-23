import React, { useState, useEffect } from "react";
import "./App.css";
import Map from "./components/Map";

const App = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();
      console.log(events);
      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <div className="heading">
        <h1>Wild Fire Tracker</h1>
      </div>
      {!loading ? <Map eventData={eventData} /> : <h2>Loading Data...</h2>}
    </div>
  );
};

export default App;
