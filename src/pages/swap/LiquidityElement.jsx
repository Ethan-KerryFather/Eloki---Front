import { Image, Input } from "@chakra-ui/react";
import {
  ColumnFlexBox,
  RowFlexBox,
  SmallView,
  Word,
} from "../../customComponent/customComponent";
import { useEffect, useRef, useState } from "react";

const LiquidityElement = () => {
  const [Eloki, setEloki] = useState();
  const [Leash, setLeash] = useState();
  const [ratio, setRatio] = useState({
    Eloki: 50,
    Leash: 50,
  });
  const exchangeRate = useRef({
    Eloki: 650,
    Leash: 100,
  }).current;

  useEffect(() => {
    Eloki &&
      Leash &&
      setRatio({
        Eloki: (
          (Number(Eloki) / (Number(Eloki) + Number(Leash))) *
          100
        ).toFixed(0),
        Leash: (
          (Number(Leash) / (Number(Eloki) + Number(Leash))) *
          100
        ).toFixed(0),
      });
  }, [Eloki, Leash]);

  return (
    <ColumnFlexBox
      style={{
        backgroundColor: "white",
        boxShadow: "4px 1px 27px -9px rgba(0,0,0,0.61)",
      }}
    >
      <ColumnFlexBox style={{ alignItems: "center", marginTop: "20px" }}>
        <Word bold style={{ fontSize: "2rem", color: "#1f53ff" }}>
          Liquidity Pair Ratio
        </Word>
        <RowFlexBox
          style={{
            width: "80%",
            backgroundColor: "#59545b35",
            alignSelf: "center",
            paddingTop: "5px",
            paddingBottom: "5px",
            borderRadius: "20px",
            marginTop: "10px",
            boxShadow: "-1px 14px 47px -20px rgba(0,0,0,0.36)",
          }}
        >
          <RowFlexBox
            style={{
              flex: ratio.Eloki,
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Image
              src={require("../../asset/Eloki.png")}
              style={{ width: "30px" }}
            />
            <Word
              style={{
                fontSize: "1.3rem",
                fontFamily: "shadow-into",
                letterSpacing: "5px",
              }}
            >
              Eloki {ratio.Eloki}%
            </Word>
          </RowFlexBox>
          <div
            style={{
              width: "2px",
              backgroundColor: "gray",
              height: "100%",
            }}
          />
          <RowFlexBox
            style={{
              flex: ratio.Leash,
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Image
              src={require("../../asset/leash.png")}
              style={{ width: "30px" }}
            />
            <Word
              style={{
                fontSize: "1.3rem",
                fontFamily: "shadow-into",
                letterSpacing: "5px",
              }}
            >
              Leash {ratio.Leash}%
            </Word>
          </RowFlexBox>
        </RowFlexBox>
      </ColumnFlexBox>
      <RowFlexBox
        style={{
          width: "80%",
          alignSelf: "center",
          justifyContent: "space-between",
          padding: "2px 30px 2px 30px",
        }}
      >
        <Word style={{ fontSize: "1rem" }}>Swap fee</Word>
        <Word style={{ fontSize: "1rem" }}>2%</Word>
      </RowFlexBox>

      <ColumnFlexBox style={{ alignItems: "center", marginTop: "20px" }}>
        <Word bold style={{ fontSize: "2rem", color: "#1f53ff" }}>
          Amount
        </Word>
        <RowFlexBox
          style={{
            width: "80%",
            backgroundColor: "#59545b2a",
            borderRadius: "7px",
            padding: "10px",
            marginTop: "10px",
            boxShadow: "-1px 14px 27px -20px rgba(0,0,0,0.36)",
          }}
        >
          <ColumnFlexBox style={{ flex: 1 }}>
            <Input
              variant="unstyled"
              placeholder="0.0"
              style={{
                fontSize: "2.5rem",
                height: "3rem",
                width: "100%",
                marginBottom: "5px",
              }}
              type="number"
              value={Eloki}
              onChange={(e) => {
                setEloki(e.target.value);
              }}
            />
            <Word style={{ fontSize: "1rem" }}>
              <pre>${Eloki && Eloki * exchangeRate.Eloki}TT</pre>
            </Word>
          </ColumnFlexBox>
          <ColumnFlexBox
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RowFlexBox
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Image
                src={require("../../asset/Eloki.png")}
                style={{ width: "40px" }}
              />
              <Word
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "shadow-into",
                  letterSpacing: "5px",
                }}
              >
                Eloki
              </Word>
            </RowFlexBox>
          </ColumnFlexBox>
        </RowFlexBox>
      </ColumnFlexBox>
      <ColumnFlexBox style={{ alignItems: "center", marginTop: "20px" }}>
        <RowFlexBox
          style={{
            width: "80%",
            backgroundColor: "#59545b2a",
            borderRadius: "7px",
            padding: "10px",
            boxShadow: "-1px 14px 27px -20px rgba(0,0,0,0.36)",
          }}
        >
          <ColumnFlexBox style={{ flex: 1 }}>
            <Input
              variant="unstyled"
              placeholder="0.0"
              style={{
                fontSize: "2.5rem",
                height: "3rem",
                width: "100%",
                marginBottom: "5px",
              }}
              type="number"
              value={Leash}
              onChange={(e) => {
                setLeash(e.target.value);
              }}
            />
            <Word style={{ fontSize: "1rem" }}>
              <pre>${Leash && Leash * exchangeRate.Leash}TT</pre>
            </Word>
          </ColumnFlexBox>
          <ColumnFlexBox
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RowFlexBox
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Image
                src={require("../../asset/leash.png")}
                style={{ width: "40px" }}
              />
              <Word
                style={{
                  fontSize: "1.5rem",
                  fontFamily: "shadow-into",
                  letterSpacing: "5px",
                }}
              >
                Leash
              </Word>
            </RowFlexBox>
          </ColumnFlexBox>
        </RowFlexBox>
      </ColumnFlexBox>

      <SmallView
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 0px 10px 0px",
          width: "80%",
          alignSelf: "center",
          marginTop: "auto",
          marginBottom: "3%",
        }}
      >
        <Word white bold style={{ fontSize: "1.5rem" }}>
          Confirm
        </Word>
      </SmallView>
    </ColumnFlexBox>
  );
};

export default LiquidityElement;
