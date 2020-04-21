import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="tc pointer br2 bg-light-green dib pa3 ma2 grow bw2 shadow-5 ">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot" />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Card;
