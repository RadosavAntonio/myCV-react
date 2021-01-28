import { React, useEffect, useState } from "react";
import * as WS from "./welcome.style";
import { youtubeConfig } from "../iconmoon/config";
import { download } from "../iconmoon/config";

const url = "http://localhost:5000/welcome";

const Welcome = (props) => {
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
          <WS.StyleTitlte>
            <WS.StyleSectionTitle>{data.sectionTitle}</WS.StyleSectionTitle>
          </WS.StyleTitlte>
        </WS.StyleRow>

        <WS.StyleRow>
          <WS.StylePic />
        </WS.StyleRow>

        <WS.StyleRow>
          <WS.StyleMainTitle>{data.name}</WS.StyleMainTitle>
        </WS.StyleRow>

        <WS.StyleRow>
          <WS.StyleProfession>{data.profession}</WS.StyleProfession>
        </WS.StyleRow>

        <WS.StyleRow>
          <WS.StyleSemiTitle>{data.welcomeInfo}</WS.StyleSemiTitle>
        </WS.StyleRow>

        <WS.StyleRow>
          <WS.StyleBox>{data.aboutMeBoxTextList}</WS.StyleBox>
        </WS.StyleRow>

        <WS.StyleIconWrapper>
          <WS.StyleIcon {...youtubeConfig} />
        </WS.StyleIconWrapper>

        <WS.StyleIconWrapper>
          <WS.StyleBtnDownload>
            <WS.StyleIcon {...download}/>
            {data.btnDownloadText}
          </WS.StyleBtnDownload>
        </WS.StyleIconWrapper>
      </WS.StyleGrid>
    </div>
  );
};

export { Welcome };
