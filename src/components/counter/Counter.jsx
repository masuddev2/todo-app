import React from "react";

const Counter = ({ data = {}, handleCounter, idx, handleRemove }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <h6>Counter {data?.id}</h6>
          <button
            type="button"
            className="btn-close"
            onClick={() => handleRemove(data.id)}
          ></button>
        </div>
        <div className="card-body p-3">
          <h1 className="text-center">{data?.value}</h1>
          <div className="text-center">
            <button
              onClick={() => handleCounter("increment", idx)}
              className="btn btn-primary"
            >
              Increment
            </button>
            <button
              onClick={() => handleCounter("decrement", idx)}
              className="btn btn-danger mx-2"
            >
              Decrement
            </button>
            <button
              onClick={() => handleCounter("reset", idx)}
              className="btn btn-outline-info"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
