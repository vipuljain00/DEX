import react , { useState, useEffect } from "react";
import { ethers } from 'ethers';
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

import { ERC20ABI, IWETHABI } from "./constants";
import React from "react";




export const SwapTokenContext = React.createContext();

export const SwapTokenContextProvider = ({children})=>{

    const swap = "Welcome to swap my token";

    const [account, setAccount] = useState('');
    const [ether, setEther] = useState("");
    const [networkConnect, setNetworkConnect] = useState('');
    const [weth9, setWeth9] = useState("");
    const [dai, setDai] = useState("");
    const [tokenData, setTokenData] = useState([]);
   
    const addToken = [
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",   //WETH
        "0x06786bCbc114bbfa670E30A1AC35dFd1310Be82f",   //VIP
        "0x72F853E9E202600c5017B5A060168603c3ed7368",   //LIF
    ];

    
    //FETCH DATA
    const fetchingData = async()=>{
        try {
            //GET USER ACCOUNT
            const userAccount = await checkIfWalletConnected();
            setAccount(userAccount);
            console.log("userAccount: ", userAccount);

            //CREATE PROVIDER
            const web3modal = new Web3Modal();
            const connection = await web3modal.connect();
            const provider = new ethers.BrowserProvider(connection);

            //CHECK BALANCE
            const balance = await provider.getBalance(userAccount);
            const balanceInEther = ethers.formatEther(balance);
            console.log("Balance: ", balanceInEther);
           
            //All Token Balance and Data
            
            addToken.map(async(el, i)=>{
                //GETTING CONTRACT
                const contract = new ethers.Contract(el, ERC20ABI, provider);                              //using IERC20ABI coz it has functions for getting name and symbol             
                // const _userBalance = await contract.balanceOf(userAccount);                                 //balanceOf method is a part of IERC20 interface
                // const userBlanace = ethers.formatEther(_userBalance);
                console.log(`Contract ${i} :`, contract);    
                // console.log(`userBalance for contract ${i} : `, userBlanace);                            
            });

        }catch (error) {
            console.error(error);          
        }
    }


    useEffect(()=>{
        fetchingData();
    }, []);



    return(
        <SwapTokenContext.Provider value={{swap}}>
            {children}
        </SwapTokenContext.Provider>
    );
    
};
