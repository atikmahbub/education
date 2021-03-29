import React, { lazy } from "react";

const Home = lazy(() => import("../views/HomePage/Home"));
const TutoringPage = lazy(() => import("../views/TutoringPage/Tutoring"));
const HostingPage = lazy(() => import("../views/HostingPage/Hosting"));

export const routes = [
  { pathname: "/", name: "Home", component: Home },
  { pathname: "/tutoring", name: "Tutoring", component: TutoringPage },
  { pathname: "/hosting", name: "Tutoring", component: HostingPage },
];
