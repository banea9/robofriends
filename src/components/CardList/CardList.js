import React from "react";
import Card from "../Card/Card";

const CardList = ({ filteredRobots }) => {
  
  return (
    <div className="mt4">
      {filteredRobots.map(robot => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
