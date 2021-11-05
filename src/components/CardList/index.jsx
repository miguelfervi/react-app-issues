import React from "react";
import { CardPane } from "../Card";
import { Col, Row } from "antd";

export const CardList = ({ issues }) => {
  return issues ? (
    <Row gutter={16}>
      {issues &&
        issues.map((issue) => (
          <Col key={issue.id} span={6}>
            <CardPane issue={issue} />
          </Col>
        ))}
    </Row>
  ) : <div>Loading</div> ;
};
