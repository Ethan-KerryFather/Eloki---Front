import {
  GlobalStyle,
  EContainer,
  UContainer,
  Word,
  RowFlexBox,
  ColumnFlexBox,
  Words,
  Chunk,
} from "./customComponent/customComponent";
import Aos from "aos";
import "aos/dist/aos.css";
import { Header } from "./customComponent/Header";
import FooterTokenomics from "./customComponent/FooterTokenomics";
import { Image } from "@chakra-ui/react";
import { useEffect } from "react";
import FooterCorporate from "./customComponent/FooterCorporate";

export const headMenu = ["Investment", "Staking QVE"];

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <EContainer>
      <GlobalStyle />
      <Header isLanding={true} />

      {/*Slide 1 */}
      <UContainer
        style={{
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: "2%",
          width: "100%",
        }}
      >
        <Image
          src={require("./img/QVE2.png")}
          alt="QVE"
          style={{
            position: "absolute",
            zIndex: 10,
            width: "50%",
            right: "20%",
            top: 0,
            opacity: 1,
            animation:
              "rotateAnimation 4s cubic-bezier(.6,1.24,.67,.68) infinite alternate-reverse",
          }}
        />
        <Image
          src={require("./img/QVE.png")}
          alt="QVE"
          style={{
            position: "absolute",
            zIndex: 10,
            width: "70%",
            right: "0",
            top: "0",
            opacity: 1,
            animation:
              "rotateAnimation 2s cubic-bezier(.6,1.24,.67,.68) infinite alternate-reverse",
          }}
        />

        {/* 첫화면의 모든 글자들 */}
        <Chunk
          data-aos="fadeUp"
          style={{
            display: "flex",
            flexFlow: "column nowrap",
            zIndex: "2",
          }}
        >
          <Words gray style={{ fontSize: "1.7rem" }}>
            Decentralized Investing Fund Liquidation Platform
          </Words>
          <Words bold style={{ fontSize: "5rem", display: "inline" }}>
            For Asset Manager
          </Words>
          <Word bold style={{ fontSize: "5rem" }}>
            For Personal Traders
          </Word>
        </Chunk>
      </UContainer>

      <FooterTokenomics data-aos="fade-up" />

      <FooterCorporate />
    </EContainer>
  );
}

export default App;
