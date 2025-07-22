import {ethers} from "hardhat";

async function main() {
    console.log("Deploying GuessNumber contract...");

    const GuessNumber = await ethers.getContractFactory("GuessNumber");
    const guessNumber = await GuessNumber.deploy();
    await guessNumber.waitForDeployment();

    console.log("GuessNumber deployed to:", guessNumber.target);

    // Guess number
    await guessNumber.guess(0);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });