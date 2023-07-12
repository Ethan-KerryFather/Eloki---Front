import React, { useState, useEffect } from "react";
import { Chunk, RowFlexBox, SmallView, Word } from "./customComponent";
import { Image } from "@chakra-ui/react";
import { styled } from "styled-components";
import detectEthereumProvider from "@metamask/detect-provider";

const MetaMaskBtn = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  padding-left: 15px;
  padding-right: 15px;
  height: 4vh;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  right: 10px;
  top: 10px;
  background: rgba(202, 125, 243, 0.24);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(15.9px);
  -webkit-backdrop-filter: blur(15.9px);
  border: 1px solid rgba(19, 19, 19, 0.73);
  z-index: 10;
`;

const ConnnectMetamask = ({ account }) => {
  const detectMetamask = async () => {
    console.log(window.ethereum);
    const provider = await detectEthereumProvider();
  };

  return (
    <MetaMaskBtn onClick={() => {}}>
      <Image
        src={require("../asset/metamask.png")}
        style={{ height: "40px" }}
      />
      <Word style={{ fontSize: "1rem", fontFamily: "pre-bold" }}>
        {account ? account : "Connect Metamask"}
      </Word>
    </MetaMaskBtn>
  );
};

export default ConnnectMetamask;
