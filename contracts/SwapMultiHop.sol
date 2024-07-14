// SPDX-License-Identifier: GPL-2.0-or-Later
pragma solidity >=0.7.0 <0.9.0;
pragma abicoder v2;

import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";


contract SwapMultiHop {
    ISwapRouter public constant swapRouter = ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);   //uniswap v3 router contract address deployed on Ethereum Mainnet

    address public constant DAI_address = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
    address public constant WETH9_address = 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2;
    address public constant USDC_address = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;

    function swapExactInputMultihop(uint amountIn) external returns (uint amountOut){

        TransferHelper.safeTransferFrom(WETH9_address, msg.sender, address(this), amountIn);
        TransferHelper.safeApprove(WETH9_address, address(swapRouter), amountIn);

        ISwapRouter.ExactInputParams memory params = ISwapRouter.ExactInputParams({
            path: abi.encodePacked(WETH9_address, uint24(3000), USDC_address, uint24(100), DAI_address),
            recipient: msg.sender,
            deadline: block.timestamp,
            amountIn: amountIn,
            amountOutMinimum: 0
        });

        amountOut = swapRouter.exactInput(params);
    }

    function swapExactOutputMultihop(uint amounOut, uint amounInMaximum) external returns (uint amountIn){

        TransferHelper.safeTransferFrom(WETH9_address, msg.sender, address(this), amounInMaximum);
        TransferHelper.safeApprove(WETH9_address, address(swapRouter), amounInMaximum);

        ISwapRouter.ExactOutputParams memory params = ISwapRouter.ExactOutputParams({
            path: abi.encodePacked( DAI_address, uint24(100), USDC_address, uint24(3000), WETH9_address),
            recipient: msg.sender,
            deadline: block.timestamp,
            amountOut: amounOut,
            amountInMaximum: amounInMaximum
        });

        amountIn = swapRouter.exactOutput(params);

        if(amountIn < amounInMaximum){
            TransferHelper.safeApprove(WETH9_address, address(swapRouter), 0);
            TransferHelper.safeTransferFrom(WETH9_address, address(this), msg.sender, amounInMaximum - amountIn);
        }
    }
}