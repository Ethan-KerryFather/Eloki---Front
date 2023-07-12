import React, { useState, useEffect } from "react";
import Web3 from "web3";

const useWeb3 = () => {
  const [account, setAccount] = useState(null);
  const [web3, setWeb3] = useState(null);

  // 메타마스크에서 생성해준 메서드로 chainId를 가져온다.
  const getChainId = async () => {
    const chainId = await window.ethereum.request({
      method: "eth_chainId",
    });
    return chainId;
  };
  // MetaMask에서 생성해준 메서드로 지갑 주소를 가져옵니다.
  // MetaMask에서 Front에 연결된 지갑이 없을경우 지갑을 연결해달라고 합니다.
  const getRequestAccounts = async () => {
    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    return account;
  };

  // 네트워크 추가 함수
  const addNetwork = async (chainId) => {
    const network = {
      chainId: chainId,
      chainName: "suwonGanache",
      rpcUrls: ["http://127.0.0.1:8545"],
      nativeCurrency: {
        name: "Ethereum", // 통화 이름
        symbol: "ETH", // 통화 기호
        decimals: 18, // 통화 소수점 자리
      },
    };

    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [network],
    });
  };

  useEffect(() => {
    const init = async () => {
      try {
        const targetChainId = "0x4bd"; // 내가 설정한 Ganache ChainId
        const chainId = await getChainId(); // 사용중인 MetaMask Network의 chainId

        if (targetChainId !== chainId) {
          addNetwork(targetChainId);
        }

        const [account] = await getRequestAccounts();

        const web3 = new Web3(window.ethereum);

        setWeb3(web3);
        setAccount(account);
      } catch (e) {
        console.error(e.message);
      }
    };

    // MetaMask 설치함
    if (window.ethereum) {
      init();
    }
  }, []);

  return [account, web3];
};

export default useWeb3;
