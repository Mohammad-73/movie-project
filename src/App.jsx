import React, { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import About from "./pages/About";
import Upcoming from "./pages/Upcoming";
import TopRated from "./pages/TopRated";
import Popular from "./pages/Popular";
import NowPlaying from "./pages/NowPlaying";
import SearchResult from "./pages/SearchResult";
import Search from "./components/search/Search";
// import antd
import { Layout, Menu, Breadcrumb, Input, Space, Row, Col } from "antd";
import { VideoCameraOutlined, InfoCircleOutlined } from "@ant-design/icons";
const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;
// import swiper
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const baseUrl =
  "https://api.themoviedb.org/3/search/movie?api_key=afd6ea76f8c05c6675803101b0b04f2a";

function App() {
  const [current, setCurrent] = useState("setting:1");

  const handleMenuClick = (e) => {
    this.setState({ current: e.key });
  };

  return (
    <div id="components-layout-demo-fixed">
      <Layout>
        <Header style={{ position: "fixed", zIndex: 99, width: "100%" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            onClick={handleMenuClick}
            mode="horizontal"
            selectedKeys={[current]}
          >
            <Link to="/movies">
              <SubMenu
                key="SubMenu"
                icon={<VideoCameraOutlined />}
                title="Movies"
              >
                <Menu.Item key="upcoming">
                  <Link to="/upcoming">Upcoming</Link>
                </Menu.Item>
                <Menu.Item key="topRated">
                  <Link to="/toprated">Top Rated</Link>
                </Menu.Item>
                <Menu.Item key="popular">
                  <Link to="/popular">Popular</Link>
                </Menu.Item>
                <Menu.Item key="nowPlaying">
                  <Link to="/nowplaying">Now Playing</Link>
                </Menu.Item>
              </SubMenu>
            </Link>
            <Menu.Item key="about" icon={<InfoCircleOutlined />}>
              <Link to="/about">About</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content className="site-layout">
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}

          <div
            className="site-layout-background"
            style={{
              padding: "60px 0 0 0 ",
              minHeight: 380,
            }}
          >
            <Row>
              <Col span="24">
                <Search />
              </Col>
            </Row>
            <Switch>
              <Route exact path="/movies">
                <Movies />
              </Route>
              <Route exact path="/movies/:id">
                <Movie />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/upcoming">
                <Upcoming />
              </Route>
              <Route path="/toprated">
                <TopRated />
              </Route>
              <Route path="/popular">
                <Popular />
              </Route>
              <Route path="/nowplaying">
                <NowPlaying />
              </Route>
              <Route path="/searchresults">
                <SearchResult />
              </Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
