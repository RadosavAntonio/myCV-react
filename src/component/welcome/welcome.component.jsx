import { React, useEffect, useState } from "react";
import * as WS from "./welcome.style";

const Welcome = () => {
  const [data, getData] = useState("Loading...");
  useEffect (
    () => {
      fetch("http://localhost:5000/welcome").then(
        result => result.json()

      ).then(result => getData(result))
    },
    []
  )

  return (
    <WS.StyleWelcome>
      {data.name}

      <p>test1</p>
      <p>test2</p>
    </WS.StyleWelcome>
  );
};

export { Welcome };
