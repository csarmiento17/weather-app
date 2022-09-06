import React, { useState } from "react";

const Navigation = ({ submitCity }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleSubmitCity = (value) => {
    setActiveTab(value);
    submitCity(value);
  };

  return (
    <div className="Tabs">
      <ul className="nav">
        <li
          className={activeTab === "TORONTO" ? "active" : ""}
          onClick={(e) => handleSubmitCity("TORONTO")}
        >
          TORONTO
        </li>
        <li
          className={activeTab === "PARIS" ? "active" : ""}
          onClick={(e) => handleSubmitCity("PARIS123")}
        >
          PARIS123
        </li>
        <li
          className={activeTab === "SINGAPORE" ? "active" : ""}
          onClick={(e) => handleSubmitCity("SINGAPORE")}
        >
          SINGAPORE
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
