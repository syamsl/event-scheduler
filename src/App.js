import React, { useState } from "react";
import Modal from 'react-modal'
import Calender from "./Components/Calender";

Modal.setAppElement("#root");

const App = () => {
  const [events, setEvents] = useState([]);

  return (
    <Calender />
  );
};

export default App;
