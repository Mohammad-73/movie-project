import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";
import About from "./About";
import Upcoming from "./Upcoming";
import TopRated from "./TopRated";
import Popular from "./Popular";
import NowPlaying from "./NowPlaying";
import TvPopular from "./TvPopular";
import TvTopRated from "./TvTopRated";
import TvNowPlaying from "./TvNowPlaying";
import SearchResult from "./SearchResult";
import Auth from "./Auth";
import Celebrity from "./Celebrity";
import TvShow from "./TvShow";
import Profile from "./Profile";
import PrivateRoutes from "../components/privateRoutes/PrivateRoutes";

export default function Pages() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movies/:id/:movieTitle">
        <Movie />
      </Route>
      <Route path="/tv-shows/:id/:tvShowName">
        <TvShow />
      </Route>
      <Route path="/celebrities/:id/:celebrityName">
        <Celebrity />
      </Route>
      <Route path="/auth">
        <Auth />
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
      <Route path="/tvnowplaying">
        <TvNowPlaying />
      </Route>
      <Route path="/tvpopular">
        <TvPopular />
      </Route>
      <Route path="/tvtoprated">
        <TvTopRated />
      </Route>
      <Route path="/searchresults">
        <SearchResult />
      </Route>
      <PrivateRoutes path="/profile">
        <Profile />
      </PrivateRoutes>
    </Switch>
  );
}
