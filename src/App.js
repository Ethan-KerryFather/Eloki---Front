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
  Words,
  Chunk,
} from "./customComponent/customComponent";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { asset, leashAsset, shitAsset } from "./asset/asset";
import detectEthereumProvider from "@metamask/detect-provider";
import ConnnectMetamask from "./customComponent/ConnectMetamask";
import { useAtom } from "jotai";
import { Header } from "./customComponent/Header";
import FooterTokenomics from "./customComponent/FooterTokenomics";
export const web3 = new Web3(
  new Web3.providers.HttpProvider("https://mainnet-rpc.thundercore.io")
);

export const eleashWeb3 = new Web3(
  new Web3.providers.HttpProvider("https://mainnet-rpc.thundercore.io")
);

export const headMenu = ["Eloki", "Loan", "Swap", "Stake", "Pool", "RoadMap"];

function App() {
  const navigate = useNavigate();
  const [totalValueLocked, setTotalValuelocked] = useState(0);
  const [tokenBalance, setTokenBalance] = useState("");
  const [leashBalance, setLeashBalance] = useState("");
  const [metamaskAccount, setMetamaskAccount] = useState();

  const getBalance = async () => {
    const TokenContract = new web3.eth.Contract(asset.abi, asset.CA);
    const LeashContract = new web3.eth.Contract(leashAsset.abi, leashAsset.CA);

    TokenContract.methods
      .totalSupply()
      .call()
      .then((result) => web3.utils.fromWei(result, "ether"))
      .then((result) => setTokenBalance(result.toLocaleString()));

    LeashContract.methods
      .totalSupply()
      .call()
      .then((result) => web3.utils.fromWei(result, "ether"))
      .then((result) => setLeashBalance(result.toLocaleString()));
  };

  const requestMetamask = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      console.log(account);
    } catch (error) {
      console.error("User rejected the connection request");
    }
  };

  useEffect(() => {
    getBalance();
    if (window.ethereum) {
      try {
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            const account = accounts[0];
            console.log(account);
            setMetamaskAccount(account);
          });
      } catch (error) {
        console.error("User rejected the connection request");
      }

      window.ethereum.on("accountsChanged", function (accounts) {
        console.log(accounts[0]);
        setMetamaskAccount(accounts[0]);
      });
    } else {
      console.log("Please install MetaMask!");
    }
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
      <ConnnectMetamask account={metamaskAccount} />
      <GlobalStyle />
      <Header />

      {/*Slide 1 */}
      <UContainer
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          paddingLeft: "2%",
          paddingTop: "5%",
          width: "100%",
        }}
      >
        <img
          src={require("./img/spline2.png")}
          alt="spline2"
          style={{
            position: "absolute",
            zIndex: -1,
            width: "80%",
            right: "30%",
            animation:
              "rotateAnimation 2s cubic-bezier(.6,1.24,.67,.68) infinite alternate-reverse",
          }}
        />

        {/* 첫화면의 모든 글자들 */}
        <Chunk
          style={{
            display: "flex",
            flexFlow: "column nowrap",
          }}
        >
          {/*글자 올라가는 애니메이션 */}
          <Chunk style={{ display: "flex", alignItems: "center" }}>
            <Words bold white style={{ fontSize: "5rem", display: "inline" }}>
              with &nbsp;
            </Words>
            <div style={{ height: "6rem", overflow: "hidden" }}>
              <div
                style={{
                  animation:
                    "wordAnimation 12s cubic-bezier(.48,1.82,.97,.43) infinite ",
                }}
              >
                <Words
                  white
                  bold
                  style={{
                    fontSize: "5rem",
                    color: "aqua",
                    fontFamily: "shadow-into",
                  }}
                >
                  Eloki Loan
                </Words>
                <Words
                  white
                  bold
                  style={{
                    fontSize: "5rem",
                    color: "aqua",
                    fontFamily: "shadow-into",
                  }}
                >
                  Eloki Swap
                </Words>
                <Word
                  white
                  bold
                  style={{
                    fontSize: "5rem",
                    color: "aqua",
                    fontFamily: "shadow-into",
                  }}
                >
                  Eloki Staking
                </Word>
                <Word
                  white
                  bold
                  style={{
                    fontSize: "5rem",
                    color: "aqua",
                    fontFamily: "shadow-into",
                  }}
                >
                  Eloki Liquidity pool
                </Word>
                <Word
                  white
                  bold
                  style={{
                    fontSize: "5rem",
                    color: "aqua",
                    fontFamily: "shadow-into",
                  }}
                >
                  Eloki Gamble
                </Word>
              </div>
            </div>
          </Chunk>

          <Word bold white style={{ fontSize: "5rem" }}>
            and get some Fun
          </Word>

          <RowFlexBox style={{ gap: "3%" }}>
            <Button colorScheme="blue" variant="solid" md="true">
              Learn More
            </Button>
            <Button colorScheme="green" variant="solid" md="true">
              Launch App
            </Button>
          </RowFlexBox>
          <Word
            white
            bold
            style={{
              fontSize: "2rem",
              marginTop: "10px",
              fontFamily: "shadow-into",
            }}
          >
            Total Value Locked : ${totalValueLocked.toLocaleString()}
          </Word>

          {/* total Elki, Total Elki's leash */}
          <RowFlexBox style={{ alignItems: "center" }}>
            <span
              style={{
                fontSize: "2rem",
                fontFamily: "shadow-into",
                color: "white",
              }}
              bold
            >
              Total $ELKI :
            </span>
            <Image src={require("./asset/Eloki.png")} style={{ width: "9%" }} />
            <span style={{ fontSize: "3rem" }}>X</span>
            <span
              white
              style={{
                fontSize: "2rem",
                fontFamily: "shadow-into",
                marginLeft: "10px",
              }}
              bold
            >
              {tokenBalance.toLocaleString()} From ThunderCore(TT)
            </span>
          </RowFlexBox>
          <RowFlexBox style={{ alignItems: "center" }}>
            <span
              style={{
                fontSize: "2rem",
                fontFamily: "shadow-into",
                color: "white",
              }}
              bold
            >
              Total Eloki's $LEASH :
            </span>
            <Image src={require("./asset/leash.png")} style={{ width: "9%" }} />
            <span style={{ fontSize: "3rem" }}>X</span>
            <span
              white
              style={{
                fontSize: "2rem",
                fontFamily: "shadow-into",
                marginLeft: "10px",
              }}
              bold
            >
              {leashBalance.toLocaleString()} For loan
            </span>
          </RowFlexBox>
          {/* airdrop btn */}
          <SmallView
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "2%",
              borderRadius: "137px 10px 137px 10px",
              border: " 1px double #000000",
            }}
          >
            <Word
              bold
              white
              style={{ fontSize: "4rem", fontFamily: "shadow-into" }}
            >
              Airdrop Here
            </Word>
          </SmallView>
        </Chunk>
        <RowFlexBox
          style={{
            alignSelf: "center",
            alignItems: "center",
            marginTop: "5%",
            marginBottom: "15%",
          }}
        >
          <CheckIcon boxSize="50px" color={"blackAlpha.500"} />
          <Words bold style={{ color: "#00000040" }}>
            &nbsp;Want to know more?
          </Words>
        </RowFlexBox>
      </UContainer>

      {/*Slide 2 */}
      <UContainer style={{ minHeight: "100vh" }}>
        {/*part1*/}
        <ColumnFlexBox style={{ alignItems: "center" }}>
          <ColumnFlexBox
            style={{ alignItems: "flex-start", marginBottom: "5%" }}
          >
            <Words
              white
              bold
              style={{ fontSize: "3rem", marginBottom: "2rem" }}
            >
              How it works
            </Words>
            <Words
              white
              style={{ fontSize: "2rem", fontFamily: "shadow-into" }}
            >
              The invincible node as a contributor of ecosystem’s
              sustainability,
            </Words>
            <Words
              white
              style={{ fontSize: "1.5rem", fontFamily: "shadow-into" }}
            >
              it’s aiming to enable users to earn maximized profits without
              risk.
            </Words>
          </ColumnFlexBox>
          <RowFlexBox style={{ alignItems: "center" }}>
            <SmallView>
              <Words white bold style={{ fontSize: "2rem" }}>
                1
              </Words>
            </SmallView>
            <Words
              white
              bold
              letterspace
              style={{
                fontSize: "2rem",
                margin: "4rem 0rem",
              }}
            >
              Stake asset & Receive Transferrable NFT
            </Words>
          </RowFlexBox>
          <Image
            src={require("./img/howitworks1.png")}
            alt="howitworks"
            style={{ width: "80%" }}
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
        {/*part2*/}
        <ColumnFlexBox
          style={{ alignItems: "center", marginTop: "15%", minHeight: "100vh" }}
        >
          <RowFlexBox style={{ alignItems: "center" }}>
            <SmallView>
              <Word white bold style={{ fontSize: "2rem" }}>
                2
              </Word>
            </SmallView>
            <Words
              white
              bold
              letterspace
              style={{
                fontSize: "2rem",
                margin: "4rem 0rem",
              }}
            >
              Get perks by Borrowing & Staking INVI
            </Words>
          </RowFlexBox>
          <Image
            src={require("./img/howitworks2.png")}
            alt="howitworks"
            style={{ width: "80%", marginTop: "1%" }}
            data-aos="fade-up"
          />
          <CustomBtn style={{ marginTop: "8%" }}>
            <Word white bold style={{ fontSize: "2rem" }}>
              Loan
            </Word>
            <div>
              <ArrowForwardIcon color="white" boxSize={10} />
            </div>
          </CustomBtn>
        </ColumnFlexBox>
      </UContainer>

      {/*Slide 3 */}
      <UContainer
        style={{
          alignItems: "center",
          width: "100%",
        }}
      >
        <RowFlexBox style={{ width: "95%", alignSelf: "center" }}>
          {/*왼쪽 글자 */}
          <ColumnFlexBox style={{ alignItems: "flex-start", width: "40%" }}>
            <Word white bold style={{ fontSize: "2rem" }}>
              Participate as LP
            </Word>
            <Word
              white
              style={{ fontSize: "1.3rem", fontFamily: "shadow-into" }}
            >
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
            style={{ width: "60%" }}
            data-aos="fade-up"
          />
        </RowFlexBox>
      </UContainer>

      {/*Slide 4 */}
      <UContainer style={{ minHeight: "100vh" }}>
        <ColumnFlexBox style={{ alignItems: "center" }}>
          <Words
            white
            bold
            letterspace
            style={{ fontSize: "4rem", fontFamily: "shadow-into" }}
          >
            <span style={{ color: "#870e28", fontSize: "5rem" }}>$ELOKI</span>s
            are on ThunderCore
          </Words>
          <Image
            src="https://www.thundercore.com/3DLogo.png"
            style={{
              maxWidth: "20%",
              margin: "5% 0px 0px 0px",
              animation:
                "rotateAnimation 2s cubic-bezier(.6,1.24,.67,.68) infinite alternate-reverse",
            }}
            data-aos="fade-up"
          />
        </ColumnFlexBox>
      </UContainer>
      <FooterTokenomics />
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
