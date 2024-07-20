// SPDX-License-Identifier: GPL-2.0-or-Later
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol" ;

contract VipToken is ERC20 {

    constructor() ERC20("VIP", "Vip"){
        _mint(msg.sender, 100000  * 10 ** decimals());
    }
} 