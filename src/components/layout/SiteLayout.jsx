import React, { useEffect } from "react";
import { Layout } from "antd";
import Pages from "../../pages/Pages";
import HeroHeader from "../heroHeader/HeroHeader";
import { useLocation } from "react-router-dom";
import PopularMovieSwiper from "../popularMovieSwiper/PopularMovieSwiper";
import About from "../../pages/About";
import PopularCelebrities from "../popularCelebrities/PopularCelebrities";
const { Content, Footer } = Layout;

export default function SiteLayout() {
  const location = useLocation();

  function heroHeaderChildren() {
    switch (location.pathname) {
      case "/":
        return <PopularMovieSwiper />;
      case "/about":
        return <About />;
      case "/celebrities":
        return <PopularCelebrities />;
      default:
        return null;
    }
  }

  return (
    <Layout>
      <HeroHeader>{heroHeaderChildren()}</HeroHeader>
      <Content className="site-layout">
        <Pages />
      </Content>
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#2b2d42",
          color: "#d90429",
          textShadow: "2px 2px 4px #000000",
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
