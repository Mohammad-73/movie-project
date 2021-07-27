import { Avatar, Button, Col, Row } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import authService from "../../service/authService";
import Container from "../layout/Container";
import image from "../../helper/image";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const { user } = useContext(UserContext);
  function handleLogin() {
    authService.createRequestToken().then((data) => {
      window.location = `https://www.themoviedb.org/authenticate/${data.request_token}?redirect_to=http://localhost:3000/auth`;
    });
  }

  return (
    <nav>
      <Container>
        <Row>
          <Col>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies">Movies</NavLink>
              </li>
              <li>
                <NavLink to="/tv-shows">Tv Shows</NavLink>
              </li>
              <li>
                <NavLink to="/celebrities">Celebrities</NavLink>
              </li>
            </ul>
          </Col>
          <Col>
            {user ? (
              <Avatar
                {...(user?.avatar?.tmdb?.avatar_path
                  ? { src: image(user?.avatar?.tmdb?.avatar_path, "w185") }
                  : { icon: <UserOutlined /> })}
              />
            ) : (
              <Button onClick={handleLogin}>Login</Button>
            )}
          </Col>
        </Row>
      </Container>
    </nav>
  );
}
