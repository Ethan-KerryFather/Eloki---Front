import { styled, createGlobalStyle } from "styled-components";
import "./App.scss";
import Logo from "./img/logo.svg";
import PretendardVariable from "./font/PretendardVariable.ttf";
import { Button, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ArrowForwardIcon, CheckIcon } from "@chakra-ui/icons";
import Web3 from "web3";
import {
  GlobalStyle,
  EContainer,
  UContainer,
  Word,
  Menu,
  RowFlexBox,
  ColumnFlexBox,
  CustomBtn,
  SmallView,
  ChainBtn,
  Chunk,
} from "./customComponent/customComponent";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { asset } from "./asset/asset";

export const web3 = new Web3(
  new Web3.providers.HttpProvider("https://mainnet-rpc.thundercore.io")
);

export const headMenu = ["Eloki", "Loan", "Swap", "Stake", "Pool", "RoadMap"];

function App() {
  const [totalValueLocked, setTotalValuelocked] = useState(0);
  const [tokenBalance, setTokenBalance] = useState("");
  const navigate = useNavigate();

  const getBalance = async () => {
    const TokenContract = new web3.eth.Contract(asset.abi, asset.CA);

    TokenContract.methods
      .totalSupply()
      .call()
      .then((result) => web3.utils.fromWei(result, "ether"))
      .then((result) => setTokenBalance(result.toLocaleString()));
  };

  useEffect(() => {
    getBalance();
  }, []);

  useEffect(() => {
    Aos.init();

    let start = totalValueLocked;
    const countUp = setInterval(() => {
      if (start < 100000) {
        start += 800;
        setTotalValuelocked(start);
      } else {
        setTotalValuelocked(100000);
        clearInterval(countUp);
      }
    }, 1);

    return () => {
      clearInterval(countUp);
    };
  }, [totalValueLocked]);

  return (
    <EContainer>
      <GlobalStyle />
      <Menu>
        {/* <img src={Logo} alt="logo" /> */}
        <img
          src={require("./asset/Eloki.png")}
          alt="logo"
          style={{ width: "50px", marginRight: "5px" }}
        />
        <Word
          bold
          white
          style={{
            paddingRight: "10px",
            color: "white",
            fontSize: "1.8rem",
            letterSpacing: "0.2rem",
          }}
        >
          Eloki
        </Word>
        {headMenu.map((element, index) => (
          <Word
            key={index}
            hover
            style={{
              fontSize: "0.9rem",
              paddingLeft: "1.5rem",
              color: "#f6f7fccc",
            }}
            onClick={() => {
              switch (element) {
                case "Eloki":
                  navigate("/ilp");
                  break;
                case "Loan":
                  navigate("/loan");
                  break;
                case "Swap":
                  navigate("/swap");
                  break;
                case "Stake":
                  navigate("/stake");
                  break;
                case "pool":
                  navigate("/pool");
                  break;
                default:
                  break;
              }
            }}
          >
            {element}
          </Word>
        ))}
        <div
          style={{
            borderRadius: "0px 0px 10px 10px",
            border: "1px solid black",
            padding: "1rem",
            backgroundColor: "#10f5cc",
            transform: "translateY(-15px)",
            marginLeft: "20vw",
            boxShadow: "5px 5px 22px 3px rgba(0,0,0,0.57)",
          }}
        >
          <Word bold style={{ color: "black", fontSize: "1rem" }}>
            Launch App
          </Word>
        </div>
      </Menu>
      <img
        src={require("./img/spline2.png")}
        alt="spline2"
        style={{
          position: "absolute",
          zIndex: -1,
          width: "2000px",
          right: "0vw",
          animation:
            "rotateAnimation 2s cubic-bezier(.6,1.24,.67,.68) infinite alternate-reverse",
        }}
      />
      <UContainer
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          paddingLeft: "30px",
          paddingTop: "10%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "column nowrap",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Word bold white style={{ fontSize: "5rem", display: "inline" }}>
              with &nbsp;
            </Word>
            <div style={{ height: "5.3rem", overflow: "hidden" }}>
              <div
                style={{
                  animation:
                    "wordAnimation 12s cubic-bezier(.48,1.82,.97,.43) infinite ",
                }}
              >
                <Word
                  white
                  bold
                  style={{ fontSize: "5rem", color: "aqua" }}
                ></Word>
                <Word white bold style={{ fontSize: "5rem", color: "aqua" }}>
                  Eloki Loan
                </Word>
                <Word white bold style={{ fontSize: "5rem", color: "aqua" }}>
                  Eloki Swap
                </Word>
                <Word white bold style={{ fontSize: "5rem", color: "aqua" }}>
                  Eloki Staking
                </Word>
                <Word white bold style={{ fontSize: "5rem", color: "aqua" }}>
                  Eloki Liquidity pool
                </Word>
                <Word white bold style={{ fontSize: "5rem", color: "aqua" }}>
                  Eloki Gamble
                </Word>
              </div>
            </div>
          </div>

          <Word bold white style={{ fontSize: "5rem" }}>
            Secure your future
          </Word>

          <RowFlexBox style={{ gap: "10px" }}>
            <Button colorScheme="blue" variant="solid" md="true">
              Learn More
            </Button>
            <Button colorScheme="green" variant="solid" md="true">
              Launch App
            </Button>
          </RowFlexBox>
          <Word white bold style={{ fontSize: "2rem", marginTop: "10px" }}>
            Total Value Locked : ${totalValueLocked.toLocaleString()}
          </Word>
          <RowFlexBox style={{ alignItems: "center" }}>
            <span
              style={{
                fontSize: "2rem",
                fontFamily: "pre-bold",
                color: "white",
              }}
              bold
            >
              Total ELKI :
            </span>
            <Image
              src={require("./asset/Eloki.png")}
              style={{ width: "100px" }}
            />
            <span style={{ fontSize: "4rem" }}>X</span>
            <span
              white
              style={{
                fontSize: "2rem",
                fontFamily: "pre-bold",
                marginLeft: "10px",
              }}
              bold
            >
              {tokenBalance.toLocaleString()}
            </span>
          </RowFlexBox>
          <SmallView
            style={{
              justifyContent: "center",
              height: "6rem",
              alignItems: "center",
              marginTop: "10px",
              borderRadius: "137px 10px 137px 10px",
              border: " 1px double #000000",
            }}
          >
            <Word bold white style={{ fontSize: "4rem" }}>
              Airdrop Here
            </Word>
          </SmallView>
        </div>
        <RowFlexBox
          style={{
            position: "absolute",
            animation: "upanddown 3s linear infinite alternate",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CheckIcon boxSize={10} color={"blackAlpha.500"} />
          <Word bold style={{ fontSize: "3rem", color: "#f6f7fc40" }}>
            &nbsp;More?
          </Word>
        </RowFlexBox>
      </UContainer>
      <UContainer>
        <ColumnFlexBox style={{ alignItems: "center" }}>
          <ColumnFlexBox
            style={{ alignItems: "flex-start", marginBottom: "5%" }}
          >
            <Word white bold style={{ fontSize: "3rem", marginBottom: "2rem" }}>
              How it works
            </Word>
            <Word white style={{ fontSize: "1.5rem" }}>
              The invincible node as a contributor of ecosystem’s
              sustainability,
            </Word>
            <Word white style={{ fontSize: "1.5rem" }}>
              it’s aiming to enable users to earn maximized profits without
              risk.
            </Word>
          </ColumnFlexBox>
          <RowFlexBox style={{ alignItems: "center" }}>
            <SmallView>
              <Word white bold style={{ fontSize: "2rem" }}>
                1
              </Word>
            </SmallView>
            <Word
              white
              bold
              style={{
                fontSize: "2rem",
                margin: "4rem 0rem",
                letterSpacing: "1px",
              }}
            >
              Stake asset & Receive Transferrable NFT
            </Word>
          </RowFlexBox>
          <Image
            src={require("./img/howitworks1.png")}
            alt="howitworks"
            style={{ width: "80vw" }}
            data-aos="fade-up"
          />
          <CustomBtn>
            <Word white bold style={{ fontSize: "2rem" }}>
              Stake
            </Word>
            <div>
              <ArrowForwardIcon color="white" boxSize={10} />
            </div>
          </CustomBtn>
        </ColumnFlexBox>
        <ColumnFlexBox style={{ alignItems: "center", marginTop: "15%" }}>
          <RowFlexBox style={{ alignItems: "center" }}>
            <SmallView>
              <Word white bold style={{ fontSize: "2rem" }}>
                2
              </Word>
            </SmallView>
            <Word
              white
              bold
              style={{
                fontSize: "2rem",
                margin: "4rem 0rem",
                letterSpacing: "1px",
              }}
            >
              Get perks by Borrowing & Staking INVI
            </Word>
          </RowFlexBox>
          <Image
            src={require("./img/howitworks2.png")}
            alt="howitworks"
            style={{ width: "80vw" }}
            data-aos="fade-up"
          />
          <CustomBtn>
            <Word white bold style={{ fontSize: "2rem" }}>
              Loan
            </Word>
            <div>
              <ArrowForwardIcon color="white" boxSize={10} />
            </div>
          </CustomBtn>
        </ColumnFlexBox>
      </UContainer>
      <UContainer
        style={{
          alignItems: "center",
          marginTop: "20vh",
          marginLeft: "5vw",
          marginRight: "5vw",
        }}
      >
        <RowFlexBox>
          <ColumnFlexBox style={{ alignItems: "flex-start" }}>
            <Word white bold style={{ fontSize: "2rem" }}>
              Participate as LP
            </Word>
            <Word white style={{ fontSize: "1.5rem" }}>
              The invincible node is highly
              <br />
              incentivizing people to participate
              <br />
              in providing liquidity activity. Get ILP by supplying liquidity to
              the pool,
              <br />
              earn perks as the network's native token.
            </Word>
            <Word white bold style={{ fontSize: "2rem", marginTop: "2rem" }}>
              Enable users to utilize the Invincible!
            </Word>
            <CustomBtn>
              <Word white bold style={{ fontSize: "2rem" }}>
                Buy & Earn
              </Word>
              <div>
                <ArrowForwardIcon color="white" boxSize={10} />
              </div>
            </CustomBtn>
          </ColumnFlexBox>
          <Image
            src={require("./img/howitworks3.png")}
            alt="howitworks"
            style={{ width: "60vw" }}
            data-aos="fade-up"
          />
        </RowFlexBox>
      </UContainer>
      <UContainer>
        <ColumnFlexBox style={{ alignItems: "center" }}>
          <Word white bold style={{ fontSize: "4rem" }}>
            <span style={{ color: "#870e28", fontSize: "5rem" }}>$ELOKI</span>s
            are on ThunderCore
          </Word>
          <Image
            src="https://www.thundercore.com/3DLogo.png"
            style={{
              maxWidth: "30vw",
              margin: "8vh 0px 0px 0px",
              animation:
                "rotateAnimation 2s cubic-bezier(.6,1.24,.67,.68) infinite alternate-reverse",
            }}
            data-aos="fade-up"
          />
        </ColumnFlexBox>
      </UContainer>
      <ColumnFlexBox
        style={{
          width: "100vw",
          height: "19vh",
          backgroundColor: "white",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RowFlexBox style={{ alignItems: "center", justifyContent: "center" }}>
          <Image src={require("./asset/Eloki.png")} style={{ height: "40%" }} />
          <ColumnFlexBox>
            <Word bold style={{ color: "#030063", fontSize: "2rem" }}>
              $Eloki Tokenomics
            </Word>
            <Word style={{ color: "#030063", fontSize: "1.5rem" }}>
              If you want to know more about $Eloki, come and check this
            </Word>
          </ColumnFlexBox>

          <SmallView
            style={{
              marginLeft: "10vw",
              height: "30%",
              alignItems: "center",
            }}
          >
            <Word bold white style={{ fontSize: "2rem" }}>
              Tokenomics
            </Word>
          </SmallView>
        </RowFlexBox>
      </ColumnFlexBox>
      <ColumnFlexBox
        style={{
          width: "100vw",
          height: "19vh",
          backgroundColor: "#000000ee",
          overflow: "hidden",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RowFlexBox>
          <ColumnFlexBox>
            <Word white style={{ fontSize: "1rem" }}>
              Terms and Conditions
            </Word>
            <Word white style={{ fontSize: "1rem" }}>
              Terms and Conditions
            </Word>
            <Word white style={{ fontSize: "1rem" }}>
              Terms and Conditions
            </Word>
            <Word white style={{ fontSize: "1rem" }}>
              Terms and Conditions
            </Word>
          </ColumnFlexBox>
          <RowFlexBox></RowFlexBox>
        </RowFlexBox>
      </ColumnFlexBox>
    </EContainer>
  );
}

export default App;
