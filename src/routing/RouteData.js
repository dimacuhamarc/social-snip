import React from "react";
import Onboarding from "../pages/Onboarding";
import Profile from "../pages/Profile";

const RouteData = [
  {
    path: "/onboarding",
    exact: true,
    component: () => <Onboarding />
  },
  {
    path: "/profile/:user",
    exact: true,
    component: () => <Profile />
    
  },
];

export default RouteData;