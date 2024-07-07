import React from 'react'
import images from '../../assets'
import style from './TokenList.module.css'
import Image from 'next/image'

const TokenList = ({tokenData, setOpenTokenBox}) => {

  const Data = [1, 2, 3, 4, 5, 6, 7]

  return (
    <div className={style.TokenList}>
        <p className={style.TokenList_close} onClick={()=>setOpenTokenBox(false)}>
          <Image src={images.close} alt='Close' width={50} height={50}/>
        </p>
        <div className={style.TokenList_title}>
          <h2>Your Token List</h2>  
        </div>
        {Data.map((ele, i)=>(
          <div className={style.TokenList_box}>
            <div className={style.TokenList_box_info}>
              <p className={style.TokenList_box_info_symbol}>MSN</p>
              <p><span>20</span> Meson Coin</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default TokenList
TokenList