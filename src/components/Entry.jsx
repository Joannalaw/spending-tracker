import React, { useState } from "react";

function Entry(props) {
  const [expenses, setExpense] = useState({
    amount: 0,
    remarks: "",
    category: "",
  });
  function handleChange(event) {
    const record = event.target.value;
    const target = event.target.name;
    if (target === "amount") {
      setExpense((prevState) => {
        return {
          amount: record,
          remarks: prevState.remarks,
          category: prevState.category,
        };
      });
    } else if (target === "remarks") {
      setExpense((prevState) => {
        return {
          amount: prevState.amount,
          remarks: record,
          category: prevState.category,
        };
      });
    } else if (target === "category") {
      setExpense((prevState) => {
        return {
          amount: prevState.amount,
          remarks: prevState.remarks,
          category: record,
        };
      });
    }
  }
  const handleClick = () => {
    props.onAdd(expenses);
  };

  return (
    <div className="entry">
      <input placeholder="amount" onChange={handleChange} name="amount"></input>
      <input
        placeholder="remarks"
        onChange={handleChange}
        name="remarks"
      ></input>
      <input
        placeholder="category"
        onChange={handleChange}
        name="category"
      ></input>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default Entry;
