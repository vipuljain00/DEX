const hre = require("hardhat");

async function main() {

    const gasSettings = {
        maxFeePerGas: hre.ethers.parseUnits('30', 'gwei'), // Set to an appropriate value based on current network conditions
        maxPriorityFeePerGas: hre.ethers.parseUnits('2', 'gwei')
    };

    // ERC20 VIP Token
    // const VipToken = await hre.ethers.deployContract("VipToken", [], gasSettings);
    // const vipToken = await VipToken.waitForDeployment();
    // try {
    //     console.log(`VIP token deployed to ${vipToken.target}`);
    // } catch (error) {
    //     console.error("Error in deploying VipToken:", error);
    //     throw error;
    // }

    // ERC20 LIF Token
    // const LifeToken = await hre.ethers.deployContract("LifeToken", [], gasSettings);
    // const lifeToken = await LifeToken.waitForDeployment();
    // try {
    //     console.log(`LIF token deployed to ${lifeToken.target}`);
    // } catch (error) {
    //     console.error("Error in deploying LifeToken:", error);
    //     throw error;
    // }

    // ERC20 DAI Token
    // const DaiToken = await hre.ethers.deployContract("DaiToken", [], gasSettings);
    // const daiToken = await DaiToken.waitForDeployment();
    // try {
    //     console.log(`Dai token deployed to ${daiToken.target}`);
    // } catch (error) {
    //     console.error("Error in deploying DaiToken:", error);
    //     throw error;
    // }

    // SingleSwap
    const SingleSwapToken = await hre.ethers.deployContract("SingleSwapToken", [], gasSettings);
    const singleSwapToken = await SingleSwapToken.waitForDeployment();
    try {
        console.log(`Single_Swap deployed to ${singleSwapToken.target}`);
    } catch (error) {
        console.error("Error in deploying SingleSwap:", error);
        throw error;
    }

    // Multihop Swap
    // const SwapMultiHop = await hre.ethers.deployContract("SwapMultiHop", [], gasSettings);
    // const swapMultiHop = await SwapMultiHop.waitForDeployment();
    // try {
    //     console.log(`Multihop_Swap deployed to ${swapMultiHop.target}`);
    // } catch (error) {
    //     console.error("Error in deploying Multihop_Swap:", error);
    //     throw error;
    // }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
