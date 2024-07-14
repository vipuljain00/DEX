// scripts/deploy.js
const hre = require("hardhat");

async function main() {
  
    //ERC20 VIP Token
    const VipToken = await hre.ethers.deployContract("VipToken");
    const vipToken = await VipToken.waitForDeployment();
    try{
      console.log(`VIP token deployed to ${vipToken.target}`);
    } catch(error){
      console.error("Error in deploying VipToken:", error);
      throw error;
    } 
    

    //ERC20 LIF Token
    const LifeToken = await hre.ethers.deployContract("LifeToken");
    const lifeToken = await LifeToken.waitForDeployment();
    try{
      console.log(`LIF token deployed to ${lifeToken.target}`);
    } catch(error){
      console.error("Error in deploying LifeToken:", error);
      throw error;
    } 
    

    //SingleSwap 
    const SingleSwapToken = await hre.ethers.deployContract("SingleSwapToken");
    const singleSwapToken = await SingleSwapToken.waitForDeployment();
    try{
      console.log(`Single_Swap deployed to ${singleSwapToken.target}`);
    } catch(error){
      console.error("Error in deploying SingleSwap", error);
      throw error;
    }


    //Multihop Swap
    const SwapMultiHop = await hre.ethers.deployContract("SwapMultiHop");
    const swapMultiHop = await SwapMultiHop.waitForDeployment();
    try{
      console.log(`Multihop_Swap deployed to ${swapMultiHop.target}`);
    } catch(error){
      console.error("Error in deploying ultihop_Swap:", error);
      throw error;
    }
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });