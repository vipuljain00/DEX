import react , { useState, useEffect } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

import { 
    checkIfWalletConnected, 
    connectWallet, 
    connectingWithVipToken, 
    connectingWithLifeToken, 
    connectingWithSingleSwap, 
    connectingWithMultiHop, 
    connectingWithIWETH, 
    connectingWithDAI
} from "../Utils/apiFeature" ;

import {
    VipTokenAddress,
    VipTokenABI,
    VipTokenName,
    LifeTokenAddress,
    LifeTokenABI,
    WETHAddress,
    IWETHABI,
    ERC20ABI,
    // IERC20ABI
} from "./constants";
import React from "react";




export const SwapTokenContext = React.createContext();

export const SwapTokenContextProvider = ({children})=>{

    const [account, setAccount] = useState('');
    const [ether, setEther] = useState("");
    const [networkConnect, setNetworkConnect] = useState('');
    const [weth9, setWeth9] = useState("");
    const [dai, setDai] = useState("");
    const [tokenData, setTokenData] = useState([]);
   
    const addToken = [
        {name: "WETH", address: WETHAddress, abi: ERC20ABI},   //WETH
        {name: "VIP", address: VipTokenAddress, abi: ERC20ABI},   //VIP
        {name: "LIF", address: LifeTokenAddress, abi: ERC20ABI},   //LIF
    ];

    
    //FETCH DATA
    const fetchingData = async()=>{
        try {
            //GET USER ACCOUNT
            const userAccount = await checkIfWalletConnected();
            setAccount(userAccount);
            console.log("userAccount: ", userAccount);                      //OK

            //CREATE PROVIDER
            const web3modal = new Web3Modal();
            const connection = await web3modal.connect();
            const provider = new ethers.BrowserProvider(connection);
            

            //CHECK BALANCE
            const balance = await provider.getBalance(userAccount);
            const balanceInEther = ethers.formatEther(balance);
            console.log("Balance: ", balanceInEther);                       //OK
            setEther(balanceInEther);

            //GET NETWORK NAME
            const network = await provider.getNetwork();
            setNetworkConnect(network.name);
            console.log("Network : ", network);

            //All Token Balance and Data
            addToken.map(async(el, i)=>{

                //GETTING CONTRACT
                const contract = new ethers.Contract(el.address, el.abi, provider);                              //using ERC20ABI coz it has functions for getting name and symbol             
                console.log(`Contract ${el.name} :`, contract);             //OK

                //GETTING BALANCE OF TOKENS USING THEIR CONTRACT
                const _userBalance = await contract.balanceOf(userAccount);                                 //balanceOf method is a part of ERC20 
                const userBalanace = ethers.formatEther(_userBalance);    
                console.log(`userBalance for contract ${el.name} : `, userBalanace);    //OK
                  
                //GET NAME AND SYMBOL
                const symbol = await contract.symbol();
                const name = await contract.name();

                if(userBalanace !== "0.0"){
                    tokenData.push({
                        name: name,
                        symbol: symbol,
                        tokenBalance: userBalanace,
                    });
                }
            });
            console.log(tokenData);                                         //OK
            // setTokenData([]);

            //DAI and WETH Balance
            try {
                //DAI BALANCE
                const daiContract = await connectingWithDAI();
                console.log(daiContract);                                       
                if (!daiContract) {
                    throw new Error("DAI contract instance is not available.");
                }
                if (!ethers.isAddress(userAccount)) {
                    throw new Error("Invalid address provided.");
                }
                const daiBal = await daiContract.balanceOf(userAccount);
                const daiBalance = ethers.formatEther(daiBal);
                console.log(`DAI Balance : ${daiBalance}`);
                setDai(daiBalance);

            
                //WETH BALANCE
                const wethContract = await connectingWithIWETH();
                console.log(wethContract);
                if (!wethContract) {
                    throw new Error("WETH contract instance is not available.");
                }
                if (!ethers.isAddress(userAccount)) {
                    throw new Error("Invalid address provided.");
                }

                const wethBal = await wethContract.balanceOf(userAccount);
                const wethBalance = ethers.formatEther(wethBal);
                console.log(`WETH Balance : ${wethBalance}`);
                setWeth9(wethBalance);

            } catch (error) {
                console.error(error);                
            }


        }catch (error) {
            console.error(error);
        }
    }


    // useEffect(()=>{
    //     fetchingData();
    // }, []);

    //SINGLE SWAP TOKEN
    const singleSwapToken = async()=>{
        try {
           
            let singleSwapContract;
            let weth;
            let dai;

            singleSwapContract = await connectingWithSingleSwap();
            // console.log("SingleSwapContract: ", singleSwapContract);
            weth = await connectingWithIWETH();
            // console.log("WethContract: ", weth);
            dai = await connectingWithDAI();
            // console.log("DaiContract: ", dai);

            const amountIn = BigInt(10**18);

            await weth.deposit({value: amountIn});
            await weth.approve(singleSwapContract, amountIn);
            //SWAP
            await singleSwapContract.swapExactInputSingle(amountIn, {gasLimit: 300000});
            
            const balance = await dai.balanceOf(account);
            const ethValue = ethers.formatEther(balance);
            setDai(ethValue);
            console.log("DAI Balnance: ", ethValue);


        } catch (error) {
            console.error(error);
        }
    }



    return(
        <SwapTokenContext.Provider value={{ account, weth9, dai, networkConnect, ether, connectWallet, tokenData, singleSwapToken }}>
            {children}
        </SwapTokenContext.Provider>
    );
    
};
