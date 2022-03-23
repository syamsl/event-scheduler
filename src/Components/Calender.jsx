import React, { useState, useRef } from "react";
import FullCalender from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import AddEvent from "./AddEvent";

const Calender = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const calendarRef = useRef(null);

  const onEventAdded = (event) => {
    let calendarApi = this.calendarRef.current.getApi();
    calendarApi.addEvent(event);
  };

  return (
    <section style={{ postion: "relative", zIndex: 0 }}>
      <button onClick={() => setModalOpen(true)}>Add Event</button>
      <div
        style={{
          padding: "70px",
          margin: "70px",
          postion: "relative",
          zIndex: 0,
        }}
      >
        <FullCalender
          ref={calendarRef}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
        />
      </div>
      <AddEvent
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onEventAdded={(event) => onEventAdded(event)}
      />
    </section>
  );
};

export default Calender;
