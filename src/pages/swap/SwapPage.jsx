import React, { useEffect, useState } from "react";
import {
  Box,
  ColumnFlexBox,
  EContainer,
  RowFlexBox,
  UContainer,
  Word,
} from "../../customComponent/customComponent";
import { Header } from "../../customComponent/Header";
import FooterTokenomics from "../../customComponent/FooterTokenomics";
import ConnnectMetamask from "../../customComponent/ConnectMetamask";
import { styled } from "styled-components";
import { Button, Checkbox, Highlight, Image, Input } from "@chakra-ui/react";
import LiquidityElement from "./LiquidityElement";
import SwapElement from "./SwapElement";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Dropdown from "../../customComponent/Dropdown";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

function SwapPage() {
  const [data, setData] = useState([
    { uv: 0, pv: 2400, amt: 2400 },
    { uv: 1, pv: 2400, amt: 2400 },
    { uv: 2, pv: 2400, amt: 2400 },
    { uv: 5, pv: 2400, amt: 2400 },
    { uv: 3, pv: 2400, amt: 2400 },
    { uv: 10, pv: 2400, amt: 2400 },
    { uv: 13, pv: 2400, amt: 2400 },
    { uv: 12, pv: 2400, amt: 2400 },
    { uv: 14, pv: 2400, amt: 2400 },
    { uv: 12, pv: 2400, amt: 2400 },
    { uv: 11, pv: 2400, amt: 2400 },
    { uv: 15, pv: 2400, amt: 2400 },
    { uv: 16, pv: 2400, amt: 2400 },
    { uv: 16, pv: 2400, amt: 2400 },
    { uv: 17, pv: 2400, amt: 2400 },
  ]);
  const [investChartPeriod, setInvestChartPeriod] = useState("1D");
  const [dropdownVisibility, setDropdownVisibility] = useState(false);

  //useEffect(() => {
  //   const interval = setInterval(() => {
  //     setData((prevData) => {
  //       const newData = [...prevData];
  //       newData.shift();
  //       newData.push({
  //         uv: Math.floor(Math.random() * 10) + 30, // 이 부분을 적절하게 변경해야 합니다.
  //         pv: 2400,
  //         amt: 2400,
  //       });

  //       return newData;
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌을 정리합니다.
  // }, []);
  return (
    <EContainer>
      <Header />
      <ConnnectMetamask />
      <UContainer style={{ minHeight: "100vh", marginBottom: "10vh" }}>
        <ColumnFlexBox
          style={{
            alignItems: "center",
            margin: "8vh 10vw 0vh 10vw",
          }}
        >
          <Word bold style={{ fontSize: "2.3rem" }}>
            Investment
          </Word>
          <Word style={{ fontSize: "1.3rem" }}>Select Strategy & Invest</Word>
        </ColumnFlexBox>
        <RowFlexBox
          style={{
            marginTop: "3%",
            width: "90vw",
            alignSelf: "center",
            gap: "3%",
          }}
        >
          <Box
            shadow
            style={{
              width: "60%",
              backgroundColor: "white",
              padding: "2%",
              minHeight: "60vh",
              borderRadius: "30px",
            }}
          >
            <RowFlexBox style={{ position: "relative" }}>
              <Button
                colorScheme={investChartPeriod === "1D" ? "blue" : "gray"}
                onClick={() => {
                  setInvestChartPeriod("1D");
                }}
              >
                1D
              </Button>
              <Button
                style={{ marginLeft: "1%" }}
                colorScheme={investChartPeriod === "1W" ? "blue" : "gray"}
                onClick={() => {
                  setInvestChartPeriod("1W");
                }}
              >
                1W
              </Button>
              <Button
                style={{ marginLeft: "1%" }}
                colorScheme={investChartPeriod === "1Y" ? "blue" : "gray"}
                onClick={() => {
                  setInvestChartPeriod("1Y");
                }}
              >
                1Y
              </Button>
              <Button
                style={{ marginLeft: "1%" }}
                colorScheme={investChartPeriod === "ALL" ? "blue" : "gray"}
                onClick={() => {
                  setInvestChartPeriod("ALL");
                }}
              >
                ALL
              </Button>
              <ColumnFlexBox
                style={{
                  marginLeft: "auto",
                  marginRight: "30px",
                  zIndex: "10",
                  position: "absolute",
                  right: 10,
                }}
              >
                <Button
                  colorScheme="blue"
                  onClick={(e) => setDropdownVisibility(!dropdownVisibility)}
                >
                  {dropdownVisibility ? "Close" : "Open"}
                  Total Strategy
                  {dropdownVisibility ? (
                    <ChevronUpIcon boxSize={8} />
                  ) : (
                    <ChevronDownIcon boxSize={8} />
                  )}
                </Button>
                <Dropdown visibility={dropdownVisibility}>
                  <ul
                    style={{
                      backgroundColor: "black",
                      textAlign: "center",
                      borderRadius: "10px",
                      marginTop: "2px",
                    }}
                  >
                    <li
                      style={{ color: "white", padding: "10px 0px 10px 0px" }}
                    >
                      Arbitrage - Kimchi
                    </li>
                    <li
                      style={{
                        color: "white",
                        backgroundColor: "gray",
                        padding: "10px 0px 10px 0px",
                      }}
                    >
                      Arbitrage - Future Spread
                    </li>
                    <li
                      style={{ color: "white", padding: "10px 0px 10px 0px" }}
                    >
                      Soar & Plunge
                    </li>
                  </ul>
                </Dropdown>
              </ColumnFlexBox>
            </RowFlexBox>
            <RowFlexBox
              style={{
                flexWrap: "nowrap",
                width: "100%",
                marginTop: "1.3%",
                marginBottom: "1.3%",
                marginLeft: "3%",
              }}
            >
              <ColumnFlexBox
                style={{ marginRight: "4%", alignItems: "flex-end" }}
              >
                <RowFlexBox
                  style={{
                    alignItems: "center",
                    flexWrap: "nowrap",
                  }}
                >
                  <div
                    style={{
                      borderRadius: "40px",
                      width: "12px",
                      height: "12px",
                      backgroundColor: "gray",
                    }}
                  />
                  <Word bold style={{ fontSize: "1.3rem", marginLeft: "10px" }}>
                    Account Value
                  </Word>
                </RowFlexBox>

                <Word bold style={{ fontSize: "1rem" }}>
                  $ 14,243.56
                </Word>
              </ColumnFlexBox>
              <ColumnFlexBox style={{ alignItems: "flex-end" }}>
                <RowFlexBox style={{ alignItems: "center" }}>
                  <div
                    style={{
                      borderRadius: "40px",
                      width: "12px",
                      height: "12px",
                      backgroundColor: "#3D5AF1",
                    }}
                  />
                  <Word bold style={{ fontSize: "1.3rem", marginLeft: "10px" }}>
                    Not Deposit
                  </Word>
                </RowFlexBox>

                <Word bold style={{ fontSize: "1rem" }}>
                  $ 14,243.56
                </Word>
              </ColumnFlexBox>
            </RowFlexBox>

            <ResponsiveContainer width="100%">
              <AreaChart
                data={data}
                margin={{
                  top: 10,
                  right: 10,
                  left: -25,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#8884d8"
                  fill="#8884d8"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
          <Strategies />
        </RowFlexBox>
      </UContainer>
      <FooterTokenomics />
    </EContainer>
  );
}

function Strategies() {
  const [inputVisibility, setInputVisibility] = useState(false);
  const [inputAmount, setInputAmount] = useState();
  return (
    <Box
      shadow
      style={{
        width: "37%",
        backgroundColor: "white",
        padding: "2%",
        minHeight: "60vh",
        borderRadius: "30px",
      }}
    >
      <RowFlexBox style={{ position: "relative" }}>
        <Word bold style={{ fontSize: "1.3rem" }}>
          Select Strategy
        </Word>
        <RowFlexBox
          style={{
            position: "absolute",
            right: "0",
            backgroundColor: "black",
            padding: "2px",
            borderRadius: "10px",
          }}
        >
          <RowFlexBox
            style={{ backgroundColor: "white", borderRadius: "10px" }}
          >
            <Word
              style={{
                fontSize: "1.1rem",
                padding: "3px 10px 3px 10px",
              }}
            >
              Mint
            </Word>
          </RowFlexBox>
          <RowFlexBox>
            <Word
              white
              style={{
                fontSize: "1.1rem",
                padding: "3px 10px 3px 10px",
              }}
            >
              Burn
            </Word>
          </RowFlexBox>
        </RowFlexBox>
      </RowFlexBox>
      <ColumnFlexBox style={{ marginTop: "5%" }}>
        <Box
          shadow
          row
          style={{
            padding: "4% 1% 4% 3%",
            marginBottom: "4%",
            marginTop: "4%",
            boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05)",
          }}
        >
          <RowFlexBox
            style={{ justifyContent: "space-between", width: "100%" }}
          >
            <Word style={{ fontSize: "1rem" }}>Arbitrage - Future Spread</Word>
            <RowFlexBox style={{ alignItems: "center" }}>
              <Word style={{ fontSize: "0.7rem", marginRight: "" }}>
                APY : 0.00%
              </Word>
              <Checkbox colorScheme="green" style={{ marginLeft: "10px" }} />
            </RowFlexBox>
          </RowFlexBox>
        </Box>

        <Box
          shadow
          row
          style={{
            padding: "4% 1% 4% 3%",
            marginBottom: "4%",
            boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05)",
          }}
        >
          <RowFlexBox
            style={{ justifyContent: "space-between", width: "100%" }}
          >
            <Word style={{ fontSize: "1rem" }}>Arbitrage - Kimchi Premium</Word>
            <RowFlexBox style={{ alignItems: "center" }}>
              <Word style={{ fontSize: "0.7rem" }}>APY : 0.00%</Word>
              <Checkbox colorScheme="green" style={{ marginLeft: "10px" }} />
            </RowFlexBox>
          </RowFlexBox>
        </Box>
        <Box
          shadow
          row
          style={{
            padding: "4% 1% 4% 3%",
            marginBottom: "%",
            //border: "0.1px gray solid",
            boxShadow: "0px 2px 20px 0px rgba(0, 0, 0, 0.05)",
          }}
        >
          <RowFlexBox
            style={{ justifyContent: "space-between", width: "100%" }}
          >
            <Word style={{ fontSize: "1rem" }}>Soar & Plunge</Word>
            <RowFlexBox style={{ alignItems: "center" }}>
              <Word style={{ fontSize: "0.7rem" }}>APY : 0.00%</Word>
              <Checkbox colorScheme="green" style={{ marginLeft: "10px" }} />
            </RowFlexBox>
          </RowFlexBox>
        </Box>
      </ColumnFlexBox>
      <Box style={{ marginTop: "3%" }}>
        <Word bold style={{ fontSize: "1.3rem" }}>
          Deposit
        </Word>
        <Box
          row
          style={{
            marginTop: "3%",
            backgroundColor: "#F8F8F8",
            padding: "5% 2% 3% 2%",
            borderRadius: "10px",
          }}
        >
          <ColumnFlexBox style={{ position: "relative" }}>
            <RowFlexBox style={{ alignItems: "center" }}>
              <div
                style={{
                  borderRadius: "40px",
                  width: "15px",
                  height: "15px",
                  backgroundColor: "#D9D9D9",
                  marginRight: "2px",
                }}
              />
              <Word style={{ fontSize: "1.4rem" }}>APX</Word>
              <ChevronDownIcon
                boxSize={8}
                onClick={() => {
                  setInputVisibility(!inputVisibility);
                }}
              />
            </RowFlexBox>
            <ColumnFlexBox style={{ position: "absolute", top: 40 }}>
              <Dropdown visibility={inputVisibility}>
                <ul
                  style={{
                    backgroundColor: "black",
                    textAlign: "center",
                    borderRadius: "10px",
                    marginTop: "2px",
                  }}
                >
                  <li style={{ color: "white", padding: "10px 0px 10px 0px" }}>
                    Arbitrage - Kimchi
                  </li>
                  <li
                    style={{
                      color: "white",
                      backgroundColor: "gray",
                      padding: "10px 0px 10px 0px",
                    }}
                  >
                    Arbitrage - Future Spread
                  </li>
                  <li style={{ color: "white", padding: "10px 0px 10px 0px" }}>
                    Soar & Plunge
                  </li>
                </ul>
              </Dropdown>
            </ColumnFlexBox>
          </ColumnFlexBox>

          <ColumnFlexBox style={{ flex: 1 }}>
            <Input
              placeholder="0.00"
              style={{ textAlign: "center" }}
              value={inputAmount}
              onChange={(e) => {
                setInputAmount(e.target.value);
              }}
            />
            <Word
              style={{ fontSize: "0.7rem", color: "gray", textAlign: "center" }}
            >
              $ {inputAmount * 10}
            </Word>
          </ColumnFlexBox>

          <RowFlexBox
            style={{
              background: "black",
              borderRadius: "10px",
              alignItems: "center",
              padding: "0px 5px 0px 5px",
              marginLeft: "5px",
              height: "50%",
              marginTop: "10px",
            }}
          >
            <Word white style={{ fontSize: "1rem" }}>
              Max
            </Word>
          </RowFlexBox>
        </Box>
        <Word style={{ fontSize: "0.5rem", color: "gray", textAlign: "end" }}>
          Balance : 0.0000 APX
        </Word>
      </Box>
      <Box
        style={{
          backgroundColor: "#33343E",
          alignItems: "center",
          borderRadius: "10px",
          marginTop: "auto",
          marginBottom: "5%",
        }}
      >
        <Word bold white style={{ fontSize: "2rem" }}>
          confirm
        </Word>
      </Box>
    </Box>
  );
}
export default SwapPage;
