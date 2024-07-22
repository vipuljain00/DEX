const VipToken = require ("./VipToken.json");
const LifeToken = require ("./LifeToken.json"); 
const SingleSwapToken = require ("./SingleSwapToken.json"); 
const SwapMultiHop = require ("./SwapMultiHop.json"); 
const IWETH = require ("./IWETH.json");
const ERC20 = require ("./ERC20.json");
const IERC20 = require("./IERC20.json");
const DAI = require("./DaiToken.json");

//VIP Token
export const VipTokenAddress = "0x01c93598EeC9131C05a2450Cd033cbd8F82da31e";
export const VipTokenABI = VipToken.abi;

//LIF Token
export const LifeTokenAddress = "0x0C8542AB89c1C60D711B00F309f7EF63b5D9d6eb";
export const LifeTokenABI = LifeToken.abi;

//SingleSwapToken
export const SingleSwapTokenAddress = "0x1F2C6E90F3DF741E0191eAbB1170f0B9673F12b3";
export const SingleSwapTokenABI = SingleSwapToken.abi;

//SwapMultiHop
export const SwapMultiHopAddress = "0xE57A305f34fD0B6A55A66e8ec9559e6573100cBe";
export const SwapMultiHopABI = SwapMultiHop.abi;

//IWETH
export const WETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"; 
export const IWETHABI = IWETH.abi;

export const ERC20ABI = ERC20.abi;

export const IERC20ABI = IERC20.abi;

//DaiToken
export const DAIAddress = "0x33f4f8bf90d8AA3d19fF812B50e79c15Df0d0b03";      //for local devlopment
// export const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
export const DAIABI = DAI.abi;

// VIP token deployed to 0x01c93598EeC9131C05a2450Cd033cbd8F82da31e
// LIF token deployed to 0x0C8542AB89c1C60D711B00F309f7EF63b5D9d6eb
// Dai token deployed to 0x33f4f8bf90d8AA3d19fF812B50e79c15Df0d0b03
// Single_Swap deployed to 0x1F2C6E90F3DF741E0191eAbB1170f0B9673F12b3
// Multihop_Swap deployed to 0xE57A305f34fD0B6A55A66e8ec9559e6573100cBe