import React from "react";
import Record from "./Record";
function Table(props) {
  const records = props.listItems;
  console.log(records);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Details</th>
            <th>Amount</th>
            <th>Delete?</th>
          </tr>
        </thead>
        <tbody>
          {records.map((item, index) => (
            <Record
              key={index}
              amount={item.amount}
              category={item.category}
              remarks={item.remarks}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
