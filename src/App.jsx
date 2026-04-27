import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import AddRecord from "./components/AddRecord";
import DataTable from "./components/DataTable";

function App() {
  const [records, setRecords] = useState([
    { id: 1, name: "Arjun", marks: 67 },
    { id: 2, name: "Simran", marks: 29 },
    { id: 3, name: "Vikas", marks: 81 },
    { id: 4, name: "Pooja", marks: 48 },
  ]);

  const addRecord = (name, marks) => {
    const newStudent = {
      id: records.length + 1,
      name,
      marks: Number(marks),
    };
    setRecords([...records, newStudent]);
  };

  const changeMarks = (id, value) => {
    setRecords(
      records.map((item) =>
        item.id === id ? { ...item, marks: Number(value) } : item
      )
    );
  };

  const removeRecord = (id) => {
    setRecords(records.filter((item) => item.id !== id));
  };

  const total = records.length;
  const passed = records.filter((item) => item.marks >= 33).length;
  const average = Math.round(
    records.reduce((sum, item) => sum + item.marks, 0) / records.length
  );

  return (
    <div className="box">
      <Navbar />

      <AddRecord addRecord={addRecord} />

      <div className="stats">
        <div className="card">
          <h3>Registered</h3>
          <p>{total}</p>
        </div>

        <div className="card">
          <h3>Cleared</h3>
          <p>{passed}</p>
        </div>

        <div className="card">
          <h3>Average</h3>
          <p>{average}</p>
        </div>
      </div>

      <DataTable
        records={records}
        changeMarks={changeMarks}
        removeRecord={removeRecord}
      />
    </div>
  );
}

export default App;