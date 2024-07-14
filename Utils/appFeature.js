import {ethers} from "ethers";
import Web3Modal from "web3modal";

import{
    VipTokenAddress,
    VipTokenABI,
    LifeTokenAddress,
    LifeTokenABI,
    SingleSwapTokenAddress,
    SingleSwapTokenABI,
    SwapMultiHopAddress,
    SwapMultiHopABI,
    IWETHAddress,
    IWETHABI
} from "../Context/constants"


//Check if Wallet is Connected
export const checkIfWalletConnected = async()=>{
    try {

        if(!window.ethereum) return console.log("Install MetaMask");
        const accounts = await window.ethereum.request({method: "eth_accounts"});
        const firstAccount = accounts[0];
        return firstAccount;

    } catch (error) {
        console.log(error);
    }
};

//Connect Wallet
export const connectWallet = async()=>{
    try {
        
        if(!window.ethereum) return console.log("Install MetaMask");
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});
        const firstAccount = accounts[0];
        return firstAccount;

    } catch (error) {
        console.log(error);
    }
};

//VipToken contract Fetching
export const fetchVipTokenContract = (signerorProvider)=>{
    new ethers.Contract(VipTokenAddress, VipTokenABI, signerorProvider);
} 
//Connecting with VIP Token contract
export const connectingWithVipToken = async()=>{
    try {
        
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.provider.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchVipTokenContract(signer);

    } catch (error) {
        console.log(error);
    }
}