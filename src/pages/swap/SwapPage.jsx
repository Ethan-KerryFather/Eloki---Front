import React, { useEffect, useState } from "react";
import {
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
import { Highlight, Image, Input } from "@chakra-ui/react";
import LiquidityElement from "./LiquidityElement";
import SwapElement from "./SwapElement";

function SwapPage() {
  const [chosenTab, setChosenTab] = useState("Liquidity");
  return (
    <EContainer>
      <Header />
      <ConnnectMetamask />
      <UContainer style={{ minHeight: "100vh" }}>
        <ColumnFlexBox
          style={{
            alignItems: "center",
            margin: "8vh 10vw 0vh 10vw",
          }}
        >
          <Word white bold style={{ fontSize: "2rem" }}>
            Swap & Add Liquidity
          </Word>
          <Word white>
            <Highlight
              query="Eloki"
              styles={{
                px: "6",
                py: "0",
                bg: "#cdbb1b20",
                rounded: "full",
                fontFamily: "shadow-into",
              }}
            >
              Swap your $Eloki,&nbsp;
            </Highlight>
            <Highlight
              query="Leash"
              styles={{
                px: "6",
                py: "0",
                bg: "#cdbb1b20",
                rounded: "full",
                fontFamily: "shadow-into",
              }}
            >
              and Eloki's $Leash
            </Highlight>
          </Word>
          <Word
            white
            style={{
              fontSize: "1.5rem",
              fontFamily: "shadow-into",
              marginTop: "2vh",
            }}
          >
            Swap your Eloki & Leash, and Get attractive profit with adding
            Liquidity pair of $Eloki, $Leash
          </Word>
        </ColumnFlexBox>
        <div
          style={{
            width: "60vw",
            backgroundColor: "#59545b2a",
            alignSelf: "center",
            borderRadius: "7px",
            marginTop: "2%",
          }}
        >
          <RowFlexBox style={{ height: "50px" }}>
            <ColumnFlexBox
              style={
                chosenTab === "Swap"
                  ? {
                      flex: 1,
                      alignItems: "center",
                      height: "100%",
                      backgroundColor: "white",
                      borderTopRightRadius: "7px",
                      borderTopLeftRadius: "7px",
                      justifyContent: "center",
                    }
                  : {
                      flex: 1,
                      alignItems: "center",
                      height: "100%",
                      backgroundColor: "#59545b2a",
                      borderTopRightRadius: "7px",
                      borderTopLeftRadius: "7px",
                      justifyContent: "center",
                    }
              }
              onClick={() => {
                setChosenTab("Swap");
              }}
            >
              <Word
                bold
                style={{
                  fontSize: "1.3rem",
                  color: chosenTab === "Liquidity" ? "white" : "blue",
                }}
              >
                Swap
              </Word>
            </ColumnFlexBox>
            <ColumnFlexBox
              style={
                chosenTab === "Liquidity"
                  ? {
                      flex: 1,
                      alignItems: "center",
                      height: "100%",
                      justifyContent: "center",
                      backgroundColor: "white",
                      borderTopRightRadius: "7px",
                      borderTopLeftRadius: "7px",
                    }
                  : {
                      flex: 1,
                      alignItems: "center",
                      height: "100%",
                      justifyContent: "center",
                    }
              }
              onClick={() => {
                setChosenTab("Liquidity");
              }}
            >
              <Word
                bold
                style={{
                  fontSize: "1.3rem",
                  color: chosenTab === "Liquidity" ? "blue" : "white",
                }}
              >
                Add Liquidity
              </Word>
            </ColumnFlexBox>
          </RowFlexBox>
          {chosenTab === "Swap" ? <SwapElement /> : <LiquidityElement />}
        </div>

        <RowFlexBox
          style={{
            alignSelf: "center",
            marginTop: "2%",
            borderBottom: "3px solid white",
            padding: "0px 4px 0px 2px",
          }}
        >
          <Word bold white style={{ fontSize: "1.4rem" }}>
            + Add token
          </Word>
        </RowFlexBox>
      </UContainer>
      <FooterTokenomics />
    </EContainer>
  );
}

export default SwapPage;
