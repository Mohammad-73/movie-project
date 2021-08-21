import {
  Progress,
  Col,
  Image,
  Row,
  Tabs,
  Menu,
  Dropdown,
  Rate,
  message,
} from "antd";
const { TabPane } = Tabs;
import React from "react";
import image from "../../helper/image";
import Container from "../layout/Container";
import ContainerFullWidth from "../layout/ContainerFullWidth";
import classes from "./MovieInfo.module.scss";
import { StarOutlined, HeartOutlined } from "@ant-design/icons";
import movieService from "../../service/movieService";

export default function MovieInfo({ data }) {
  const background = image(data.backdrop_path, "w780");

  function handleRateMovie(rate) {
    movieService.rate(data.id, rate);
    message.success(`Rate ${rate} is submitted.`);
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Rate
          allowHalf
          count={10}
          value={data.vote_average}
          onChange={handleRateMovie}
        />
      </Menu.Item>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <ContainerFullWidth backgroundImage={background}>
        <Container>
          <Row gutter={24}>
            <Col xs={24} sm={22} md={22} lg={8} xl={8}>
              <Image
                width={"100%"}
                src={image(data.poster_path, "w500")}
                placeholder={
                  <Image
                    preview={false}
                    src={image(data.poster_path, "w500")}
                    width={350}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={22} md={22} lg={10} xl={10}>
              <h2
                className={classes.title}
                style={{
                  fontFamily: "Zen Tokyo Zoo , cursive",
                }}
              >
                {data?.title?.toUpperCase()}
              </h2>
              <div className={classes.genres}>
                {data?.genres?.map((genre) => (
                  <span className={classes.genre}>
                    <p>{genre.name}</p>
                  </span>
                ))}
              </div>
              <div className={classes.rate_fav}>
                <Dropdown overlay={menu} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <StarOutlined />
                  </a>
                </Dropdown>
                <HeartOutlined />
              </div>
              <div className={classes.tab}>
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Info" key="1">
                    <div className={classes.info}>
                      <span>Release Date </span>
                      {data.release_date}
                    </div>
                    <div className={classes.info}>
                      <span>Budget </span>
                      {"$ "}
                      {data.budget}
                    </div>
                    <div className={classes.info}>
                      <span>Production Countries </span>
                      {data?.production_countries?.length > 1
                        ? data?.production_countries?.map((pc) => (
                            <span>
                              {pc.name}
                              {", "}
                            </span>
                          ))
                        : data?.production_countries?.map((pc) => (
                            <span>{pc.name}</span>
                          ))}
                    </div>
                    <div className={classes.info}>
                      <span>Spoken Language </span>
                      {data?.spoken_languages?.length > 1
                        ? data?.spoken_languages?.map((sl) => (
                            <span>
                              {sl.english_name}
                              {", "}
                            </span>
                          ))
                        : data?.spoken_languages?.map((sl) => (
                            <span>{sl.english_name}</span>
                          ))}
                    </div>
                  </TabPane>
                  <TabPane tab="Overview" key="2">
                    {data.overview}
                  </TabPane>
                </Tabs>
              </div>
            </Col>
            <Col xs={24} sm={22} md={22} lg={6} xl={6}>
              <div className={classes.rate}>
                <Progress
                  type="circle"
                  strokeColor={{
                    "0%": "#ef233c",
                    "100%": "#d90429",
                  }}
                  percent={data.vote_average * 10}
                  width={60}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </ContainerFullWidth>
    </div>
  );
}
