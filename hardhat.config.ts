import { HardhatUserConfig } from "hardhat/config";
// import "@oasisprotocol/sapphire-hardhat";
import "@nomicfoundation/hardhat-toolbox";

const accounts = process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : {
  mnemonic: "test test test test test test test test test test test junk",
  path: "m/44'/60'/0'/0",
  initialIndex: 0,
  count: 20,
  passphrase: "",
};

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    localhost: { // Default Hardhat network
      url: "http://localhost:8545",
      chainId: 1337,
      accounts,
    },
    "sapphire-localnet": { // Sapphire localnet docker
      url: "http://localhost:8545",
      chainId: 0x5afd,
      accounts,
    },
  },
};

export default config;
