const { expect } = require("chai");
const { ethers } = require("hardhat");

const DAI_address = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const WETH9_address = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const USDC_address = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

describe("SingleSwapToken", () => {
    let singleSwapToken;
    let accounts;
    let weth;
    let dai;
    let usdc;

    before(async () => {
        accounts = await ethers.getSigners();

        const SingleSwapToken = await ethers.deployContract("SingleSwapToken");
        singleSwapToken = await SingleSwapToken.waitForDeployment();

        // Get contract instances
        weth = await ethers.getContractAt("IWETH", WETH9_address);
        dai = await ethers.getContractAt("contracts/IERC20.sol:IERC20", DAI_address);
        usdc = await ethers.getContractAt("contracts/IERC20.sol:IERC20", USDC_address);

    });

    // it("swapExactInputSingle", async () => {
    //     try {
    //         console.log(`SingleSwapToken contract is deployed at ${await singleSwapToken.target}`);
    //         console.log(`WETH : ${weth.target}`);
    //         console.log(`DAI : ${dai.target}`);
    //         console.log(`USDC : ${usdc.target}`);
    //         console.log(`ACCOUNTS[0] : ${accounts[0].address}`);


    //         const amountIn = BigInt(10 ** 18);
    //         // Deposit and approve WETH
    //         await weth.deposit({ value: amountIn });
    //         await weth.approve(singleSwapToken.target, amountIn);
    //         // Perform the swap
    //         await singleSwapToken.swapExactInputSingle(amountIn);
    //         console.log(`Dai balance : ${await dai.balanceOf(accounts[0].address)}`);

    //     } catch (error) {
    //         console.error("Error in it block:", error);
    //         throw error; // Ensure test fails if it block fails
    //     }
    // });

    it("swapExactOutputSingle", async()=>{
        try{
            const wethAmountInMAx = BigInt(10**18);
            const daiAmountOut = BigInt(100 * 10 ** 18);

            // Deposit and approve WETH
            await weth.connect(accounts[1]).deposit({value: wethAmountInMAx});                   //function of WETH contract Signer deposits ETH and gets WETH in return
            await weth.connect(accounts[1]).approve(singleSwapToken.target, wethAmountInMAx);
            console.log(`Previous WETH balance : ${await weth.balanceOf(accounts[1].address)}`);

            //SWAP
            await singleSwapToken.connect(accounts[1]).swapExactOutputSingle(daiAmountOut, wethAmountInMAx);
            console.log(`DAI BALANCE : ${await dai.balanceOf(accounts[1].address)}`);
            console.log(`Remaining WETH balance : ${await weth.balanceOf(accounts[1].address)}`);

        } catch(error){
            console.error("Error in 2nd it block:", error);
            throw error;
        }
    })

});
