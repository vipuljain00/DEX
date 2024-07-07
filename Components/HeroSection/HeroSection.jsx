import React, {useContext, useState} from 'react'
import images from '../../assets'
import Image from 'next/image'
import style from './HeroSection.module.css'
import {Token, SearchToken} from "../index"

const HeroSection = ({accounts, tokenData}) => {

  const [openSetting, setOpenSetting] = useState(false)
  const [openToken, setOpenToken] = useState(false)
  const [openTokensTwo, setOpenTokensTwo] = useState(false)

  const [tokenOne, setTokenOne] = useState({
    name: "",
    image: "";
  })
  const [tokenTwo, setTokenTwo] = useState({
    name: "",
    image: "";
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

        <div className={style.HeroSection_Box_}></div>
      </div>
    </div>
  )
}

export default HeroSection
