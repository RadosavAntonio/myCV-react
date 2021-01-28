import Styled from "styled-components";
import { Icon } from "../iconmoon";
import image from "../../asset/images/AntonioR.jpeg"


export const StyleIcon = Styled(Icon)`
  background-color: ${(props)=>(props.backgroundColor ? props.backgroundColor : "#d52027")};
  border-radius: 50%;
  padding: 10px;
  place-self: center;
`;

export const StyleBtnDownload = Styled.div`
  background-color: ${(props)=>(props.backgroundColor ? props.backgroundColor : "#777666")};
  border-radius: 15px;
  padding: 10px;
  place-self: center;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #fff;

`;

export const StyleIconWrapper = Styled.div`
  grid-column: 1/-1;
  display: grid;
  height: 80px;
`;

export const StyleMainTitle = Styled.h1`
  font-weight: 600;
  color: #707070;
  text-align: center;
  font-size: 45px;
  line-height: 50px;
`;

export const StyleGrid = Styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin: 0px 36px;
`;

export const StyleRow = Styled.div`
  grid-column: 1/-1;
`;

export const StyleTitlte = Styled.div`
  padding: 10px;
  height: 60px;
  background-color: #d52027;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    background-color: #d52027;
    top: 0;
    bottom: 0;
    left: -36px;
    right: -36px;
  }
  &::after {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

export const StyleSectionTitle = Styled.div`
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  position: relative;
  font-weight: 600;
  font-size: 24px;
`;

export const StyleProfession = Styled.p`
  font-weight: 600;
  color: #707070;
  text-align: center;
  font-size: 36px;
  line-height: 48px;
`;

export const StyleSemiTitle = Styled.p`
  font-size: 22px;
  line-height: 30px;
  font-weight: 600;
  color: #808080;
  margin: 30px 0 10px 0;
`;

export const StyleBox = Styled.div`
  background-color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  padding: 20px;
  font-size: 14px;
  font-weight: 600;
  line-height: 30px;
  color: #707070;
`;

export const StylePic = Styled.div`
  margin: auto;
  background-image: url(${image});
  height: 150px;
  width: 150px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 50%;
`;