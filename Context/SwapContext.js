import react , { useState, useEffect } from "react";
import { ethers} from 'ethers';
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

import { IWETHABI } from "./constants";
import { IERC20ABI } from "./constants";
import React from "react";

export const SwapTokenContext = React.createContext();

export const SwapTokenContextProvider = ({children})=>{

    const swap = "Welcome to swap my token";

    const [account, setAccount] = useState('');
    const [ether, setRther] = useState("");
    const [networkConnect, setNetworkConnect] = useState('');
    const [weth9, setWeth9] = useState("");
    const [dai, setDai] = useState("");

    const [tokenData, setTokenData] = useState([]);
    const addToken = ["0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2", "0x81f4f47aa3bBd154171C877b4d70F6C9EeCAb216", "0x2ce1F0e20C1f69E9d9AEA83b25F0cEB69e2AA2b5"];

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
        } catch (error) {
            console.log(error);           
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
