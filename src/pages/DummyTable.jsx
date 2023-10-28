import React from "react";
import MainContainer from "../containers/MainContainer";

const data = [
  { id: 1, name: "John Doe", age: 25, email: "john@example.com" },
  { id: 2, name: "Jane Smith", age: 32, email: "jane@example.com" },
  { id: 3, name: "Bob Johnson", age: 45, email: "bob@example.com" },
];

const DummyTable = () => {
  return (
    <MainContainer>
      <div className="page-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {data.map(({ id, name, age, email }, idx) => (
              <tr key={idx}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{age}</td>
                <td>{email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MainContainer>
  );
};

export default DummyTable;
