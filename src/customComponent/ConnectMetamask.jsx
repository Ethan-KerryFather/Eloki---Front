import React, { useEffect, useState } from "react";
import { Button, Image } from "@chakra-ui/react";
import Web3 from "web3";

function ConnectMetamask() {
  const [account, setAccount] = useState();
  const connect = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Connected accounts:", accounts);
      setAccount(accounts);
    } catch (error) {
      console.error("User denied account access");
    }
  };

  const asyncConnect = () => {
    if (
      typeof window.ethereum !== "undefined" ||
      typeof window.web3 !== "undefined"
    ) {
      console.log("MetaMask is installed!");
      connect();
    } else {
      console.log("Please install MetaMask!");
    }
  };

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.on("accountsChanged", function (accounts) {
        console.log("Accounts changed:", accounts);
      });
      window.ethereum.on("chainChanged", function (chainId) {
        console.log("Current chain ID:", chainId);
        window.location.reload();
      });
    }
  }, []);

  return (
    <Button colorScheme="blue" onClick={asyncConnect}>
      <Image
        src={require("../asset/metamask.png")}
        style={{ width: "100%", height: "100%", marginRight: "5px" }}
      />
      {account ? account : "Connect to Metamask"}
    </Button>
  );
}

export default ConnectMetamask;
