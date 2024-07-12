const { expect } = require("chai");
const { ethers } = require("hardhat");

const DAI_address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const WETH9_address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const USDC_address = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

describe("SingleSwapToken", ()=>{

    // this.timeout(60000);

    let singleSwapToken;
    let accounts;
    let weth;
    let dai;
    let usdc;

    before(async()=>{
        accounts = await ethers.getSigners();

        const SingleSwapToken = await ethers.getContractFactory("SingleSwapToken");
        singleSwapToken = await SingleSwapToken.deploy();
        
        weth = await ethers.getContractAt("IWETH", WETH9_address);
        dai = await ethers.getContractAt("IERC20", DAI_address);
        usdc = await ethers.getContractAt("IERC20", USDC_address);
        // console.log(weth);
        // console.log(dai);
        // console.log(usdc);
        // console.log(accounts);
        // console.log(singleSwapToken);
    });

    it("swapExactInputSingle", async()=>{
        const amountIn = BigInt(10 ** 18);
        
        // await weth.connect(accounts[0]).deposit({value: amounIn});
        // await weth.connect(accounts[0]).approve(singleSwapToken.address, amountIn);

        console.log(weth);
        console.log(dai);
        console.log(usdc);
        console.log(accounts);
        console.log(singleSwapToken);
    });
});