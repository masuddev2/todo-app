import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Article from "./components/Article";

// const datas = [
//   {
//     name: "Ariful",
//     age: "10",
//   },
//   {
//     name: "Mihad",
//     age: "10",
//   },
//   {
//     name: "Anik",
//     age: "10",
//   },
//   {
//     name: "Puja",
//     age: "10",
//   },
// ];

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [person, setPerson] = useState({});
  const [data, setData] = useState([]);

  const handleClick = () => {
    setToggle(true);
  };

  const handleSubmit = () => {
    setData([...data, person]);
    setToggle(false);
    setPerson({});
  };

  const handleChange = (value, target) => {
    console.log(value, target);
    setPerson({ ...person, [target]: value });
  };

  console.log("data", person);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 py-3 border-bottom">
          {toggle && (
            <>
              <div className="mb-3">
                <input
                  type="email"
                  required
                  onChange={({ target }) => handleChange(target.value, "name")}
                  className="form-control w-25"
                  id="exampleFormControlInput1"
                  placeholder="Enter Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  required
                  onChange={({ target }) => handleChange(target.value, "age")}
                  className="form-control w-25"
                  id="exampleFormControlInput1"
                  placeholder="Enter Age"
                />
              </div>
            </>
          )}
          {!toggle ? (
            <button onClick={handleClick} className="btn btn-primary">
              Add Member
            </button>
          ) : (
            <button onClick={handleSubmit} className="btn btn-outline-primary">
              Submit
            </button>
          )}
        </div>
        {data.map((item, idx) => (
          <div key={idx} className="col-md-4 my-2">
            <Article age={item.age} name={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
