import React from "react";
import { Card } from "../Card";

export const CardList = ({ issues }) => {
  return (
    <div className="card-list">
      {" "}
      {issues && issues.map((issue) => <Card key={issue.id} issue={issue} />)}
    </div>
  );
};
