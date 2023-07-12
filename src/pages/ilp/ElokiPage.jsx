import React, { useEffect, useState } from "react";
import {
  Chunk,
  ColumnFlexBox,
  CustomBtn,
  EContainer,
  GlobalStyle,
  RowFlexBox,
  UContainer,
  Word,
} from "../../customComponent/customComponent";
import { Header } from "../../customComponent/Header";
import FooterTokenomics from "../../customComponent/FooterTokenomics";

function ElokiPage() {
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
          <Word white bold style={{ fontFamily: "shadow-into" }}>
            About Eloki
          </Word>
          <Word white style={{ fontSize: "1.5rem", fontFamily: "shadow-into" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            laboriosam totam maxime quasi ipsam impedit maiores unde, molestias
            tenetur saepe similique corporis. Eaque vitae architecto harum sunt
            inventore similique consequuntur.
          </Word>
        </ColumnFlexBox>
      </UContainer>

      <FooterTokenomics />
    </EContainer>
  );
}

export default ElokiPage;
