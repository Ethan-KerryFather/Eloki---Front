import React, { useEffect, useState } from "react";
import {
  Chunk,
  ColumnFlexBox,
  CustomBtn,
  EContainer,
  RowFlexBox,
  UContainer,
  Word,
} from "../../customComponent/customComponent";
import { Header } from "../../customComponent/Header";

function SwapPage() {
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
          <Word white bold>
            Swap
          </Word>
          <Word white style={{ fontSize: "1.5rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            dolorem quod obcaecati optio placeat natus fugiat, corporis maiores
            vitae. Consequatur assumenda quaerat obcaecati, illum velit
            similique temporibus dignissimos aperiam mollitia?
          </Word>
        </ColumnFlexBox>
      </UContainer>
      <UContainer style={{ minHeight: "100vh" }}></UContainer>
      <UContainer style={{ minHeight: "100vh" }}></UContainer>
    </EContainer>
  );
}

export default SwapPage;
