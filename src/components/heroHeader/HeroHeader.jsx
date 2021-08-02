import React, { useContext } from "react";
import Search from "../search/Search";
import Container from "../layout/Container";
import Nav from "./Nav";
import classes from "./HeroHeader.module.scss";
import { HeroHeaderContext } from "../../context/HeroHeaderContext";
import { Breadcrumb, Col, Row } from "antd";
import ContainerFullWidth from "../layout/ContainerFullWidth";

export default function HeroHeader({ children }) {
  const [bg] = useContext(HeroHeaderContext);

  return (
    <>
      <header
        className={classes.root}
        style={{
          backgroundImage: `linear-gradient(rgb(3 13 24),rgb(3 13 24/40%)), url(${bg})`,
        }}
      >
        <Nav />
        <Container>
          <Search />
        </Container>
        {children && (
          <div style={{ margin: "48px auto" }}>
            <Container>{children}</Container>
          </div>
        )}
      </header>
      <ContainerFullWidth backgroundColor="#edf2f4">
        <Row justify="center" style={{ padding: 5 }}>
          <Col xs={24} sm={22} md={22} lg={22} xl={20}>
            <Breadcrumb>
              <Breadcrumb.Item style={{ color: "#8d99ae" }}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item style={{ color: "#2b2d42" }}>
                An Application
              </Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
      </ContainerFullWidth>
    </>
  );
}
