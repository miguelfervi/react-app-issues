import React from "react";
import { useNavigate } from "react-router";
import { Card } from "antd";
import "./index.css";
const { Meta } = Card;

const LIMIT = 200;

export const CardPane = ({ issue }) => {
  const navigate = useNavigate();

  const showMessage = () =>
    issue.description.length <= LIMIT
      ? issue.description
      : issue.description.substring(0, LIMIT) + "...";

  const onClick = () => {
    navigate(`/issues/${issue.id}`);
  };

  return (
    <div>
      <Card
        onClick={onClick}
        className="animate__animated animate__fadeIn"
        hoverable
        style={{ margin: "1rem" }}
        cover={<img alt="issue" src={issue.cover_image} />}
      >
        <Meta
          className="card-size"
          title={issue.name}
          description={showMessage()}
        />
      </Card>
    </div>
  );
};
