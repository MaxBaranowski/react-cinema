import React from "react";
import { Route, Switch } from "react-router-dom";

import asyncComponent from "./AsyncComponent";
// import AppliedRoute from "./components/AppliedRoute";
// import AuthenticatedRoute from "./components/AuthenticatedRoute";
// import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

const AsyncHome = asyncComponent(() => import("./components/Pages/Home"));
const AsyncLogin = asyncComponent(() => import("./components/Pages/Login"));
// const AsyncLogout = asyncComponent(() => import("./components/Logout"));
// const AsyncSignup = asyncComponent(() => import("./components/Signup"));
// const AsyncMovies = asyncComponent(() => import("./components/Movies"));
// const AsyncMovie = asyncComponent(() => import("./components/Movie"));
// const AsyncSongs = asyncComponent(() => import("./components/Songs"));
// const AsyncSearch = asyncComponent(() => import("./components/Search"));
// const AsyncTop = asyncComponent(() => import("./components/Top"));
// const Asyncfavorites = asyncComponent(() => import("./components/favorites"));
// const AsyncSettings = asyncComponent(() => import("./components/Settings"));
const AsyncNotFound = asyncComponent(() => import("./components/Pages/NotFound"));



export default (childProps) => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={AsyncHome}
        props={childProps}
      />
      <Route
        path="/login"
        exact
        component={AsyncLogin}
        props={childProps}
      />
      {/* <Route
                path="/logout"
                exact
                component={AsyncLogout}
                props={childProps}
            />
            <Route
                path="/signup"
                exact
                component={AsyncSignup}
                props={childProps}
            />
            <Route
                path="/movies"
                exact
                component={AsyncMovies}
                props={childProps}
            />
            <Route
                path="/movie/:id"
                exact
                component={AsyncMovie}
                props={childProps}
            />
            <Route
                path="/songs"
                exact
                component={AsyncSongs}
                props={childProps}
            />
            <Route
                path="/search"
                exact
                component={AsyncSearch}
                props={childProps}
            />
            <Route
                path="/top"
                exact
                component={AsyncTop}
                props={childProps}
            />
            <Route
                path="/favorites"
                exact
                component={Asyncfavorites}
                props={childProps}
            />
            <Route
                path="/settings"
                exact
                component={AsyncSettings}
                props={childProps}
            />*/}
      <Route component={AsyncNotFound} />
    </Switch>
  )
}
