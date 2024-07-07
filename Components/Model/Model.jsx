import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import style from "./Model.module.css"
import images from "../../assets"

const Model = ({setOpenModel, connectWallet}) => {

  const walletMenu = ["Metamask", "Coinbase", "Wallet", "WalletConnect"]

  return (
    <div className={style.Model}>
      <div className={style.Model_Box}>

        <div className={style.Model_Box_heading}>
          <p>Connect a wallet</p>
          <div className={style.Model_Box_heading_img}>
            <Image src={images.close} alt='close icon' width={50} height={50} onClick={()=>{setOpenModel(false)}}/> 
          </div>
        </div>

        <div className={style.Model_Box_wallets}>
          {walletMenu.map((ele, i)=>(
            <p key={i+1} onClick={()=>connectWallet()}>{ele}</p>
          ))}
        </div>

        <div className={style.Model_Box_para}>
          <p>By connecting your wallet to this app, you agree to <br/>the app's Terms of Service and Privacy Policy</p>
        </div>
      </div>      
    </div>
  )
}

export default Model
