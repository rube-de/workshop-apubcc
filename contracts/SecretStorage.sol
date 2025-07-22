// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.20;

contract SecretStorage {
    int256 private secretNumber;
    int256 public notSoSecretNumber;

    constructor(int256 _secretNumber, int256 _notSoSecretNumber) {
        secretNumber = _secretNumber;
        notSoSecretNumber = _notSoSecretNumber;
    }
}