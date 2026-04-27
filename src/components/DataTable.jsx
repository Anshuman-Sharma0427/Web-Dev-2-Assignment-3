import Row from "./Row";

function DataTable({ records, changeMarks, removeRecord }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Marks</th>
          <th>Update</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        {records.map((item) => (
          <Row
            key={item.id}
            item={item}
            changeMarks={changeMarks}
            removeRecord={removeRecord}
          />
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;