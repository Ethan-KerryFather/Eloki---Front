import React, { useEffect, useState } from "react";
import {
  Box,
  Chunk,
  ColumnFlexBox,
  CustomBtn,
  EContainer,
  RowFlexBox,
  UContainer,
  Word,
  Words,
} from "../../customComponent/customComponent";
import { Header } from "../../customComponent/Header";
import FooterTokenomics from "../../customComponent/FooterTokenomics";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import {
  Highlight,
  Image,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import BoxStaking from "./BoxStaking";
import BoxUnStaking from "./BoxUnstaking";

function StakePage() {
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

  const [chosenMenu, setChosenMenu] = useState(1);
  const [stakeAmount, setStakeAmount] = useState();
  const [unstakeAmount, setUnstakeAmount] = useState();
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
      <UContainer>
        {/* 워딩 */}
        <ColumnFlexBox
          style={{
            alignItems: "center",
            margin: "8vh 10vw 0vh 10vw",
          }}
        >
          <Word white bold style={{ fontSize: "2rem" }}>
            Stake
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
              Deposit $Eloki,&nbsp;and get More $Eloki
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
              &nbsp;+ $Leash
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            quisquam, cumque, tempora sit delectus amet doloribus ea vero iste
            exercitationem, obcaecati excepturi! Quaerat sed, reiciendis id
            animi hic quia veniam.
          </Word>
        </ColumnFlexBox>

        {/* 박스 */}
        <ColumnFlexBox
          style={{
            alignItems: "center",
            width: "90%",
            alignSelf: "center",
          }}
        >
          <Box
            shadow
            row
            radius
            style={{
              width: "100%",
              minHeight: "50vh",
              marginTop: "2%",
              marginBottom: "5%",
            }}
          >
            {/* Price등락폭 */}
            <ColumnFlexBox
              style={{
                width: "10%",
                padding: "5px",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
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

            <ColumnFlexBox style={{ width: "30%", paddingTop: "10px" }}>
              <RowFlexBox style={{ width: "100%" }}></RowFlexBox>
              <ResponsiveContainer width="100%" height="50%">
                <LineChart data={data} data-aos="fade-up">
                  <Line type="monotone" dataKey="uv" stroke="#ff0000" />
                  <CartesianGrid stroke="#00000080" />
                  <XAxis dataKey="name" />
                  <YAxis />
                </LineChart>
              </ResponsiveContainer>
              <ResponsiveContainer width="100%" height="50%">
                <LineChart data={leash} data-aos="fade-up">
                  <Line type="monotone" dataKey="uv" stroke="#ff0000" />
                  <CartesianGrid stroke="#00000080" />
                  <XAxis dataKey="name" />
                  <YAxis />
                </LineChart>
              </ResponsiveContainer>
            </ColumnFlexBox>

            <ColumnFlexBox
              style={{
                flex: 1,
                justifyContent: "flex-start",
                paddingTop: "20px",
                paddingRight: "5px",
              }}
            >
              {/* 제목 */}
              <RowFlexBox
                style={{
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src={require("../../asset/Eloki.png")}
                  style={{ width: "10%" }}
                />
                <Words bold style={{ fontSize: "2rem" }}>
                  Eloki ($ELKI)
                </Words>
              </RowFlexBox>

              {/* 설명 */}
              <RowFlexBox
                style={{
                  width: "100%",
                  justifyContent: "space-around",
                  marginTop: "2%",
                }}
              >
                <ColumnFlexBox>
                  <Words gray bold style={{ fontSize: "1rem" }}>
                    APY
                  </Words>
                  <Words blue bold style={{ fontSize: "1.5rem" }}>
                    10%
                  </Words>
                </ColumnFlexBox>
                <div style={{ borderRight: "1px solid gray" }} />
                <ColumnFlexBox>
                  <Words gray bold style={{ fontSize: "1rem" }}>
                    Staking/Unstaking wait time
                  </Words>
                  <Words blue bold style={{ fontSize: "1.5rem" }}>
                    10 day / 1 day
                  </Words>
                </ColumnFlexBox>
                <div style={{ borderRight: "1px solid gray" }} />
                <ColumnFlexBox>
                  <Words gray bold style={{ fontSize: "1rem" }}>
                    Reward Period
                  </Words>
                  <Words blue bold style={{ fontSize: "1.5rem" }}>
                    Every day
                  </Words>
                </ColumnFlexBox>
              </RowFlexBox>

              {/* 스테이킹 */}
              <Box
                shadow
                radius
                column
                style={{
                  width: "80%",
                  alignSelf: "center",
                  minHeight: "40vh",
                  marginTop: "5%",
                  marginBottom: "5%",
                }}
              >
                {/* 메뉴 */}
                <RowFlexBox>
                  <ColumnFlexBox
                    style={{
                      width: "50%",
                      alignItems: "center",
                      padding: "2% 0% 4px 0%",
                      borderBottom: chosenMenu === 1 && "2px solid blue",
                    }}
                    onClick={() => {
                      setChosenMenu(1);
                    }}
                  >
                    <Words letterspace bold style={{ fontSize: "1rem" }}>
                      Staking
                    </Words>
                  </ColumnFlexBox>

                  <ColumnFlexBox
                    style={{
                      width: "50%",
                      alignItems: "center",
                      padding: "2% 0% 4px 0%",
                      borderBottom: chosenMenu === 2 && "2px solid blue",
                    }}
                    onClick={() => {
                      setChosenMenu(2);
                    }}
                  >
                    <Words bold letterspace style={{ fontSize: "1rem" }}>
                      UnStaking
                    </Words>
                  </ColumnFlexBox>
                </RowFlexBox>

                {chosenMenu === 1 ? (
                  <BoxStaking
                    setStakeAmount={setStakeAmount}
                    stakeAmount={stakeAmount}
                    exchangeRate={data[data.length - 1].uv}
                  />
                ) : (
                  <BoxUnStaking />
                )}
              </Box>
            </ColumnFlexBox>
          </Box>
        </ColumnFlexBox>
      </UContainer>
      <FooterTokenomics />
    </EContainer>
  );
}

export default StakePage;
