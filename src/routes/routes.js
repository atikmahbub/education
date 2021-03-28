import React, { lazy } from "react";

const Home = lazy(() => import("../views/HomePage/Home"));
const TutoringPage = lazy(() => import("../views/TutoringPage/Tutoring"));

export const routes = [
  { pathname: "/", name: "Home", component: Home },
  { pathname: "/tutoring", name: "Tutoring", component: TutoringPage },
];
