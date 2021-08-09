import React, { useState } from "react";
import {
  Col,
  Row,
  Menu,
  Dropdown,
  Avatar,
  Button,
  Drawer,
  Collapse,
} from "antd";
import Container from "../../layout/Container";
import { UserOutlined, MenuOutlined } from "@ant-design/icons";
import logo from "../../../../public/logo-2.png";
import authService from "../../../service/authService";
import image from "../../../helper/image";
import { Link, NavLink } from "react-router-dom";
import classes from "./SmallNav.module.scss";
const { Panel } = Collapse;

export default function SmallNav({ user, logout }) {
  const [toggleSmallMenu, setToggleSmallMenu] = useState(false);

  const menu = () => (
    <Menu>
      <Menu.Item>
        <Link to="/profile">{user.name}</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={logout} danger>
        Logout
      </Menu.Item>
    </Menu>
  );

  function handleLogin() {
    authService.createRequestToken().then((data) => {
      window.location = `https://www.themoviedb.org/authenticate/${
        data.request_token
      }?redirect_to=${import.meta.env.VITE_REDIRECT_URL}`;
    });
  }

  const showDrawer = () => {
    setToggleSmallMenu(true);
  };

  const onClose = () => {
    setToggleSmallMenu(false);
  };

  return (
    <div className={classes.smallNavRoot}>
      <Drawer
        placement="right"
        closable={true}
        onClose={onClose}
        visible={toggleSmallMenu}
      >
        <Collapse ghost>
          <NavLink to="/">
            <Panel
              style={{ color: "#edf2f4", paddingLeft: 12 }}
              showArrow={false}
              header="Home"
              key="1"
            ></Panel>
          </NavLink>
          <Panel showArrow={false} header="Movies" key="2">
            <NavLink
              style={{
                color: "#edf2f4",
                display: "block",
                padding: "5px 0 0 30px",
              }}
              to="/upcoming"
            >
              Upcoming
            </NavLink>
            <NavLink
              style={{
                color: "#edf2f4",
                display: "block",
                padding: "5px 0 0 30px",
              }}
              to="/toprated"
            >
              Top Rated
            </NavLink>
            <NavLink
              style={{
                color: "#edf2f4",
                display: "block",
                padding: "5px 0 0 30px",
              }}
              to="/popular"
            >
              Popular
            </NavLink>
            <NavLink
              style={{
                color: "#edf2f4",
                display: "block",
                padding: "5px 0 0 30px",
              }}
              to="/nowplaying"
            >
              Now Playing
            </NavLink>
          </Panel>
          <Panel showArrow={false} header="Tv Shows" key="5">
            <NavLink
              style={{
                color: "#edf2f4",
                display: "block",
                padding: "5px 0 0 30px",
              }}
              to="/tvtoprated"
            >
              Top Rated
            </NavLink>
            <NavLink
              style={{
                color: "#edf2f4",
                display: "block",
                padding: "5px 0 0 30px",
              }}
              to="/tvpopular"
            >
              Popular
            </NavLink>
            <NavLink
              style={{
                color: "#edf2f4",
                display: "block",
                padding: "5px 0 0 30px",
              }}
              to="/tvnowplaying"
            >
              Now Playing
            </NavLink>
          </Panel>
          <NavLink to="/">
            <Panel
              style={{ color: "#edf2f4", paddingLeft: 12 }}
              header="Celebrities"
              showArrow={false}
              key="4"
            ></Panel>
          </NavLink>
        </Collapse>
      </Drawer>
      <Container>
        <Row justify="space-between">
          <Col>
            {user ? (
              <Dropdown
                overlay={menu()}
                placement="bottomCenter"
                trigger={["click"]}
              >
                <Avatar
                  style={{ cursor: "pointer" }}
                  size="large"
                  {...(user?.avatar?.tmdb?.avatar_path
                    ? { src: image(user?.avatar?.tmdb?.avatar_path, "w185") }
                    : { icon: <UserOutlined /> })}
                />
              </Dropdown>
            ) : (
              <Button onClick={handleLogin}>Login</Button>
            )}
          </Col>
          <Col>
            <img width="200px" src={logo} />
          </Col>
          <Col>
            <MenuOutlined
              onClick={showDrawer}
              style={{ fontSize: 30, cursor: "pointer" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
