import React from "react";
import Breach from "./Breach";
import { useStore } from "../state/Tasks.store";

const BreachesList = () => {
  const { breaches } = useStore();
  return (
    <div className="breach-list">
      <div className="breach-titles">
        <h3 className="breach-details title">Title</h3>
        <h3 className="breach-details date">BreachDate</h3>
        <h3 className="breach-details domain">Domain</h3>
        <h3 className="breach-details logo">LogoPath</h3>
      </div>
      <div>
        {breaches.map((breach, indx) => {
          return <Breach breach={breach} indx={indx} key={breach + indx} />;
        })}
      </div>
    </div>
  );
};

export default BreachesList;
