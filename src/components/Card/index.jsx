import React from "react";
import { useNavigate } from "react-router";

export const Card = ({ issue }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/issues/${issue.id}`);
  };

  return (
    <div className="card-container" onClick={onClick}>
      <img alt="issue" src={issue.cover_image} />
      <h1>{issue.name}</h1>
      <p>{issue.description}</p>
    </div>
  );
};
