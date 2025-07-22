import {ethers} from "hardhat";

async function main() {
    
    const contractAddress = "0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9"
    const guessNumber = await ethers.getContractAt("GuessNumber", contractAddress);
    
    const guess = 7;
    console.log(`Guessing Number...${guess}`);
    await guessNumber.guess(guess);
    console.log("You guessed the number!");
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });