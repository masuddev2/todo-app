import React, { useEffect, useState } from "react";
import Counter from "./Counter";

const Counters = () => {
  const [data, setData] = useState([]);

  useEffect(() =>{
    console.log('use effect');
  },[])


  console.log('log');
  
  const handleAddCounter = () => {
    setData([...data, { id: data.length + 1, value: 0 }]);
  };

  const handleCounter = (type, idx) => {
    const newData = [...data];

    if (type === "increment") {
      newData[idx].value++;
    } else if (type === "decrement") {
      newData[idx].value--;
    } else {
      newData[idx].value = 0;
    }
    setData(newData);
  };

  const handleRemove = (id) => {
    const newData = [...data];
    setData(newData.filter((item) => item.id !== id));
  };

  const handleResetAll = () => {
    const newData = [...data];
    setData(newData.map((item) => ({ ...item, value: 0 })));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 border-bottom py-3">
          <button
            onClick={handleAddCounter}
            className="btn btn-outline-primary"
          >
            Add Counter
          </button>
          <button
            onClick={() => setData([])}
            className="btn btn-outline-danger mx-3"
          >
            Remove All
          </button>
          <button onClick={handleResetAll} className="btn btn-outline-primary">
            Reset All
          </button>
        </div>
        {data.length > 0 ? (
          data.map((item, idx) => (
            <Counter
              idx={idx}
              key={item.id}
              handleRemove={handleRemove}
              data={item}
              handleCounter={handleCounter}
            />
          ))
        ) : (
          <div className="alert alert-primary">No Data.... </div>
        )}
      </div>
    </div>
  );
};

export default Counters;
