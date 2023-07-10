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

function PoolPage() {
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
            Pool
          </Word>
          <Word white style={{ fontSize: "1.5rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            laboriosam totam maxime quasi ipsam impedit maiores unde, molestias
            tenetur saepe similique corporis. Eaque vitae architecto harum sunt
            inventore similique consequuntur.
          </Word>
        </ColumnFlexBox>
      </UContainer>
      <UContainer style={{ minHeight: "100vh" }}></UContainer>
      <UContainer style={{ minHeight: "100vh" }}></UContainer>
    </EContainer>
  );
}

export default PoolPage;
