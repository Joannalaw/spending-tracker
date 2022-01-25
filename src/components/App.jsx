import React, { useState } from "react";
import Entry from "./Entry";
import Table from "./Table";

function App() {
  const [records, setRecords] = useState([]);
  function addExpense(props) {
    setRecords((prevState) => {
      return [...prevState, props];
    });
  }

  return (
    <div>
      <Entry onAdd={addExpense} />
      <Table listItems={records} />
    </div>
  );
}

export default App;
