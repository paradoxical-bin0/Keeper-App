import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [state, setState] = useState(false);

  function changeState() {
    setState(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  let inside, rows;

  if (state) {
    inside = true;
    rows = 3;
  } else {
    inside = false;
    rows = 1;
  }

  return (
    <div>
      <form className="create-note">
        {state ? (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          onClick={changeState}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={rows}
        />
        {state ? (
          <Zoom in={inside}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        ) : null}
      </form>
    </div>
  );
}

export default CreateArea;
