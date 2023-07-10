import React, { useEffect, useState } from "react";
import {
  Chunk,
  ColumnFlexBox,
  CustomBtn,
  EContainer,
  RowFlexBox,
  ShadowBox,
  SmallView,
  UContainer,
  Word,
} from "../../customComponent/customComponent";
import { Header } from "../../customComponent/Header";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
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
} from "@chakra-ui/react";
import { CheckIcon, PhoneIcon } from "@chakra-ui/icons";

function Loan() {
  const data = [
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
  ];

  return (
    <EContainer>
      <Header />
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
              styles={{ px: "6", py: "0", bg: "#cdbb1b20", rounded: "full" }}
            >
              Deposit $Eloki
            </Highlight>
            <Highlight
              query="Leash"
              styles={{ px: "6", py: "0", bg: "#cdbb1b20", rounded: "full" }}
            >
              and get Eloki's $Leash
            </Highlight>
          </Word>
          <Word white style={{ fontSize: "1.5rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            laboriosam totam maxime quasi ipsam impedit maiores unde, molestias
            tenetur saepe similique corporis. Eaque vitae architecto harum sunt
            inventore similique consequuntur.
          </Word>
          <ShadowBox>
            <ColumnFlexBox
              style={{
                width: "50%",
                alignItems: "center",
                justifyContent: "flex-start",
                padding: "5vh 0vh 5vh 0vh",
              }}
            >
              <LineChart
                width={700}
                height={400}
                data={data}
                data-aos="fade-up"
              >
                <Line type="monotone" dataKey="uv" stroke="#ff0000" />
                <CartesianGrid stroke="#00000080" />
                <XAxis dataKey="name" />
                <YAxis />
              </LineChart>
              <Word
                bold
                style={{
                  fontSize: "1.4rem",
                  alignSelf: "flex-start",
                  marginLeft: "10%",
                }}
              >
                Price<p>770</p>
              </Word>
            </ColumnFlexBox>
            <ColumnFlexBox
              style={{
                width: "100%",
                padding: "30px",
              }}
            >
              <Chunk>
                <RowFlexBox style={{ alignItems: "center" }}>
                  <SmallView>
                    <Word white bold style={{ fontSize: "2rem" }}>
                      step 1
                    </Word>
                  </SmallView>
                  <Word bold style={{ fontSize: "2rem", marginLeft: "10px" }}>
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
                  <Input placeholder="Enter Your $ELOKI amount" />
                  <InputRightElement>
                    <CheckIcon color="green.500" />
                  </InputRightElement>
                </InputGroup>
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
                        Choose Token
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
                          {["Eloki", "Leash", "POO"].map((element) => (
                            <RowFlexBox
                              style={{
                                border: "1px solid black",
                                padding: "2px",
                                justifyContent: "center",
                                borderRadius: "30px",
                                marginTop: "20px",
                                marginBottom: "20px",
                              }}
                            >
                              <Word style={{ fontSize: "2rem" }}>
                                {element}
                              </Word>
                            </RowFlexBox>
                          ))}
                        </PopoverBody>
                        <PopoverFooter>
                          After Submit, you cannot cancel
                        </PopoverFooter>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </RowFlexBox>
              </Chunk>
            </ColumnFlexBox>
          </ShadowBox>
          <CustomBtn>
            <Word bold white>
              Loan Submit
            </Word>
          </CustomBtn>
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
          <Image
            src={require("../../asset/Eloki.png")}
            style={{ height: "40%" }}
          />
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

export default Loan;
