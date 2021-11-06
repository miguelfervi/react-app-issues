import React from "react";
import { CardPane } from "../Card";
import { Col, Row } from "antd";
import { AlertMessage } from "../AlertMessage";

export const CardList = ({ issues }) => {
  return issues ? (
    <Row gutter={10}>
      {issues &&
        issues.map((issue) => (
          <Col key={issue.id} span={4}>
            <CardPane issue={issue} />
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
