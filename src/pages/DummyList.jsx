import React from "react";
import MainContainer from "../containers/MainContainer";

const list = ["items 1", "items 2", "items 3", "items 4", "items 5"];

const DummyList = () => {
  return (
    <MainContainer>
      <div className="page-container">
        <ul className="list">
          {list.map((el, idx) => (
            <li className="list-item" key={idx}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </MainContainer>
  );
};

export default DummyList;
