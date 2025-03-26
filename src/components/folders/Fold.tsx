import React from "react";

interface FoldProps {
  isOpen: boolean;
  isDaytime: boolean;
}

const Fold: React.FC<FoldProps> = ({ isOpen, isDaytime }) => {
  return (
    <div
      className={`first-container ${isOpen ? "open" : ""} ${
        isDaytime ? "daytime" : "nighttime"
      }`}
    >
      <div className="first-content">
        <div className="all-inrow">
          <div className="detail-item">
            <p>CURRENT TIMEZONE</p>
            <h2>Europe/London</h2>
          </div>
          <div className="all-foritem">
            <p>DAY OF THE YEAR</p>
            <h2>295</h2>
          </div>
        </div>
        <div className="all-inrow">
          <div className="all-foritem">
            <p>DAY OF THE WEEK</p>
            <h2>5</h2>
          </div>
          <div className="all-foritem">
            <p>WEEK NUMBER</p>
            <h2>42</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fold;
