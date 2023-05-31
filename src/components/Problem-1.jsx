import React, { useState } from "react";

const Problem1 = () => {
  const [show, setShow] = useState("all");

  const handleClick = (val) => {
    setShow(val);
  };

  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { input1, input2 };
    setTableData([...tableData, newData]);
    setInput1("");
    setInput2("");
  };

  const filteredData = tableData.filter((row) => {
    if (show === "all") {
      return true;
    } else if (show === "active") {
      return row.input2.toLowerCase() === "active";
    } else if (show === "completed") {
      return row.input2.toLowerCase() === "completed";
    }
    return true;
  });

  const sortedData = filteredData.sort((a, b) => {
    if (a.input2.toLowerCase() === "active" && b.input2.toLowerCase() !== "active") {
      return -1;
    } else if (a.input2.toLowerCase() === "completed" && b.input2.toLowerCase() !== "active" && b.input2.toLowerCase() !== "completed") {
      return -1;
    } else if (a.input2.toLowerCase() !== "active" && a.input2.toLowerCase() !== "completed" && b.input2.toLowerCase() === "active") {
      return 1;
    } else if (a.input2.toLowerCase() !== "active" && a.input2.toLowerCase() !== "completed" && b.input2.toLowerCase() !== "active" && b.input2.toLowerCase() !== "completed") {
      return 1;
    }
    return 0;
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6 ">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                className="form-control"
                placeholder="Status"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <button
                className={`nav-link ${show === "all" && "active"}`}
                type="button"
                onClick={() => handleClick("all")}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "active" && "active"}`}
                type="button"
                onClick={() => handleClick("active")}
              >
                Active
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${show === "completed" && "active"}`}
                type="button"
                onClick={() => handleClick("completed")}
              >
                Completed
              </button>
            </li>
          </ul>
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {sortedData.map((row, index) => (
                <tr key={index}>
                  <td>{row.input1}</td>
                  <td>{row.input2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;