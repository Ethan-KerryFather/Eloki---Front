import { Image, Input } from "@chakra-ui/react";
import {
  ColumnFlexBox,
  RowFlexBox,
  SmallView,
  Word,
} from "../../customComponent/customComponent";
import { colors } from "../../asset/Colors";

const SwapElement = () => {
  return (
    <ColumnFlexBox
      style={{
        height: "50vh",
        backgroundColor: "white",
        boxShadow: "4px 1px 27px -9px rgba(0,0,0,0.61)",
      }}
    >
      <RowFlexBox
        style={{
          width: "80%",
          alignSelf: "center",
          marginTop: "3%",
          borderRadius: "7px",
          padding: "10px",
          backgroundColor: colors.componentColor.SwapBox,
        }}
      >
        <ColumnFlexBox style={{ flex: 1, paddingLeft: "5px" }}>
          <Word style={{ fontSize: "1rem" }}>From</Word>
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
          />
          <Word>Price </Word>
        </ColumnFlexBox>
        <ColumnFlexBox style={{ flex: 1, paddingLeft: "5px" }}></ColumnFlexBox>
      </RowFlexBox>
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
          Swap
        </Word>
      </SmallView>
    </ColumnFlexBox>
  );
};

export default SwapElement;
