const axios = require("axios");
// import {dotenv} from ("dotenv");
// dotenv.config();

// const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
// console.log("KEY: ",ETHERSCAN_API_KEY);

const ETHERSCAN_API_KEY = "";

export const getabi = async(address)=>{
    const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${address}&apikey=${ETHERSCAN_API_KEY}`;
    const res = await axios.get(url);
    const abi = JSON.parse(res.data.result);
    return abi;
}

exports.getPoolImmutables = async(poolContract) =>{
    const [token0, token1, fee] = await Promise.all([
        poolContract.token0(),
        poolContract.token1(),
        poolContract.fee()
    ])
}