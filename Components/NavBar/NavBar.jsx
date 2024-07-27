import React, {useState, useEffect, useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'

import style from './NavBar.module.css';
import images from '../../assets/';
import { Model, TokenList } from '../index';

import { SwapTokenContext } from '@/Context/SwapContext';

const NavBar = () => {

  const {account, networkConnect, connectWallet, tokenData} = useContext(SwapTokenContext);

  const menuItems = [
    {
      name: "Swap",
      link: "/"
    },
    {
      name: "Tokens",
      link: "/Tokens"
    },
    {
      name: "Pools",
      link: "/Pool"
    }]

  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);
  // const [account, setAccount] = useState(false)

  return (
    <div className={style.NavBar}>
      
      <div className={style.NavBar_Box}>


        {/* Left-Section */}
        <div className={style.NavBar_Box_left}>

          {/* Logo-Image */}
          <div className={style.NavBar_Box_left_img}>
            <Image src={images.uniswap} alt="Logo" width={50} height={50}/>
          </div>

          {/* Menu Items */}
          <div className={style.NavBar_Box_left_menu}>
            {menuItems.map((ele, i)=>(
              <Link key = {i+1} href = { {pathname: `${ele.name}`, query: `${ele.link}`} }>
                <p className={style.NavBar_Box_left_menu_item}>{ele.name}</p>
              </Link>
            ))}
          </div>
          
        </div>


        {/* Middle-Section */}
        <div className={style.NavBar_Box_middle}>
          <div className={style.NavBar_Box_middle_search}>

            {/* Image */}
            <div className={style.NavBar_Box_middle_search_image}>
              <Image src={images.search} alt='Search Tab' width={20} height={20}/>
            </div>

            {/* Input-Section */}
            <div className={style.NavBar_Box_middle_search_input}>
              <input type='text' placeholder='Search Token'/>
            </div>

          </div>
        </div>


        {/* Right-Section */}
        <div className={style.NavBar_Box_right}>

          <div className={style.NavBar_Box_right_box}>
            <div className={style.NavBar_Box_right_img}>
              <Image src={images.ether} alt='Network' height={30} width={30}/>
            </div>  
            <p>{networkConnect}</p>
          </div>

          {account ? (
              <button onClick={()=>{setOpenModel(false), setOpenTokenBox(!openTokenBox)}}>{account.slice(0,7) + "..."}</button>
          ) : (
            <button onClick={()=>{setOpenModel(true)}}>Connect</button>
          )}
              
          {openModel && (
             <Model setOpenModel = {setOpenModel} connectWallet = {connectWallet} />
          )}
        </div>
      </div>



      {/* TokenList Component */}
      
      {openTokenBox && (
        <TokenList tokenData = {tokenData} setOpenTokenBox = {setOpenTokenBox} />
      )}

    </div>
  )
}

export default NavBar
