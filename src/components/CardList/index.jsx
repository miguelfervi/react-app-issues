import React from "react";
import { CardPane } from "../Card";
import { Col, Row } from "antd";
import { AlertMessage } from "../AlertMessage";

export const CardList = ({ issues }) => {
  return issues ? (
    <Row gutter={16}>
      {issues &&
        issues.map((issue) => (
          <Col key={issue.id} className="column" span={6}>
            <CardPane className="test" issue={issue} />
          </Col>
        ))}
    </Row>
  ) : (
    <AlertMessage
      message="Info Text"
      description="Loading issues..."
      type="info"
    ></AlertMessage>
  );
};
