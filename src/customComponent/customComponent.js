import { createGlobalStyle, css, styled } from "styled-components";
import PretendardVariable from "../font/PretendardVariable.ttf";
import ShadowInto from "../font/ShadowInto.ttf";
export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'pre-bold';
    src: url(${PretendardVariable}) format('truetype');
    font-weight: 800;
  }
  @font-face {
    font-family: 'pre-normal';
    src:  url(${PretendardVariable}) format('truetype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'shadow-into';
    src: url(${ShadowInto}) format('truetype');
  }
  @keyframes rotateAnimation {
    0%{
      transform: translateY(0px);
    }
    100%{
      transform: translateY(20px);
    }
  }
  @keyframes btnAnimation {
    0%{
      transform: translateX(0px);
    }
    100%{
      transform: translateX(15px);
    }
  }
  @keyframes wordAnimation {
    0%{
      transform: translateY(0rem);
    }
    20%{
      transform: translateY(-9rem);
    }
    40%{
      transform: translateY(-17rem);
    }
    60%{
      transform: translateY(-24rem);
    }
    80%{
      transform: translateY(-32rem);
    }
    100%{
      transform: translateY(-39rem);
    }
  }
  @keyframes upanddown {
    0%{
      transform: translate(45vw, 70vh);
    }100%{
      transform: translate(45vw, 69vh);
      
    }
  }
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;

}
`;

export const EContainer = styled.div`
  background: rgb(18, 35, 193);
  background: linear-gradient(
    192deg,
    rgba(18, 35, 193, 0.6825105042016807) 23%,
    rgba(45, 219, 253, 0.5368522408963585) 100%
  );
  min-height: 100vh;
  width: 100vw;
`;

export const Chunk = styled.div``;

export const UContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  min-height: 100vh;
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  padding-top: 10px;
  flex-wrap: wrap;
`;

export const RowFlexBox = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const ColumnFlexBox = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const Box = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.row ? "row nowrap" : "column nowrap")};
  background-color: white;
  box-shadow: ${(props) =>
    props.shadow && "-1px 14px 47px -20px rgba(0,0,0,0.36)"};
  border-radius: ${(props) => (props.radius ? "7px" : "0px")};
`;

export const Word = styled.p`
  font-family: ${(props) => (props.bold ? "pre-bold" : "pre-normal")};
  color: ${(props) => (props.white ? "white" : "black")};
  font-size: 3rem;
  &:hover {
    color: ${(props) => props.hover && "white"} !important;
  }
`;

export const Words = styled.p`
  font-family: ${(props) =>
    props.bold ? "pre-bold" : props.shadow ? "shadow-into" : "pre-normal"};
  color: ${(props) =>
    props.white
      ? "white"
      : props.blue
      ? "blue"
      : props.gray
      ? "gray"
      : "black"};
  font-size: 3rem;
  letter-spacing: ${(props) => props.letterspace && "1px"};
`;

export const CustomBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 15px;
  background: rgb(46, 80, 255);
  background: linear-gradient(
    319deg,
    rgba(46, 80, 255, 0.7497373949579832) 0%,
    rgba(131, 58, 180, 0.7833508403361344) 100%
  );
  div {
    animation: btnAnimation 1s cubic-bezier(0.075, 0.82, 0.165, 1) infinite
      alternate;
  }

  &:hover p {
    color: black;
  }
`;

export const SmallView = styled.div`
  background: rgb(46, 80, 255);
  background: linear-gradient(
    319deg,
    rgba(46, 80, 255, 0.7497373949579832) 0%,
    rgba(131, 58, 180, 0.7833508403361344) 100%
  );
  padding: 0.05rem 1rem;
  margin-right: 5px;
  border-radius: 20px;
  display: flex;
`;

export const ChainBtn = styled.div`
  background-color: white;
  padding: 1rem 2rem;
  display: flex;
  min-width: 20vw;
`;

export const ShadowBox = styled.div`
  display: flex;
  background-color: white;
  width: 80vw;
  border-radius: 30px;
  margin-top: 30px;
  box-shadow: 14px 13px 77px -20px rgba(0, 0, 0, 0.98);
`;

export const TokenBtn = styled(RowFlexBox)`
  border: 1px solid black;
  padding: 2px;
  justify-content: center;
  border-radius: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
  &:hover {
    background-color: #0000d040;
  }
`;
