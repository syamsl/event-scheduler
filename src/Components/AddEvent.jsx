import React, { useState } from "react";
import Modal from "react-modal";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

const AddEvent = ({ isOpen, onClose, onEventAdded }) => {
  const [title, setTitle] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const customStyles = {
    content: {
      top: "10%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onEventAdded({
      title,
      start,
      end,
    });

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          StartDate:
          <Datetime value={start} onChange={(date) => setStart(date)} />
        </div>

        <div>
          EndDate
          <Datetime value={end} onChange={(date) => setEnd(date)} />
        </div>
        <button type="submit">Add Event</button>
      </form>
    </Modal>
  );
};

export default AddEvent;
