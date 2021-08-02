import { Col, Row } from "antd";
import React from "react";

export default function ContainerFullWidth({
  children,
  backgroundImage,
  backgroundColor,
}) {
  return (
    <Row
      justify="center"
      style={{
        ...(backgroundColor
          ? { backgroundColor: backgroundColor }
          : {
              backgroundImage: `linear-gradient(rgb(3 13 24),rgb(3 13 24/80%)), url(${backgroundImage})`,
            }),
        backgroundSize: "cover",
      }}
    >
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        {children}
      </Col>
    </Row>
  );
}
