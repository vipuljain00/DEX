const {expect} = require("chai");
const {ethers} = require("hardhat");

const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const USDC = "0xA0b86991c6218b36c1d19D4a2e9eb0CE3606eB48";
const DAI_WHALE = "0x97f991971a37D4Ca58064e6a98FC563f03A71E5c";
const USDC_WHALE = "0x97f991971a37D4Ca58064e6a98FC563f03A71E5c";

describe("LiquidityExamples", ()=>{
    let liquidityExamples;
    let accounts;
    let dai;
    let usdc;

    before(async()=>{
        accounts = await ethers.getSigners();

        const LiquidityExamples = await ethers.deployContract("LiquidityExamples");
        liquidityExamples = await LiquidityExamples.waitForDeployment();

        dai = await ethers.getContractAt("IERC20", DAI);
        usdc = await ethers.getContractAt("IERC20", USDC);

        // Unlock DAI and USDC Whales
        await network.provider.request({ method: "hardhat_impersonateAccount", params: [DAI_WHALE] });
        await network.provider.request({ method: "hardhat_impersonateAccount", params: [USDC_WHALE] });
        //return a signer object, This signer object allows us to perform actions as if we are the DAI whale account, like sending transactions or interacting with smart contracts.
        const daiWhale = await ethers.getSigner(DAI_WHALE);
        const usdcWhale = await ethers.getSigner(USDC_WHALE);


        // Send DAI and USDC to account[0]
        const daiAmount = BigInt(1000*10 ** 18);
        const usdcAmount = BigInt(1000*10 ** 18);

        const daiBal = await dai.balanceOf(daiWhale.address);
        const usdcBal = await usdc.balanceOf(usdcWhale.address);
        console.log(daiBal, usdcBal, daiAmount, usdcAmount);

        expect(daiBal).to.gte(daiAmount);
        expect(usdcBal).to.gte(usdcAmount);

        await dai.connect(daiWhale).transfer(accounts[0].address, daiAmount);
        await usdc.connect(usdcWhale).transfer(accounts[0].address, usdcAmount);   
    });
})
