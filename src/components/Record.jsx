import React from "react";

function Record(props) {
  return (
    <tr>
      <td>{props.category}</td>
      <td>{props.remarks}</td>
      <td>{props.amount}</td>
      <td></td>
    </tr>
  );
}

export default Record;
