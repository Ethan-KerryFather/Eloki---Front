import React from "react";
import { ColumnFlexBox, RowFlexBox, Word } from "./customComponent";
import { RiDiscordFill, RiTwitterFill, RiTelegramFill } from "react-icons/ri";
function FooterCorporate() {
  return (
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
      <RowFlexBox style={{ width: "100%", justifyContent: "space-around" }}>
        <ColumnFlexBox>
          <RowFlexBox>
            <Word white bold style={{ fontSize: "1rem" }}>
              BlockWave Labs&nbsp;
            </Word>
            <Word white style={{ fontSize: "1rem" }}>
              | Contact@blockwavelabs.io
            </Word>
          </RowFlexBox>
          <Word white style={{ fontSize: "1rem" }}>
            Blockwave Labs Inc. All rights reserved
          </Word>
        </ColumnFlexBox>
        <RowFlexBox style={{ flexWrap: "nowrap" }}>
          <RiDiscordFill
            color="white"
            style={{ width: "50px", height: "50px", marginRight: "10%" }}
          />
          <RiTwitterFill
            color="white"
            style={{ width: "50px", height: "50px", marginRight: "10%" }}
          />
          <RiTelegramFill
            color="white"
            style={{ width: "50px", height: "50px", marginRight: "10%" }}
          />
        </RowFlexBox>
      </RowFlexBox>
    </ColumnFlexBox>
  );
}

export default FooterCorporate;
