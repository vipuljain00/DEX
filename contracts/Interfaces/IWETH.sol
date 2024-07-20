// SPDX-License-Identifier: GPL-2.0-or-Later
pragma solidity ^0.8.24;

interface IWETH{
    
    function deposit() external payable;
    function withdraw(uint) external;
    function totalSupply() view external returns(uint);
    function balanceOf(address account) external view returns(uint);
    function transfer(address recipient, uint amount) external view returns(uint);
    function allowance(address spender, uint amount) external returns(bool);
    function approve(address spender, uint amount) external returns(bool);
    function transferFrom(address sender, address recipient, uint amount) external returns(bool);

    event Transfer(address indexed from, address indexed to, uint value);
    event Approve(address indexed owner, address indexed spender, uint value);
}

