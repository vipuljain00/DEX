// SPDX-License-Identifier: GPL-2.0-or-Later
pragma solidity >=0.7.0 <0.9.0;
pragma abicoder v2;

import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";

contract SingleSwapToken {
    ISwapRouter public constant swapRouter = ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);   //uniswap v3 router contract address deployed on Ethereum Mainnet

    address public constant DAI_address = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public constant WETH9_address = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address public constant USDC_address = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

    function swapExactInputString(uint amountIn) external returns(uint amountOut){

        TransferHelper.safeTransferFrom(WETH9_address, msg.sender, address(this), amountIn);
        TransferHelper.safeApprove(WETH9_address, address(swapRouter), amountIn);

        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter.ExactInputSingleParams({
            tokenIn: WETH9_address,
            tokenOut: DAI_address,
            fee: 3000,    //at production level it should never be hardCoded
            recipient: msg.sender,
            deadline: block.timestamp,
            amountOutMinimum: 0,
            sqrtPriceLimitX96: 0
        });  

        amountOut = SwapRouter.exactInputSingle(params);
    }

    function swapExactInputString(uint amountOut, uint amountInMaximum) external returns(uint amountIn){

        TransferHelper.safeTransferFrom(WETH9_address, msg.sender, address(this), amountInMaximum)
        TransferHelper.safeApprove(WETH9_address, address(this), amountInMaximum)

        ISwapRouter.ExactOutputSingleParams memory params = ISwapRouter.ExactOutputSingleParams({
            tokenIn: WETH9_address;
            tokenOut: DAI_address;
            recipient: msg.sender;
            fee: 3000;
            deadline: block.timestamp;
            amountOut: amountOut;
            amountInMaximum: amountInMaximum;
            sqrtPriceLimitX96: ;
        })

        swapRouter.exactOutputSingle(params)

        if(amountIn < amountInMaximum){
            TransferHelper.safeApprove(WETH9_address, addresss(swapRouter), 0);
            TransferHelper.safeTransferFrom(WETH9_address, msg.sender, amountInMaximum - amountIn)
        }
    }
}