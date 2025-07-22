// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@oasisprotocol/sapphire-contracts/contracts/Sapphire.sol";

contract GuessNumber {
	uint256 private _num;

	constructor() {
    	_num = uint8(Sapphire.randomBytes(1, "")[0]) % 10;
	}

	function guess(uint256 num) external view returns (bool) {
    	if (num < _num) {
        	revert("too small");
    	}
    	if (num > _num) {
        	revert("too big");
    	}
    	return true;
	}
}
