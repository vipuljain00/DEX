import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import images from '../../assets'
import style from './Token.module.css'
import {Toggle} from '../index'

const Token = ({setOpenSetting}) => {
  return (
    <div className={style.Token}>
      
      <div className={style.Token_Box}>
        
        <div className={style.Token_Box_heading}>
            <h4>Settings</h4>
            <Image src={images.close} alt='close' width={50} height={50} onClick={()=>setOpenSetting(false)} />
        </div>

        <p className={style.Token_Box_para}>
            Slippage Tolerance{""}
            <Image src={images.lock} alt='img' width={20} height={20} />
        </p>

        <div className={style.Token_Box_input}>
            <button>Auto</button>
            <input type='text' placeholder='0.10%' />
        </div>

        <p className={style.Token_Box_para}>
            Slippage Tolerance{""}
            <Image src={images.lock} alt='img' width={20} height={20} />
        </p>

        <div className={style.Token_Box_input}>
            <input type='text' placeholder='20' />
            <button>minutes</button>
        </div>

        <h2>Interface Settings</h2>

        <div className={style.Token_Box_toggle}>
            <p className={style.Token_Box_para}>Transaction deadline</p>
            <Toggle label="No" />
        </div>

      </div>

    </div>
  )
}

export default Token
