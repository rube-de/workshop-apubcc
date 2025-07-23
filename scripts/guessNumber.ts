import {ethers} from "hardhat";

async function main() {
    
    const contractAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707"
    const guessNumber = await ethers.getContractAt("GuessNumber", contractAddress);
    
    const guess = 8;
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