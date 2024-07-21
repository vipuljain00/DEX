const VipToken = require ("./VipToken.json");
const LifeToken = require ("./LifeToken.json"); 
const SingleSwapToken = require ("./SingleSwapToken.json"); 
const SwapMultiHop = require ("./SwapMultiHop.json"); 
const IWETH = require ("./IWETH.json");
const ERC20 = require ("./ERC20.json");
const IERC20 = require("./IERC20.json");
const DAI = require("./DaiToken.json");

//VIP Token
export const VipTokenAddress = "0x72F853E9E202600c5017B5A060168603c3ed7368";
export const VipTokenABI = VipToken.abi;

//LIF Token
export const LifeTokenAddress = "0x82Bd83ec6D4bCC8EaB6F6cF7565efE1e41D92Ce5";
export const LifeTokenABI = LifeToken.abi;

//SingleSwapToken
export const SingleSwapTokenAddress = "0x7aB5cEee0Ff304b053CE1F67d84C33F0ff407a55";
export const SingleSwapTokenABI = SingleSwapToken.abi;

//SwapMultiHop
export const SwapMultiHopAddress = "0x26Df0Ea798971A97Ae121514B32999DfDb220e1f";
export const SwapMultiHopABI = SwapMultiHop.abi;

//IWETH
export const WETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"; 
export const IWETHABI = IWETH.abi;

export const ERC20ABI = ERC20.abi;

export const IERC20ABI = IERC20.abi;

//DaiToken
export const DAIAddress = "0xD61210E756f7D71Cc4F74abF0747D65Ea9d7525b";
export const DAIABI = DAI.abi;

// VIP token deployed to 0x72F853E9E202600c5017B5A060168603c3ed7368
// LIF token deployed to 0x82Bd83ec6D4bCC8EaB6F6cF7565efE1e41D92Ce5
// Dai token deployed to 0xD61210E756f7D71Cc4F74abF0747D65Ea9d7525b
// Single_Swap deployed to 0x7aB5cEee0Ff304b053CE1F67d84C33F0ff407a55
// Multihop_Swap deployed to 0x26Df0Ea798971A97Ae121514B32999DfDb220e1f