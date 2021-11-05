import React from "react";
import { useNavigate } from "react-router";
import { Button, Card } from "antd";
import "./index.css";
const { Meta } = Card;

const LIMIT = 200;

export const CardPane = ({ issue }) => {
  const navigate = useNavigate();

  const showMessage = () => {
    let toShow = issue.description;
    if (issue.description.length <= LIMIT) {
      toShow = issue.description;
    } else if (issue.description.length > LIMIT) {
      toShow = issue.description.substring(0, LIMIT) + "...";
    }
    return toShow;
  };

  const onClick = () => {
    navigate(`/issues/${issue.id}`);
  };

  return (
    <div>
      <Card
        hoverable
        style={{ margin: "1rem" }}
        cover={<img alt="issue" src={issue.cover_image} />}
      >
        <Meta
          className="card-size"
          title={issue.name}
          description={showMessage()}
        />
        <Button type="primary" onClick={onClick}>Read more</Button>
      </Card>
    </div>
  );
};
