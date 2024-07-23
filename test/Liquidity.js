const { expect } = require("chai");
const { ethers } = require("hardhat");

const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

const DAI_WHALE = ("0x28C6c06298d514Db089934071355E5743bf21d60");
const USDC_WHALE = ("0x28C6c06298d514Db089934071355E5743bf21d60");

describe("LiquidityExamples", () => {
    let liquidityExamples;
    let accounts;
    let dai;
    let usdc;

    before(async () => {
        accounts = await ethers.getSigners();

        const LiquidityExamples = await ethers.deployContract("LiquidityExamples");
        liquidityExamples = await LiquidityExamples.waitForDeployment();

        dai = await ethers.getContractAt("IERC20", DAI);
        usdc = await ethers.getContractAt("IERC20", USDC);

        // Unlock DAI and USDC Whales
        await network.provider.request({ method: "hardhat_impersonateAccount", params: [DAI_WHALE] });
        await network.provider.request({ method: "hardhat_impersonateAccount", params: [USDC_WHALE] });

        // Return a signer object
        const daiWhale = await ethers.getSigner(DAI_WHALE);
        const usdcWhale = await ethers.getSigner(USDC_WHALE);

        // Send DAI and USDC to accounts[0]
        const daiAmount = 1000n * 10n ** 18n;
        const usdcAmount = 1000n * 10n ** 6n; // USDC has 6 decimals

        const daiBal = await dai.balanceOf(daiWhale.address);
        const usdcBal = await usdc.balanceOf(usdcWhale.address);
        console.log(daiBal, usdcBal, daiAmount, usdcAmount);

        expect(daiBal).to.gte(daiAmount);
        expect(usdcBal).to.gte(usdcAmount);

        await dai.connect(daiWhale).transfer(accounts[0].address, daiAmount);
        await usdc.connect(usdcWhale).transfer(accounts[0].address, usdcAmount);
    });

    it("mintNewPosition", async () => {
        const daiAmount = 100n * 10n ** 18n;
        const usdcAmount = 100n * 10n ** 6n; // USDC has 6 decimals

        await dai.connect(accounts[0]).transfer(liquidityExamples, daiAmount);
        await usdc.connect(accounts[0]).transfer(liquidityExamples, usdcAmount);

        await liquidityExamples.mintNewPosition();

        console.log("DAI balance after adding liquidity", await dai.balanceOf(accounts[0].address));
        console.log("USDC balance after adding liquidity", await usdc.balanceOf(accounts[0].address));
    });
});

