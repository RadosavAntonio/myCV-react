import { React, useEffect, useState } from "react";
import * as WS from "./welcome.style";
import { youtubeConfig } from "../iconmoon/config";

const url = "http://localhost:5000/welcome";

const Welcome = () => {
  const [data, getData] = useState("Loading...");
  useEffect(() => {
    fetch(url)
      .then((result) => result.json())
      .then((result) => getData(result));
  }, []);

  return (
    <div>
      <WS.StyleGrid>
        <WS.StyleRow>
          <WS.StyleTitle>{data.sectionTitle}</WS.StyleTitle>
        </WS.StyleRow>
        <WS.UnderTitle>
          <WS.StyleRow>{data.name}</WS.StyleRow>
          <WS.StyleRow>{data.profession}</WS.StyleRow>
          <WS.StyleRow>{data.welcomeInfo}</WS.StyleRow>
          <a href="http://www.google.com"><WS.StyleIcon{ ...youtubeConfig}/></a>
        </WS.UnderTitle>
      </WS.StyleGrid>
    </div>
  );
};

export { Welcome };
