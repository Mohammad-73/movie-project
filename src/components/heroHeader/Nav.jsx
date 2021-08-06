import { Avatar, Button, Col, Row, Menu, Dropdown } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import authService from "../../service/authService";
import Container from "../layout/Container";
import image from "../../helper/image";
import { Link, NavLink } from "react-router-dom";
import classes from "./Nav.module.scss";

export default function Nav() {
  const { user, logout } = useContext(UserContext);

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
  const dropDownMenuMovie = () => (
    <Menu>
      <Menu.Item>
        <NavLink activeClassName={classes.dropActive} to="/upcoming">
          Upcoming
        </NavLink>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <NavLink activeClassName={classes.dropActive} to="/toprated">
          Top Rated
        </NavLink>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <NavLink activeClassName={classes.dropActive} to="/popular">
          Popular
        </NavLink>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <NavLink activeClassName={classes.dropActive} to="/nowplaying">
          Now Playing
        </NavLink>
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
    <nav className={classes.root}>
      <Container>
        <Row justify="space-between">
          <Col>
            <ul>
              <li>
                <NavLink exact activeClassName={classes.active} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <Dropdown overlay={dropDownMenuMovie()}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Movies
                    <DownOutlined />
                  </a>
                </Dropdown>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/tv-shows">
                  Tv Shows
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName={classes.active} to="/celebrities">
                  Celebrities
                </NavLink>
              </li>
            </ul>
          </Col>
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
        </Row>
      </Container>
    </nav>
  );
}
