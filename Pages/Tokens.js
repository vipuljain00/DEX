import React, {useState, useEffect} from "react";
import Image from "next/image";

import Style from "../styles/Tokens.module.css";
import images from "../assets";
import {AllTokens} from "../Components/index";

const Tokens = ()=>{
    const [allTokenList, setAllTokenList] = useState([
        {
            number: 1,
            image: images.etherlogo,
            name: "Ether",
            symbol: "ETH",
            price: "$3400",
            change: "+ 265.6",
            tvl: "$1955.6 M",
            volume: "$469.5 M"
        },
        {
            number: 2,
            image: images.etherlogo,
            name: "USDC Coin",
            symbol: "USDc",
            price: "$12,546",
            change: "+ 2956.6",
            tvl: "$16195.6 M",
            volume: "$9659.5 M"
        },
        {
            number: 3,
            image: images.etherlogo,
            name: "Wrapped BTC",
            symbol: "WBTC",
            price: "$15,951",
            change: "+ 2616.6",
            tvl: "$8929.6 M",
            volume: "$916.5 M"
        },
        {
            number: 4,
            image: images.etherlogo,
            name: "Uniswap",
            symbol: "UNI",
            price: "$156.55",
            change: "+ 26.6",
            tvl: "$864.6 M",
            volume: "$91.5 M"
        }
    ]);

    const[copyAllTokenList, setCopyAllTokenList] = useState(allTokenList);
    const[searchItem, setSearchItem] = useState(search);

    const onHandleSearch = (value)=>{
        const filteredToken = allTokenList.filter(({name})=>{
            name.toLowerCase().includes(value.toLowerCase()) 
        });

        if(filteredToken.length === 0){
            setAllTokenList(copyAllTokenList);
        } else{
            setAllTokenList(filteredToken);
        }
        
    }
}
