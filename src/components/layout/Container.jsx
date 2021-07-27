import { Col, Row } from "antd";
import React from "react";

export default function Container({ children }) {
  return (
    <Row justify="center">
      <Col xs={24} sm={22} md={22} lg={22} xl={20}>
        {children}
      </Col>
    </Row>
  );
}
