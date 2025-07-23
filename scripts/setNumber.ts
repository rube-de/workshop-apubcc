import { ethers } from "hardhat";

async function main() {
  console.log("Deploying SecretStorage contract...");
  
  // Deploy the contract with constructor arguments
  const SecretStorage = await ethers.getContractFactory("SecretStorage");
  const secretStorage = await SecretStorage.deploy(12345, 42); // secretNumber and notSoSecretNumber
  await secretStorage.waitForDeployment();
  
  const address = await secretStorage.getAddress();
  console.log("SecretStorage deployed to:", address);

  // set secret number
  const newSecretNumber = 67890;
  console.log(`Setting secret number to: ${newSecretNumber}`);
  await secretStorage.setSecretNumber(newSecretNumber);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });