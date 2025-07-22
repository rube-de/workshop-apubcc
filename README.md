# Oasis Sapphire Test Project

This project demonstrates smart contract development on the Oasis Sapphire network, showcasing its confidential computing and cryptographic capabilities.

## Contracts

### SecretStorage.sol
A simple contract demonstrating data visibility in EVM:
- `secretNumber`: Private variable (not truly secret on normal EVM, but on Sapphire)
- `notSoSecretNumber`: Public variable with automatic getter
- Shows that private variables can still be read from blockchain storage

### GuessNumber.sol
A guessing game utilizing Sapphire's cryptographic features:
- Uses `Sapphire.randomBytes()` to generate a secure random number (0-9)
- Demonstrates Sapphire's built-in cryptographic capabilities
- Provides feedback if guess is too high or too low

## Scripts

### testNumber.ts
Deploys and tests the SecretStorage contract:
```bash
npx hardhat run scripts/testNumber.ts
```
- Deploys SecretStorage with constructor arguments
- Reads the public `notSoSecretNumber` value
- Demonstrates reading "private" storage directly from blockchain

### guessNumber.ts
Interacts with a deployed GuessNumber contract:
```bash
npx hardhat run scripts/guessNumber.ts --network sapphire-localnet
```
- Makes guesses against the secret number
- Shows the guess feedback (too big/too small/correct)

## Deployment with Hardhat Ignition

### Deploy GuessNumber
```bash
# Deploy to Sapphire localnet
npx hardhat ignition deploy ./ignition/modules/GuessNumber.ts --network sapphire-localnet
```

**Note**: GuessNumber requires Sapphire's cryptographic functions and will fail on standard Hardhat network. Use `sapphire-localnet`.

## Network Configuration

The project is configured for:
- **localhost**: Standard Hardhat network (doesn't support Sapphire features)
- **sapphire-localnet**: Local Sapphire network for testing (supports all Sapphire features)

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run Sapphire localnet (if testing locally):
```bash
docker run -it -p8545:8545 -p8546:8546 ghcr.io/oasisprotocol/sapphire-localnet
```

## Common Commands

```bash
# Compile contracts
npx hardhat compile

# Run tests
npx hardhat test

# Deploy with Ignition
npx hardhat ignition deploy ./ignition/modules/GuessNumber.ts --network sapphire-localnet

# Run scripts
npx hardhat run scripts/testNumber.ts
npx hardhat run scripts/guessNumber.ts --network sapphire-localnet
```
