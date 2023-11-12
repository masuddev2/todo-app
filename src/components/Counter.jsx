import React, { useState } from "react";

const Counter = () => {
  const [tuhin, setTuhin] = useState(0);
  console.log(tuhin);

	const handleIncrement = () => {
		if (tuhin < 10) {
			setTuhin(tuhin + 1)
		}
	}

	const handleDecrement = () => {
		if (tuhin > 0) {
			setTuhin(tuhin - 1)
		}
	}

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 border-bottom py-3">
          <button className="btn btn-outline-primary">Add Counter</button>
          <button className="btn btn-outline-primary mx-3">Remove All</button>
          <button className="btn btn-outline-primary">Reset</button>
        </div>
        <div className="col-md-4 my-5">
          <div className="card">
            <div className="card">Counter 1   +</div>
            <div className="card-body p-3">
              <h1 className="text-center">{tuhin}</h1>
              <div className="text-center">
                <button onClick={handleIncrement} className="btn btn-primary">Increment</button>
                <button onClick={handleDecrement} className="btn btn-danger mx-2">Decrement</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-5">
          <div className="card">
            <div className="card">Counter 1   +</div>
            <div className="card-body p-3">
              <h1 className="text-center">{tuhin}</h1>
              <div className="text-center">
                <button onClick={handleIncrement} className="btn btn-primary">Increment</button>
                <button onClick={handleDecrement} className="btn btn-danger mx-2">Decrement</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
