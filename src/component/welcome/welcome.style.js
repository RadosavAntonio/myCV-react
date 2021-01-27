import Styled from "styled-components";
import { Icon } from "../iconmoon";

export const StyleWelcome = Styled.div`
  color: red;
`;

export const StyleGrid = Styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin: 0px 36px;
`

export const StyleRow = Styled.div`
  grid-column: 1/-1;
`
export const StyleTitle = Styled.div`
  background-color: #d52027;
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  left: 0;
`

export const StyleIcon = Styled(Icon)`
 background-color:#d52027;
 padding: 13px;
 border-radius: 15px;
`

export const UnderTitle = Styled.div`
margin-top: 60px;
width: 100%;
`
