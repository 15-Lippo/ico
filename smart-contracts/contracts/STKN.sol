// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract STKN is ERC20 {
    constructor() ERC20("Lisprocoin", "LSP20") {
        _mint(msg.sender, 10000000000 * 1e18);
    }
}
