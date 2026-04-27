import { useState } from "react";

function AddRecord({ addRecord }) {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const submitData = (e) => {
    e.preventDefault();

    if (name === "" || marks === "") return;

    addRecord(name, marks);
    setName("");
    setMarks("");
  };

  return (
    <form onSubmit={submitData}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default AddRecord;