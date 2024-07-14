const { expect } = require("chai");
const { ethers } = require("hardhat");

const DAI_address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const WETH9_address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const USDC_address = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

describe("SwapMultiHop", () => {
    let swapMultiHop;
    let accounts;
    let weth;
    let dai;
    let usdc;

    before(async () => {
        accounts = await ethers.getSigners();

        const SwapMultiHop = await ethers.deployContract("SwapMultiHop");
        swapMultiHop = await SwapMultiHop.waitForDeployment();

        // Get contract instances
        weth = await ethers.getContractAt("IWETH", WETH9_address);
        dai = await ethers.getContractAt("contracts/IERC20.sol:IERC20", DAI_address);
        usdc = await ethers.getContractAt("contracts/IERC20.sol:IERC20", USDC_address);

    });

    it("swapExactInputMultihop", async () => {
        try {
            
            console.log(`SwapMultiHop contract is deployed at ${await swapMultiHop.target}`);
            console.log(`WETH : ${weth.target}`);
            console.log(`DAI : ${dai.target}`);
            console.log(`USDC : ${usdc.target}`);
            console.log(`ACCOUNTS[0] : ${accounts[0].address}`);


            const amountIn = BigInt(10 ** 18);
            // Deposit and approve WETH
            await weth.deposit({ value: amountIn });
            await weth.approve(swapMultiHop.target, amountIn);
            // Perform the swap
            await swapMultiHop.swapExactInputMultihop(amountIn);
            console.log(`Dai balance : ${await dai.balanceOf(accounts[0].address)}`);

        } catch (error) {
            console.error("Error in it block:", error);
            throw error; // Ensure test fails if it block fails
        }
    });

    it("swapExactOutputMultihop", async()=>{
        try{
            const wethAmountInMAx = BigInt(10**18);
            const daiAmountOut = BigInt(100 * 10 ** 18);

            // Deposit and approve WETH
            await weth.deposit({value: wethAmountInMAx});                   //function of WETH contract Signer deposits ETH and gets WETH in return
            await weth.approve(swapMultiHop.target, wethAmountInMAx);
            console.log(`Previous WETH balance : ${await weth.balanceOf(accounts[0].address)}`);

            //SWAP
            await swapMultiHop.swapExactOutputMultihop(daiAmountOut, wethAmountInMAx);
            console.log(`DAI BALANCE : ${await dai.balanceOf(accounts[0].address)}`);
            console.log(`Remaining WETH balance : ${await weth.balanceOf(accounts[0].address)}`);

        } catch(error){
            console.error("Error in 2nd it block:", error);
            throw error;
        }
    });

});
