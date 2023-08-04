import { Input } from "@chakra-ui/react";
import {
  Box,
  ColumnFlexBox,
  CustomBtn,
  RowFlexBox,
  Words,
} from "../../customComponent/customComponent";

const BoxStaking = ({ stakeAmount = 0, setStakeAmount, exchangeRate }) => {
  return (
    <Box
      column
      radius
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "space-around",
        padding: "10px",
      }}
    >
      <ColumnFlexBox style={{ height: "80%", justifyContent: "space-evenly" }}>
        <RowFlexBox style={{ width: "100%" }}>
          <Words bold gray style={{ fontSize: "1rem" }}>
            Enable Amount
          </Words>
          <RowFlexBox style={{ justifyContent: "flex-end", flex: 1 }}>
            <Words bold style={{ fontSize: "1rem" }}>
              0 ELKI
            </Words>
          </RowFlexBox>
        </RowFlexBox>
        <RowFlexBox style={{ width: "100%" }}>
          <Words bold gray style={{ fontSize: "1rem" }}>
            Apply Amount($ELKI)
          </Words>
          <ColumnFlexBox style={{ alignItems: "flex-end", flex: 1 }}>
            <Input
              type="number"
              placeholder="least 10000ELKI"
              width="80%"
              value={stakeAmount}
              onChange={(e) => {
                setStakeAmount(e.target.value);
              }}
            />
            <Words style={{ fontSize: "1rem" }}>
              <pre>{stakeAmount * exchangeRate}TT</pre>
            </Words>
          </ColumnFlexBox>
        </RowFlexBox>
        <RowFlexBox style={{ width: "100%" }}>
          <Words bold gray style={{ fontSize: "1rem" }}>
            Reward Amount($Leash)
          </Words>
          <RowFlexBox style={{ justifyContent: "flex-end", flex: 1 }}>
            <Words bold style={{ fontSize: "1rem" }}>
              {stakeAmount} Leash
            </Words>
          </RowFlexBox>
        </RowFlexBox>
      </ColumnFlexBox>
      <CustomBtn style={{ width: "80%", alignSelf: "center", margin: "10px" }}>
        <Words white bold letterspace style={{ fontSize: "1.5rem" }}>
          Submit
        </Words>
      </CustomBtn>
    </Box>
  );
};

export default BoxStaking;
