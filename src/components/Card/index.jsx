import React from "react";
import { useNavigate } from "react-router";
import { Card } from "antd";
import "./index.css";
const { Meta } = Card;

export const CardPane = ({ issue }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/issues/${issue.id}`);
  };

  return (
    <div>
      <Card
        onClick={onClick}
        hoverable
        style={{ margin: "1rem" }}
        cover={<img alt="issue" src={issue.cover_image} />}
      >
        <Meta
          className="card-size"
          title={issue.name}
          description={issue.description}
        />
      </Card>
    </div>
  );
};
