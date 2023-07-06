export const asset = {
  abi: [
    {
      inputs: [],
      name: "becomeTarget",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "withdrawer",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "balance",
          type: "uint256",
        },
      ],
      name: "senderBalance",
      type: "event",
    },
    {
      inputs: [],
      name: "withdraw",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "mostSent",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      name: "pendingWithdrawals",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "target",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ],
  byteCode:
    "608060405234801561001057600080fd5b5033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610489806100616000396000f3fe60806040526004361061004a5760003560e01c8063029311bc1461004f5780633ccfd60b1461006d5780636886bf1c14610084578063d4b83992146100af578063f3f43703146100da575b600080fd5b610057610117565b604051610064919061034a565b60405180910390f35b34801561007957600080fd5b506100826101cc565b005b34801561009057600080fd5b506100996102ed565b6040516100a6919061037e565b60405180910390f35b3480156100bb57600080fd5b506100c46102f3565b6040516100d191906103da565b60405180910390f35b3480156100e657600080fd5b5061010160048036038101906100fc9190610426565b610317565b60405161010e919061037e565b60405180910390f35b600034600360008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550346001819055506001905090565b6000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561029b573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f1283158e16f3d27957f31754b497ed2320291d25b4d17af6c506cf1db450535b826040516102e2919061037e565b60405180910390a250565b60015481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60036020528060005260406000206000915090505481565b60008115159050919050565b6103448161032f565b82525050565b600060208201905061035f600083018461033b565b92915050565b6000819050919050565b61037881610365565b82525050565b6000602082019050610393600083018461036f565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103c482610399565b9050919050565b6103d4816103b9565b82525050565b60006020820190506103ef60008301846103cb565b92915050565b600080fd5b610403816103b9565b811461040e57600080fd5b50565b600081359050610420816103fa565b92915050565b60006020828403121561043c5761043b6103f5565b5b600061044a84828501610411565b9150509291505056fea26469706673582212204bfcdae51da7c8150d2348a05f39095db3faaefd128932a393a60a459276271464736f6c63430008120033",
};
