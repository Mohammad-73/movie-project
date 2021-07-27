import React, { useContext } from "react";
import Search from "../search/Search";
import Container from "../layout/Container";
import Nav from "./Nav";
import classes from "./HeroHeader.module.scss";
import { HeroHeaderContext } from "../../context/HeroHeaderContext";

export default function HeroHeader({ children }) {
  const [bg] = useContext(HeroHeaderContext);
  console.log(bg);
  return (
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
  );
}
