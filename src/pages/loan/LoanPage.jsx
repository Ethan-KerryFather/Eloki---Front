import React, { useEffect, useRef, useState } from "react";
import {
  Chunk,
  ColumnFlexBox,
  CustomBtn,
  EContainer,
  RowFlexBox,
  ShadowBox,
  SmallView,
  TokenBtn,
  UContainer,
  Word,
} from "../../customComponent/customComponent";
import { Header } from "../../customComponent/Header";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
import {
  Button,
  Highlight,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Stack,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import { CheckIcon, PhoneIcon } from "@chakra-ui/icons";
import FooterTokenomics from "../../customComponent/FooterTokenomics";
import ConnnectMetamask from "../../customComponent/ConnectMetamask";

function Loan() {
  const [data, setData] = useState([
    { uv: 800, pv: 2400, amt: 2400 },
    { uv: 700, pv: 2400, amt: 2400 },
    { uv: 600, pv: 2400, amt: 2400 },
    { uv: 320, pv: 2400, amt: 2400 },
    { uv: 920, pv: 2400, amt: 2400 },
    { uv: 700, pv: 2400, amt: 2400 },
    { uv: 799, pv: 2400, amt: 2400 },
    { uv: 499, pv: 2400, amt: 2400 },
    { uv: 500, pv: 2400, amt: 2400 },
    { uv: 700, pv: 2400, amt: 2400 },
    { uv: 500, pv: 2400, amt: 2400 },
    { uv: 900, pv: 2400, amt: 2400 },
    { uv: 502, pv: 2400, amt: 2400 },
    { uv: 700, pv: 2400, amt: 2400 },
    { uv: 800, pv: 2400, amt: 2400 },
  ]);

  const [leash, setLeash] = useState([
    { uv: 90, pv: 2400, amt: 2400 },
    { uv: 100, pv: 2400, amt: 2400 },
    { uv: 96, pv: 2400, amt: 2400 },
    { uv: 100, pv: 2400, amt: 2400 },
    { uv: 100, pv: 2400, amt: 2400 },
    { uv: 100, pv: 2400, amt: 2400 },
    { uv: 100, pv: 2400, amt: 2400 },
    { uv: 104, pv: 2400, amt: 2400 },
    { uv: 103, pv: 2400, amt: 2400 },
    { uv: 102, pv: 2400, amt: 2400 },
    { uv: 97, pv: 2400, amt: 2400 },
    { uv: 103, pv: 2400, amt: 2400 },
    { uv: 100, pv: 2400, amt: 2400 },
    { uv: 110, pv: 2400, amt: 2400 },
    { uv: 130, pv: 2400, amt: 2400 },
  ]);

  const [chosenToken, setChosenToken] = useState("choose your token");
  const [elokiAmount, setElokiAmount] = useState();
  const tokenList = useRef(["ELOKI", "LEASH"]).current;

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newData = [...prevData];
        newData.shift();
        newData.push({
          uv: Math.floor(Math.random() * 100) + 600, // 이 부분을 적절하게 변경해야 합니다.
          pv: 2400,
          amt: 2400,
        });

        return newData;
      });

      setLeash((prevData) => {
        const newData = [...prevData];
        newData.shift();
        newData.push({
          uv: Math.floor(Math.random() * 20) + 90, // 이 부분을 적절하게 변경해야 합니다.
          pv: 2400,
          amt: 2400,
        });

        return newData;
      });
    }, 1000);

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌을 정리합니다.
  }, []);

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
            Loan
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
              Deposit $Eloki,&nbsp;
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
              and get Eloki's $Leash
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
            Deposit Your $ELKI, And get Stable $Leash
          </Word>
          <ShadowBox style={{ flexWrap: "nowrap" }}>
            <ColumnFlexBox
              style={{
                width: "50%",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "5vh 0vh 5vh 0vh",
              }}
            >
              <ResponsiveContainer width="100%" height="50%">
                <LineChart data={data} data-aos="fade-up">
                  <Line type="monotone" dataKey="uv" stroke="#ff0000" />
                  <CartesianGrid stroke="#00000080" />
                  <XAxis dataKey="name" />
                  <YAxis />
                </LineChart>
              </ResponsiveContainer>

              <Chunk style={{ width: "100%" }}>
                <StatGroup style={{ marginLeft: "5%" }}>
                  <Stat>
                    <StatLabel>Eloki Price(TT)</StatLabel>
                    <StatNumber>{data[data.length - 1].uv}</StatNumber>
                    <StatHelpText>
                      {(
                        ((data[data.length - 1].uv - data[data.length - 2].uv) /
                          data[data.length - 2].uv) *
                        100
                      ).toFixed(2) > 0 ? (
                        <StatArrow type="increase" />
                      ) : (
                        <StatArrow type="decrease" />
                      )}
                      {(
                        ((data[data.length - 1].uv - data[data.length - 2].uv) /
                          data[data.length - 2].uv) *
                        100
                      ).toFixed(2)}
                      %
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </Chunk>
              {/* chart2 */}
              <LineChart
                width={700}
                height={150}
                data={leash}
                data-aos="fade-up"
              >
                <Line type="monotone" dataKey="uv" stroke="#ff0000" />
                <CartesianGrid stroke="#00000080" />
                <XAxis dataKey="name" />
                <YAxis />
              </LineChart>
              <Chunk style={{ width: "100%" }}>
                <StatGroup style={{ marginLeft: "5%" }}>
                  <Stat>
                    <StatLabel>leash Price(TT)</StatLabel>
                    <StatNumber>{leash[leash.length - 1].uv}</StatNumber>
                    <StatHelpText>
                      {(
                        ((leash[leash.length - 1].uv -
                          leash[leash.length - 2].uv) /
                          leash[leash.length - 2].uv) *
                        100
                      ).toFixed(2) > 0 ? (
                        <StatArrow type="increase" />
                      ) : (
                        <StatArrow type="decrease" />
                      )}
                      {(
                        ((leash[leash.length - 1].uv -
                          leash[leash.length - 2].uv) /
                          leash[leash.length - 2].uv) *
                        100
                      ).toFixed(2)}
                      %
                    </StatHelpText>
                  </Stat>
                </StatGroup>
              </Chunk>
            </ColumnFlexBox>
            <ColumnFlexBox
              style={{
                width: "100%",
                paddingTop: "60px",
                paddingLeft: "60px",
              }}
            >
              <Chunk>
                <RowFlexBox style={{ alignItems: "center" }}>
                  <SmallView>
                    <Word white bold style={{ fontSize: "2rem" }}>
                      step 1
                    </Word>
                  </SmallView>
                  <Word style={{ fontSize: "2rem", marginLeft: "10px" }}>
                    Put your Eloki
                  </Word>
                </RowFlexBox>

                <InputGroup
                  style={{
                    marginTop: "15px",
                    width: "80%",
                    alignSelf: "flex-start",
                  }}
                >
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    fontSize="2rem"
                    children="$"
                  />
                  <Input
                    placeholder="Enter Your $ELOKI amount"
                    value={elokiAmount}
                    type="number"
                    onChange={(e) => {
                      setElokiAmount(e.target.value);
                    }}
                  />
                  <InputRightElement>
                    <CheckIcon color="green.500" />
                  </InputRightElement>
                </InputGroup>
                <RowFlexBox>
                  <Word style={{ fontSize: "1.3rem", fontFamily: "pre-bold" }}>
                    <pre>Total : {elokiAmount * data[data.length - 1].uv}</pre>
                  </Word>
                  &nbsp;TT (ThunderCore)
                </RowFlexBox>
              </Chunk>
              <Chunk>
                <RowFlexBox style={{ alignItems: "center", marginTop: "3vh" }}>
                  <SmallView>
                    <Word white bold style={{ fontSize: "2rem" }}>
                      step 2
                    </Word>
                  </SmallView>
                  <Popover>
                    <PopoverTrigger>
                      <Button
                        style={{
                          width: "40%",
                          height: "3rem",
                          backgroundColor: "white",
                          border: "1px solid black",
                        }}
                      >
                        <Word style={{ fontSize: "1.5rem" }}>Choose Token</Word>
                      </Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader style={{ textAlign: "center" }}>
                          Choose Token to Loan
                        </PopoverHeader>
                        <PopoverCloseButton />
                        <PopoverBody>
                          {tokenList.map((element) => (
                            <TokenBtn
                              onClick={() => {
                                setChosenToken(element);
                              }}
                            >
                              <Word style={{ fontSize: "2rem" }}>
                                {element}
                              </Word>
                            </TokenBtn>
                          ))}
                        </PopoverBody>
                        <PopoverFooter>
                          After Submit, you cannot cancel
                        </PopoverFooter>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </RowFlexBox>
                <RowFlexBox
                  style={{
                    padding: "3% 0px 3% 10%",
                    gap: "2%",
                  }}
                >
                  <Image
                    src={
                      chosenToken === "LEASH"
                        ? require("../../asset/leash.png")
                        : require("../../asset/Eloki.png")
                    }
                    style={{ width: "50px" }}
                  />
                  <Word
                    bold
                    style={{ fontSize: "3rem", fontFamily: "shadow-into" }}
                  >
                    ${chosenToken}
                  </Word>
                </RowFlexBox>
              </Chunk>
              <Chunk>
                <RowFlexBox style={{ alignItems: "center", marginTop: "3vh" }}>
                  <SmallView>
                    <Word white bold style={{ fontSize: "2rem" }}>
                      step 3
                    </Word>
                  </SmallView>
                </RowFlexBox>
              </Chunk>
            </ColumnFlexBox>
          </ShadowBox>

          <CustomBtn style={{ marginBottom: "10vh" }}>
            <Word bold white>
              Loan Submit
            </Word>
          </CustomBtn>
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

export default Loan;
