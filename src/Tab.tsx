import React from "react";

const Tab = () => {
  return (
    <div className="tab">
      <h4>2048</h4>
      <div className="score-tab">
        <div className="score">
          <p>Current</p>
          <span>800000</span>
        </div>
        <div className="score">
          <p>Best</p>
          <span>4</span>
        </div>
      </div>
    </div>
  );
};

export default Tab;
