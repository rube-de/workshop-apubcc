// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const GuessNumberModule = buildModule("GuessNumberModule", (m) => {
  // Deploy the GuessNumber contract
  const guessNumber = m.contract("GuessNumber", []);

  return { guessNumber };
});

export default GuessNumberModule;