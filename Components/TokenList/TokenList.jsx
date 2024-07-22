import React from 'react'
import images from '../../assets'
import style from './TokenList.module.css'
import Image from 'next/image'
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants'

const TokenList = ({tokenData, setOpenTokenBox}) => {

  // const Data = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div className={style.TokenList_Holder}>
    <div className={style.TokenList}>
        
        <div className={style.TokenList_title}>
          <h2>Your Token List</h2>
          <Image src={images.close} alt='close' width={50} height={50} onClick={()=>setOpenTokenBox(false)}/>  
        </div>


        {tokenData.map((ele, i)=>(
          <div className={style.TokenList_box}>
            <div className={style.TokenList_box_info}>
              <p className={style.TokenList_box_info_symbol}>{ele.symbol}</p>
              <p><span>{ele.tokenBalance}</span>{ele.name}</p>
            </div>
          </div>
        ))}
    </div>
    </div>
  )
}

export default TokenList
TokenList