function Row({ item, changeMarks, removeRecord }) {
  return (
    <tr>
      <td>{item.name}</td>

      <td className={item.marks >= 33 ? "pass" : "fail"}>
        {item.marks >= 33 ? "Pass" : "Fail"}
      </td>

      <td>{item.marks}</td>

      <td>
        <input
          type="number"
          value={item.marks}
          onChange={(e) => changeMarks(item.id, e.target.value)}
        />
      </td>

      <td>
        <button onClick={() => removeRecord(item.id)}>Delete</button>
      </td>
    </tr>
  );
}

export default Row;