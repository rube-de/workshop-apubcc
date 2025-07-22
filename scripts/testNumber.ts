import { ethers } from "hardhat";

async function main() {
  console.log("Deploying SecretStorage contract...");
  
  // Deploy the contract with constructor arguments
  const SecretStorage = await ethers.getContractFactory("SecretStorage");
  const secretStorage = await SecretStorage.deploy(12345, 42); // secretNumber and notSoSecretNumber
  await secretStorage.waitForDeployment();
  
  const address = await secretStorage.getAddress();
  console.log("SecretStorage deployed to:", address);
  
  // Get the not-so-secret number
  const notSoSecretNumber = await secretStorage.notSoSecretNumber();
  console.log("Not so secret number:", notSoSecretNumber.toString());

//   // Get the secret number
//   const secretNumber = await secretStorage.secretNumber();
//   console.log("Secret number:", secretNumber.toString());

    const storageSlot = await ethers.provider.getStorage(address, 0)
    console.log(`Secret number value (decimal): ${parseInt(storageSlot, 16)}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });