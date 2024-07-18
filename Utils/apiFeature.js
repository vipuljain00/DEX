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
    IWETHABI,
    IERC20ABI
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
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"});       //Prompts User to connect to Metmask - open the Dialog Box for connecting Wallet
        const firstAccount = accounts[0];
        return firstAccount;

    } catch (error) {
        console.log(error);
    }
};





//VipToken contract Fetching
export const fetchVIPContract = (signerorProvider)=>{
    return new ethers.Contract(VipTokenAddress, VipTokenABI, signerorProvider);
} 

//Connecting with VIP Token contract
export const connectingWithVipToken = async()=>{
    try {
        
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.BrowserProvider(connection);                                //.providers.Web3Provider chnged to BrowserProvider in latest version of Ether
        const signer = provider.getSigner();
        const contract = fetchVIPContract(signer);

    } catch (error) {
        console.log(error);
    }
}



//LifeToken contract Fetching
export const fetchLIFEContract = (signerorProvider)=>{
    return new ethers.Contract(LifeTokenAddress, LifeTokenABI, signerorProvider);
} 

//Connecting with LIFE Token contract
export const connectingWithLifeToken = async()=>{
    try {
        
        const web3modal = new Web3Modal();                                              //Initializes a new instance of Web3Modal
        const connection = await web3modal.connect();                                   //opens a modal dialog that allows the user to select and connect their wallet - upon connection, it returns a provider object
        const provider = new ethers.BrowserProvider(connection);                  // Converts the connection provider into an ethers.js provider -  allows interaction with the Ethereum blockchain through the ethers.js library
        const signer = provider.getSigner();                                            //in the ethers.js library represents an Ethereum account that can sign transactions and messages - used to send transactions with executing functions to the Ethereum network
        const contract = fetchLIFEContract(signer);                                     //represents a deployed smart contract on the Ethereum blockchain -  provides methods to interact with the contract’s functions

    } catch (error) {
        console.log(error);
    }
}



//SingleSwap Contract Fetching
export const fetchSingleSwapContract = (signerorProvider)=>{
    return new ethers.Contract(SingleSwapTokenAddress, SingleSwapTokenABI, signerorProvider);
} 

//Connecting with SingleSwap contract
export const connectingWithSingleSwap = async()=>{
    try {
        
        const web3modal = new Web3Modal();                                             
        const connection = await web3modal.connect();                                
        const provider = new ethers.BrowserProvider(connection);                 
        const signer = provider.getSigner();                                           
        const contract = fetchSingleSwapContract(signer);                                  

    } catch (error) {
        console.log(error);
    }
}



//SwapMultiHop Fetching
export const fetchMultiHopContract = (signerorProvider)=>{
    return new ethers.Contract(SwapMultiHopAddress, SwapMultiHopABI, signerorProvider);
} 

//Connecting with MultiHOp contract
export const connectingWithMultiHop = async()=>{
    try {
        
        const web3modal = new Web3Modal();                                             
        const connection = await web3modal.connect();                                
        const provider = new ethers.BrowserProvider(connection);                 
        const signer = provider.getSigner();                                           
        const contract = fetchMultiHopContract(signer);                                  

    } catch (error) {
        console.log(error);
    }
}



//IWETH Token Fetching
export const fetchIWETHContract = (signerorProvider)=>{
    return new ethers.Contract(IWETHAddress, IWETHABI, signerorProvider);
} 

//Connecting with IWETH contract
export const connectingWithIWETH = async()=>{
    try {
        
        const web3modal = new Web3Modal();                                             
        const connection = await web3modal.connect();                                
        const provider = new ethers.BrowserProvider(connection);                 
        const signer = provider.getSigner();                                           
        const contract = fetchIWETHContract(signer);                                  

    } catch (error) {
        console.log(error);
    }
}



//DAI Token Fetching
const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
export const fetchDAIContract = (signerorProvider)=>{
    return new ethers.Contract(DAIAddress, IERC20ABI, signerorProvider);
} 

//Connecting with DAI contract
export const connectingWithDAI = async()=>{
    try {
        
        const web3modal = new Web3Modal();                                             
        const connection = await web3modal.connect();                                
        const provider = new ethers.BrowserProvider(connection);                 
        const signer = provider.getSigner();                                           
        const contract = fetchDAIContract(signer);                                  

    } catch (error) {
        console.log(error);
    }
}