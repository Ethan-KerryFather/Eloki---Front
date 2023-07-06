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
import Web3 from "web3";
import { asset } from "../../asset/asset";
import { Input, useToast } from "@chakra-ui/react";

export const web3 = new Web3(
  new Web3.providers.HttpProvider("http://localhost:8545")
);

function ILP_Page() {
  const temp = {
    address: "0x221F2b2C7F0e874C0bA02E962cBd79C2169d1A46",
    privateKey:
      "0x66675567f9e8545aec502c1658db69e0f31866974c901220683df60c76f5e31b",
    contractaddress: "0x1039fdaadb3c2e9d45d9ef173c4e7d6920d5a28a",
  };
  const toast = useToast();

  const [senderAddress, setSenderAddress] = useState(temp.address);
  const [senderPrivateKey, setPrivateKey] = useState(temp.privateKey);
  const [contractAddress, setContractAddress] = useState(temp.contractaddress);
  const [sendValue, setSendValue] = useState(1000000000000000000);
  const [balance, setBalance] = useState(0);

  console.log(balance);
  useEffect(() => {
    if (senderAddress.length === 42) {
      const fetchBalance = async () => {
        console.log("42");
        const accBalance = await web3.eth.getBalance(senderAddress);

        const ethBalance = await web3.utils.fromWei(accBalance, "ether");

        setBalance(ethBalance);
      };
      fetchBalance();
    }
  }, [senderAddress]);

  return (
    <EContainer>
      <Header />
      <UContainer style={{ minHeight: "100vh", justifyContent: "center" }}>
        <Word white bold style={{ fontSize: "2rem", alignSelf: "center" }}>
          function becomeTarget() external payable returns(bool)
        </Word>
        <Word
          white
          bold
          style={{
            fontSize: "2rem",
            alignSelf: "center",
            margin: "30px 0px 2px 0px",
          }}
        >
          송금자 주소
        </Word>
        <Input
          value={senderAddress}
          onChange={(e) => {
            setSenderAddress(e.target.value);
          }}
          placeholder="날리는 사람 주소"
          style={{
            backgroundColor: "white",
            alignSelf: "center",
            width: "60vw",
          }}
        />
        <Word
          white
          bold
          style={{
            fontSize: "2rem",
            alignSelf: "center",
            margin: "30px 0px 2px 0px",
          }}
        >
          송금자 개인키
        </Word>
        <Input
          value={senderPrivateKey}
          onChange={(e) => {
            setPrivateKey(e.target.value);
          }}
          placeholder="날리는 사람 개인키"
          style={{
            backgroundColor: "white",
            alignSelf: "center",
            width: "60vw",
          }}
        />
        <Word
          white
          bold
          style={{
            fontSize: "2rem",
            alignSelf: "center",
            margin: "30px 0px 2px 0px",
          }}
        >
          스마트 계약 주소
        </Word>
        <Input
          value={contractAddress}
          onChange={(e) => {
            setContractAddress(e.target.value);
          }}
          placeholder="스마트 계약 주소"
          style={{
            backgroundColor: "white",
            alignSelf: "center",
            width: "60vw",
          }}
        />

        <Word
          white
          bold
          style={{
            fontSize: "2rem",
            alignSelf: "center",
            margin: "30px 0px 2px 0px",
          }}
        >
          송금액 (wei)
        </Word>
        <Input
          value={sendValue}
          onChange={(e) => {
            setSendValue(e.target.value);
          }}
          type="number"
          placeholder="WEI"
          style={{
            backgroundColor: "white",
            alignSelf: "center",
            width: "60vw",
          }}
        />
        <Word white style={{ fontSize: "1.4rem", alignSelf: "center" }}>
          잔액 {balance} ETH
        </Word>
        <CustomBtn
          style={{ width: "14vw", alignSelf: "center" }}
          onClick={() => {
            toast({
              title: "transaction sended",
              description: "보냈다",
              status: "success",
              duration: 5000,
              isClosable: false,
            });
            connectContract(
              contractAddress,
              senderAddress,
              senderPrivateKey,
              sendValue
            );
          }}
        >
          <Word white bold>
            트랜잭션
          </Word>
        </CustomBtn>
      </UContainer>
      <UContainer style={{ minHeight: "100vh" }}></UContainer>
      <UContainer style={{ minHeight: "100vh" }}></UContainer>
      <UContainer style={{ minHeight: "100vh" }}></UContainer>
    </EContainer>
  );
}

export default ILP_Page;

async function connectContract(
  contractAddress,
  senderAddress,
  senderPrivateKey,
  value
) {
  const CA = contractAddress;
  const from = senderAddress;
  const pk = senderPrivateKey;
  const ABI = asset.abi;

  let Contract = new web3.eth.Contract(ABI, CA);
  let byteddata = await Contract.methods.becomeTarget().encodeABI();
  let GasPrice_wei = await web3.eth.getGasPrice();

  // const tx2 = {
  //   from: from,
  //   gasPrice: web3.utils.toHex(20000000000),
  //   gas: web3.utils.toHex(1000000000),
  //   to: contractAddress,
  //   value: value,
  // };

  // const sentInfo = await web3.eth.sendTransaction(tx2, (err) => {
  //   console.log(err);
  // });
  const tx = {
    from: from, //
    to: CA, // 트랜잭션 수신자 : 여기서는 계약 주소
    gas: 6721975, // 트랜잭션에서 사용되는 가스의 상한선
    gasPrice: 20000000000, // 이 트랜잭션에 의해서 설정된 가스 가격, 비어있으면 web3.eth.getGasPrice()를 사용한다
    data: byteddata, // 트랜잭션 호출 데이터 (단순 값 전송을 위해 비어있을 수 있음)
    value: web3.utils.toHex("20000000000000000000"), // 송금액 (wei)
  };

  const account = web3.eth.accounts.privateKeyToAccount(pk); // privatekey가져와서 넣으주고
  // const signedTx = await account.signTransaction(tx); // account에서 트랜잭션에 서명

  const signedTransaction = await web3.eth.accounts.signTransaction(tx, pk);
  const receipt = await web3.eth
    .sendSignedTransaction(
      // 보내자.
      signedTransaction.rawTransaction,
      // 바이트코드
      async (err, data) => {
        if (err) {
          console.error("sendsignedTransaction error", err);
        }
      }
    )
    .on("receipt", (receipt) => console.log("recept", receipt));

  console.log(
    `contract Address : ${contractAddress}\ntype ${typeof contractAddress}\n`
  );
  console.log(`sentTx ${receipt}\n`);
  console.log(`GasPrice ${GasPrice_wei}wei`);
  console.log(`send value wei ${value}WEI`);
}
