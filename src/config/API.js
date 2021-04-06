import axios from "axios";

const Mode = process.env.NODE_ENV;

export const API =
  Mode === "development"
    ? axios.create({
        baseURL: "https://education-3bc28-default-rtdb.firebaseio.com/",
      })
    : axios.create({
        baseURL: "",
      });
