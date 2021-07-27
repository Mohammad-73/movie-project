import React, { useEffect } from "react";
import { Layout } from "antd";
import Pages from "../../pages/Pages";
import HeroHeader from "../heroHeader/HeroHeader";
import { useLocation } from "react-router-dom";
import PopularMovieSwiper from "../popularMovieSwiper/PopularMovieSwiper";
const { Content, Footer } = Layout;

export default function SiteLayout() {
  const location = useLocation();

  function heroHeaderChildren() {
    switch (location.pathname) {
      case "/":
        return <PopularMovieSwiper />;
      case "/about":
        return <div>about</div>;
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
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}
