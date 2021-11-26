import React from "react";
import Tracks from "../Tracks/Tracks";
import Search from "../Search/Search";

export default function Hero() {
  return (
    <React.Fragment>
      <Search />
      <Tracks />
    </React.Fragment>
  );
};

