const VipToken = require ("./VipToken.json");
const LifeToken = require ("./LifeToken.json"); 
const SingleSwapToken = require ("./SingleSwapToken.json"); 
const SwapMultiHop = require ("./SwapMultiHop.json"); 
const IWETH = require ("./IWETH.json");
const ERC20 = require ("./ERC20.json");
// const IERC20 = require("./IERC20.json");

//VIP Token
export const VipTokenAddress = "0x06786bCbc114bbfa670E30A1AC35dFd1310Be82f";
export const VipTokenABI = VipToken.abi;

//LIF Token
export const LifeTokenAddress = "0x72F853E9E202600c5017B5A060168603c3ed7368";
export const LifeTokenABI = LifeToken.abi;

//SingleSwapToken
export const SingleSwapTokenAddress = "0x82Bd83ec6D4bCC8EaB6F6cF7565efE1e41D92Ce5";
export const SingleSwapTokenABI = SingleSwapToken.abi;

//SwapMultiHop
export const SwapMultiHopAddress = "0xD61210E756f7D71Cc4F74abF0747D65Ea9d7525b";
export const SwapMultiHopABI = SwapMultiHop.abi;

//IWETH
export const WETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
export const IWETHABI = IWETH.abi;

export const ERC20ABI = ERC20.abi;

// export const IERC20ABI = IERC20.abi;

// VIP token deployed to 0x06786bCbc114bbfa670E30A1AC35dFd1310Be82f        
// LIF token deployed to 0x72F853E9E202600c5017B5A060168603c3ed7368        
// Single_Swap deployed to 0x82Bd83ec6D4bCC8EaB6F6cF7565efE1e41D92Ce5      
// Multihop_Swap deployed to 0xD61210E756f7D71Cc4F74abF0747D65Ea9d7525b