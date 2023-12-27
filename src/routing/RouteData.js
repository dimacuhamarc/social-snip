import React from "react";
import Onboarding from "../pages/Onboarding";
import Profile from "../pages/Profile";
import Home from "../pages/Home";

const RouteData = [
  {
    path: "/onboarding",
    exact: true,
    component: () => <Onboarding />
  },
  {
    path: "/",
    exact: true,
    component: () => <Home />
  },
    {
      path: "/discover",
      exact: true,
      component: () => <div>Discover</div>
    },
    {
      path: "/pricing",
      exact: true,
      component: () => <div>pricing</div>
    },
    {
      path: "/explore",
      exact: true,
      component: () =><div>explore</div>
    },
  {
    path: "/profile/:user",
    exact: true,
    component: () => <Profile />
    
  },
];

export default RouteData;