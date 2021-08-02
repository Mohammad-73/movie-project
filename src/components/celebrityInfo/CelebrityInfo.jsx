import { Row, Col, Image, Divider } from "antd";
import React from "react";
import classes from "./CelebrityInfo.module.scss";
import image from "../../helper/image";
import ContainerFullWidth from "../layout/ContainerFullWidth";
import Container from "../layout/Container";
import SimpleSwiper from "../simpleSwiper/SimpleSwiper";

export default function CelebrityInfo({ data, personCredit }) {
  const background = image(data.profile_path, "h632");
  console.log("pc", personCredit);
  return (
    <div className={classes.root}>
      <ContainerFullWidth backgroundImage={background}>
        <Container>
          <Row>
            <Col xs={24} sm={22} md={22} lg={10} xl={10}>
              <Image
                width={350}
                src={image(data.profile_path, "h632")}
                placeholder={
                  <Image
                    preview={false}
                    src={image(data.profile_path, "h632")}
                    width={350}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={22} md={22} lg={14} xl={14}>
              <div className={classes.title}>
                <h2
                  style={{
                    fontFamily: "Zen Tokyo Zoo , cursive",
                  }}
                >
                  {data?.name?.toUpperCase()}
                </h2>
              </div>
              <div className={classes.info}>
                <span>Birthday </span>
                {data.birthday}
              </div>
              <div className={classes.info}>
                <span>Biography </span>
                {data.biography}
              </div>
            </Col>
          </Row>
          <Divider />
          <p>MOVIES</p>
          <SimpleSwiper slides={personCredit?.data?.cast} />
        </Container>
      </ContainerFullWidth>
    </div>
  );
}
