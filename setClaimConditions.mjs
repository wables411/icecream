import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";

const sdk = new ThirdwebSDK("base"); // Replace with your desired chain

const contractAddress = "0x2aDc4d57239754199A8F4B2F285466b941be793e"; // Your contract address
const privateKey = "7ce4e15f60c20e92a127db27bc42fb3f24638d6df39549b016a61d8a16c37a4b"; // Replace with your private key
const provider = new ethers.providers.JsonRpcProvider("https://base.blockchain.rpc.url"); // Replace with your chain RPC URL
const wallet = new ethers.Wallet(privateKey, provider);

(async () => {
  const contract = await sdk.getContractFromAbi(contractAddress, [
    [
        {
          "type": "constructor",
          "name": "",
          "inputs": [],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "error",
          "name": "AirdropAlreadyClaimed",
          "inputs": [],
          "outputs": []
        },
        {
          "type": "error",
          "name": "AirdropInvalidProof",
          "inputs": [],
          "outputs": []
        },
        {
          "type": "error",
          "name": "AirdropNoMerkleRoot",
          "inputs": [],
          "outputs": []
        },
        {
          "type": "error",
          "name": "AirdropRequestAlreadyProcessed",
          "inputs": [],
          "outputs": []
        },
        {
          "type": "error",
          "name": "AirdropRequestExpired",
          "inputs": [
            {
              "type": "uint256",
              "name": "expirationTimestamp",
              "internalType": "uint256"
            }
          ],
          "outputs": []
        },
        {
          "type": "error",
          "name": "AirdropRequestInvalidSigner",
          "inputs": [],
          "outputs": []
        },
        {
          "type": "error",
          "name": "AirdropValueMismatch",
          "inputs": [],
          "outputs": []
        },
        {
          "type": "error",
          "name": "ContractMetadataUnauthorized",
          "inputs": [],
          "outputs": []
        },
        {
          "type": "error",
          "name": "OwnableUnauthorized",
          "inputs": [],
          "outputs": []
        },
        {
          "type": "event",
          "name": "Airdrop",
          "inputs": [
            {
              "type": "address",
              "name": "token",
              "indexed": false,
              "internalType": "address"
            }
          ],
          "outputs": [],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "AirdropClaimed",
          "inputs": [
            {
              "type": "address",
              "name": "token",
              "indexed": false,
              "internalType": "address"
            },
            {
              "type": "address",
              "name": "receiver",
              "indexed": false,
              "internalType": "address"
            }
          ],
          "outputs": [],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "AirdropWithSignature",
          "inputs": [
            {
              "type": "address",
              "name": "token",
              "indexed": false,
              "internalType": "address"
            }
          ],
          "outputs": [],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "ContractURIUpdated",
          "inputs": [
            {
              "type": "string",
              "name": "prevURI",
              "indexed": false,
              "internalType": "string"
            },
            {
              "type": "string",
              "name": "newURI",
              "indexed": false,
              "internalType": "string"
            }
          ],
          "outputs": [],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "Initialized",
          "inputs": [
            {
              "type": "uint8",
              "name": "version",
              "indexed": false,
              "internalType": "uint8"
            }
          ],
          "outputs": [],
          "anonymous": false
        },
        {
          "type": "event",
          "name": "OwnerUpdated",
          "inputs": [
            {
              "type": "address",
              "name": "prevOwner",
              "indexed": true,
              "internalType": "address"
            },
            {
              "type": "address",
              "name": "newOwner",
              "indexed": true,
              "internalType": "address"
            }
          ],
          "outputs": [],
          "anonymous": false
        },
        {
          "type": "function",
          "name": "airdropERC1155",
          "inputs": [
            {
              "type": "address",
              "name": "_tokenAddress",
              "internalType": "address"
            },
            {
              "type": "tuple[]",
              "name": "_contents",
              "components": [
                {
                  "type": "address",
                  "name": "recipient",
                  "internalType": "address"
                },
                {
                  "type": "uint256",
                  "name": "tokenId",
                  "internalType": "uint256"
                },
                {
                  "type": "uint256",
                  "name": "amount",
                  "internalType": "uint256"
                }
              ],
              "internalType": "struct Airdrop.AirdropContentERC1155[]"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "airdropERC1155WithSignature",
          "inputs": [
            {
              "type": "tuple",
              "name": "req",
              "components": [
                {
                  "type": "bytes32",
                  "name": "uid",
                  "internalType": "bytes32"
                },
                {
                  "type": "address",
                  "name": "tokenAddress",
                  "internalType": "address"
                },
                {
                  "type": "uint256",
                  "name": "expirationTimestamp",
                  "internalType": "uint256"
                },
                {
                  "type": "tuple[]",
                  "name": "contents",
                  "components": [
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "tokenId",
                      "type": "uint256"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct Airdrop.AirdropContentERC1155[]"
                }
              ],
              "internalType": "struct Airdrop.AirdropRequestERC1155"
            },
            {
              "type": "bytes",
              "name": "signature",
              "internalType": "bytes"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "airdropERC20",
          "inputs": [
            {
              "type": "address",
              "name": "_tokenAddress",
              "internalType": "address"
            },
            {
              "type": "tuple[]",
              "name": "_contents",
              "components": [
                {
                  "type": "address",
                  "name": "recipient",
                  "internalType": "address"
                },
                {
                  "type": "uint256",
                  "name": "amount",
                  "internalType": "uint256"
                }
              ],
              "internalType": "struct Airdrop.AirdropContentERC20[]"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "airdropERC20WithSignature",
          "inputs": [
            {
              "type": "tuple",
              "name": "req",
              "components": [
                {
                  "type": "bytes32",
                  "name": "uid",
                  "internalType": "bytes32"
                },
                {
                  "type": "address",
                  "name": "tokenAddress",
                  "internalType": "address"
                },
                {
                  "type": "uint256",
                  "name": "expirationTimestamp",
                  "internalType": "uint256"
                },
                {
                  "type": "tuple[]",
                  "name": "contents",
                  "components": [
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "amount",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct Airdrop.AirdropContentERC20[]"
                }
              ],
              "internalType": "struct Airdrop.AirdropRequestERC20"
            },
            {
              "type": "bytes",
              "name": "signature",
              "internalType": "bytes"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "airdropERC721",
          "inputs": [
            {
              "type": "address",
              "name": "_tokenAddress",
              "internalType": "address"
            },
            {
              "type": "tuple[]",
              "name": "_contents",
              "components": [
                {
                  "type": "address",
                  "name": "recipient",
                  "internalType": "address"
                },
                {
                  "type": "uint256",
                  "name": "tokenId",
                  "internalType": "uint256"
                }
              ],
              "internalType": "struct Airdrop.AirdropContentERC721[]"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "airdropERC721WithSignature",
          "inputs": [
            {
              "type": "tuple",
              "name": "req",
              "components": [
                {
                  "type": "bytes32",
                  "name": "uid",
                  "internalType": "bytes32"
                },
                {
                  "type": "address",
                  "name": "tokenAddress",
                  "internalType": "address"
                },
                {
                  "type": "uint256",
                  "name": "expirationTimestamp",
                  "internalType": "uint256"
                },
                {
                  "type": "tuple[]",
                  "name": "contents",
                  "components": [
                    {
                      "internalType": "address",
                      "name": "recipient",
                      "type": "address"
                    },
                    {
                      "internalType": "uint256",
                      "name": "tokenId",
                      "type": "uint256"
                    }
                  ],
                  "internalType": "struct Airdrop.AirdropContentERC721[]"
                }
              ],
              "internalType": "struct Airdrop.AirdropRequestERC721"
            },
            {
              "type": "bytes",
              "name": "signature",
              "internalType": "bytes"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "airdropNativeToken",
          "inputs": [
            {
              "type": "tuple[]",
              "name": "_contents",
              "components": [
                {
                  "type": "address",
                  "name": "recipient",
                  "internalType": "address"
                },
                {
                  "type": "uint256",
                  "name": "amount",
                  "internalType": "uint256"
                }
              ],
              "internalType": "struct Airdrop.AirdropContentERC20[]"
            }
          ],
          "outputs": [],
          "stateMutability": "payable"
        },
        {
          "type": "function",
          "name": "claimERC1155",
          "inputs": [
            {
              "type": "address",
              "name": "_token",
              "internalType": "address"
            },
            {
              "type": "address",
              "name": "_receiver",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "_tokenId",
              "internalType": "uint256"
            },
            {
              "type": "uint256",
              "name": "_quantity",
              "internalType": "uint256"
            },
            {
              "type": "bytes32[]",
              "name": "_proofs",
              "internalType": "bytes32[]"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "claimERC20",
          "inputs": [
            {
              "type": "address",
              "name": "_token",
              "internalType": "address"
            },
            {
              "type": "address",
              "name": "_receiver",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "_quantity",
              "internalType": "uint256"
            },
            {
              "type": "bytes32[]",
              "name": "_proofs",
              "internalType": "bytes32[]"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "claimERC721",
          "inputs": [
            {
              "type": "address",
              "name": "_token",
              "internalType": "address"
            },
            {
              "type": "address",
              "name": "_receiver",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "_tokenId",
              "internalType": "uint256"
            },
            {
              "type": "bytes32[]",
              "name": "_proofs",
              "internalType": "bytes32[]"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "contractURI",
          "inputs": [],
          "outputs": [
            {
              "type": "string",
              "name": "",
              "internalType": "string"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "eip712Domain",
          "inputs": [],
          "outputs": [
            {
              "type": "bytes1",
              "name": "fields",
              "internalType": "bytes1"
            },
            {
              "type": "string",
              "name": "name",
              "internalType": "string"
            },
            {
              "type": "string",
              "name": "version",
              "internalType": "string"
            },
            {
              "type": "uint256",
              "name": "chainId",
              "internalType": "uint256"
            },
            {
              "type": "address",
              "name": "verifyingContract",
              "internalType": "address"
            },
            {
              "type": "bytes32",
              "name": "salt",
              "internalType": "bytes32"
            },
            {
              "type": "uint256[]",
              "name": "extensions",
              "internalType": "uint256[]"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "initialize",
          "inputs": [
            {
              "type": "address",
              "name": "_defaultAdmin",
              "internalType": "address"
            },
            {
              "type": "string",
              "name": "_contractURI",
              "internalType": "string"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "isClaimed",
          "inputs": [
            {
              "type": "address",
              "name": "_receiver",
              "internalType": "address"
            },
            {
              "type": "address",
              "name": "_token",
              "internalType": "address"
            },
            {
              "type": "uint256",
              "name": "_tokenId",
              "internalType": "uint256"
            }
          ],
          "outputs": [
            {
              "type": "bool",
              "name": "",
              "internalType": "bool"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "owner",
          "inputs": [],
          "outputs": [
            {
              "type": "address",
              "name": "",
              "internalType": "address"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "processed",
          "inputs": [
            {
              "type": "bytes32",
              "name": "",
              "internalType": "bytes32"
            }
          ],
          "outputs": [
            {
              "type": "bool",
              "name": "",
              "internalType": "bool"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "setContractURI",
          "inputs": [
            {
              "type": "string",
              "name": "_uri",
              "internalType": "string"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "setMerkleRoot",
          "inputs": [
            {
              "type": "address",
              "name": "_token",
              "internalType": "address"
            },
            {
              "type": "bytes32",
              "name": "_tokenMerkleRoot",
              "internalType": "bytes32"
            },
            {
              "type": "bool",
              "name": "_resetClaimStatus",
              "internalType": "bool"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "setOwner",
          "inputs": [
            {
              "type": "address",
              "name": "_newOwner",
              "internalType": "address"
            }
          ],
          "outputs": [],
          "stateMutability": "nonpayable"
        },
        {
          "type": "function",
          "name": "tokenConditionId",
          "inputs": [
            {
              "type": "address",
              "name": "",
              "internalType": "address"
            }
          ],
          "outputs": [
            {
              "type": "uint256",
              "name": "",
              "internalType": "uint256"
            }
          ],
          "stateMutability": "view"
        },
        {
          "type": "function",
          "name": "tokenMerkleRoot",
          "inputs": [
            {
              "type": "address",
              "name": "",
              "internalType": "address"
            }
          ],
          "outputs": [
            {
              "type": "bytes32",
              "name": "",
              "internalType": "bytes32"
            }
          ],
          "stateMutability": "view"
        }
      ] // ABI details here
  ]);

  const claimConditions = [
    {
      startTime: new Date(),
      maxQuantity: ethers.utils.parseUnits("20000000", 18), // Total tokens available to claim
      quantityLimitPerTransaction: ethers.utils.parseUnits("2020", 18), // Tokens per claim
      waitTimeInSecondsBetweenClaims: 0,
      merkleRootHash: "0x07d77a69c2ce693f6dbb6a24d541482e85684f74f17d636788aa6b3568bc9d6c", // Replace with your Merkle root hash
      pricePerToken: ethers.utils.parseUnits("0", 18), // Free claim
      currency: ethers.constants.AddressZero,
    },
  ];

  await contract.claimConditions.set(claimConditions);

  console.log("Claim conditions set!");
})();
