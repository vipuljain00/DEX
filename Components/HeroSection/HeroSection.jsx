import React, {useContext, useState} from 'react'
import images from '../../assets'
import Image from 'next/image'
import style from './HeroSection.module.css'
import {Token, SearchToken} from "../index"
//CONTEXT
import { SwapTokenContext } from '@/Context/SwapContext'

const HeroSection = ({accounts, tokenData}) => {

  const {connectWallet, singleSwapToken, ether, dai} = useContext(SwapTokenContext);

  const [openSetting, setOpenSetting] = useState(false)
  const [openToken, setOpenToken] = useState(false)
  const [openTokensTwo, setOpenTokensTwo] = useState(false)

  const [tokenOne, setTokenOne] = useState({
    name: "",
    image: ""
  })
  const [tokenTwo, setTokenTwo] = useState({
    name: "",
    image: ""
  })

  return (
    <div className={style.HeroSection}>
      <div className={style.HeroSection_Box}>

        <div className={style.HeroSection_Box_heading}>
          <p>Swap</p>
          <div className={style.HeroSection_Box_heading_img}>
            <Image src={images.close} alt='close' width={50} height={50} onClick={()=>setOpenSetting(true)} />
          </div>            
        </div>

        <div className={style.HeroSection_Box_input}>
          <input type='text' placeholder='0'/>
          <button onClick={()=>setOpenToken(true)}>
            <Image src={tokenOne.image || images.etherlogo} width={20} height={20} alt='ether'/>
            {tokenOne.name || "ETH"}
            <small>{ether.slice(0, 7)}</small>
          </button>
        </div>

        <div className={style.HeroSection_Box_input}>
          <input type='text' placeholder='0'/>
          <button onClick={()=>setOpenTokensTwo(true)}>
            <Image src={tokenTwo.image || images.etherlogo} width={20} height={20} alt='ether'/>
            {tokenTwo.name || "ETH"}
            <small>{dai.slice(0,7)}</small>
          </button>
        </div>


        {accounts ? (
          <button className={style.HeroSection_Box_btn} onClick={()=>singleSwapToken()}> Swap </button>
        ) : (
          <button className={style.HeroSection_Box_btn} onClick={()=>connectWallet()}>Connect Wallet</button>
        )}

      </div>

        {openSetting && (
          <Token setOpenSetting = {setOpenSetting} />
        )}

        {openToken && (
          <SearchToken 
          openToken = {setOpenToken} 
          tokens = {setTokenOne} 
          tokenData = {tokenData}/>
        )}

        {openTokensTwo && (
          <SearchToken 
          openToken = {setOpenTokensTwo} 
          tokens = {setTokenTwo} 
          tokenData = {tokenData}/>
        )}


    </div>
  )
}

export default HeroSection
