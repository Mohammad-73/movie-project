import React, { useState } from "react";
import { Col, Row, Menu, Dropdown, Avatar, Button, Divider } from "antd";
import Container from "../layout/Container";
import { UserOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import logo from "../../../public/logo-2.png";
import authService from "../../service/authService";
import image from "../../helper/image";
import { Link, NavLink } from "react-router-dom";
import classes from "./SmallNav.module.scss";

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

  return (
    <div className={classes.root}>
      {toggleSmallMenu && (
        <div className={classes.sidebar}>
          <span>
            <CloseOutlined onClick={() => setToggleSmallMenu(false)} />
          </span>
          <Divider />
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Movies</NavLink>
          <NavLink to="/">Tv Shows</NavLink>
          <NavLink to="/">Celebrities</NavLink>
        </div>
      )}
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
              onClick={() => setToggleSmallMenu(true)}
              style={{ fontSize: 30, cursor: "pointer" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
