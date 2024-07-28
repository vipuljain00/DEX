import React from 'react'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import images from "../../assets";
import style from "./PoolAdd.module.css"

import { Token, SearchToken } from '../index';
import { IMAGES_MANIFEST } from 'next/dist/shared/lib/constants';

const PoolAdd = () => {
  const[openModel, setOpenModel] = useState(false);
  const[openTokenModel, setOpenTokenModel] = useState(false);
  const[active, setActive] = useState(1);
  const[openFee, setOpenFee] = useState(false);
  const[minPrice,setMinPrice] = useState(0);
  const[maxPrice, setMaxPrice] = useState(0);
  const feePairs = [
    {
        fee: "0.05%",
        info: "Best for stable pairs",
        number: "0% Select"
    },
    {
        fee: "0.3%",
        info: "Best for stable pairs",
        number: "0% Select"
    },
    {
        fee: "1%",
        info: "Best for stable pairs",
        number: "0% Select"
    },
  ]
  const minPriceRange = (text)=>{
    if(text == "+"){
      setMinPrice(minPrice+1);
    } else if(text == "-") {
      setMinPrice(minPrice-1);
    }
  };
  const maxPriceRange = (text)=>{
    if(text == "+"){
      setMaxPrice(maxPrice+1);
    } else if(text == "-") {
      setMaxPrice(maxPrice-1);
    }
  };

  return (
    <div className={style.PoolAdd}>
    {/* BOX */}
      <div className={style.PoolAdd_box}>
      {/* HEADER */}
        <div className={style.PoolAdd_box_header}>
        {/* HEADER-LEFT */}
          <div className={style.PoolAdd_box_header_left}>
            <Image src={images.arrowLeft} alt='img' width={30} height={30}/>
          </div>
        {/* HEADER-MIDDLE */}
          <div className={style.PoolAdd_box_header_middle}>
            <p>Add Liquidity</p>
          </div>
        {/* HEADER-RIGHT */}
          <div className={style.PoolAdd_box_header_right}>
            <Image src={images.close} alt='img' width={50} height={50} 
              onClick={()=>{setOpenModel(true)}}
            />
          </div>
        </div>
      {/* PRICE-SECTION */}
        <div className={style.PoolAdd_box_price}>
        {/* LEFT */}
          <div className={style.PoolAdd_box_price_left}>
            <h4>Select Pair</h4>
            {/* TOKEN */}
            <div className={style.PoolAdd_box_header_left_token}>
              {/* TOKEN-LEFT */}
              <div className={style.PoolAdd_box_price_left_token_input}>
                <p>
                  <Image src={images.etherlogo} alt='img' width={20} height={20}/>
                </p>
                <p>UNI</p>
                <p><Image src={images.arrowPrice} alt='img' width={20} height={20} /></p>
              </div>
              {/* TOKEN_RIGHT */}
              <div className={style.PoolAdd_box_price_left_token_info}
                onClick={()=>setOpenTokenModel(true)}>
                <p>
                  <Image src={images.etherlogo} alt='img' width={20} height={20} />
                </p>
                <p>WETH</p>
                <p><Image src={images.arrowPrice} alt='img' width={20} height={20} /></p>
              </div>
            </div>

            <div className={style.PoolAdd_box_price_left_fee}>
              <div className={style.PoolAdd_box_price_left_fee_left}>
                <h4>Fee Tier</h4>
                <p>The % you will ear in fees</p>
              </div>
              {/* {SHOW AND HIDE BUTTON FOR FEE} */}
              {openFee ? (
                <button onClick={() => setOpenFee(false)}>Hide</button>
              ):(
                <button onClick={() => setOpenFee(true)}>Show</button>
              )} 
            </div>
            
            {openFee && (
              <div className={style.PoolAdd_box_price_left_list}>
                {feePairs.map((el,i)=>(

                  <div className={style.PoolAdd_box_price_left_list_items}
                    key={i+1}
                    onClick={()=>setActive(i+1)} >

                    <div className={style.PoolAdd_box_price_left_list_item}>
                      <p>{el.fee}</p>
                      <p>
                        {active == i+1 ? (
                          <Image src={images.tick} alt='img' width={20} height={20} />
                        ) : (
                          ""
                        )}
                      </p>
                    </div>

                    <small>{el.info}</small>
                    <p className={style.PoolAdd_box_price_left_list_item_para}>
                      {el.number}
                    </p>
                  </div>

                ))}
              </div>
            )}

            <div className={style.PoolAdd_box_price_left_deposit}>
              <h4>Deposit Amount</h4>
              <div className={style.PoolAdd_box_price_left_deposit_box}>
                <input type='text' placeholder='0' />
                <div className={style.PoolAdd_box_price_left_deposit_box_input}>
                  <p>
                    <small>UNI</small> Uniswap
                  </p>
                  <p className={style.PoolAdd_box_price_left_deposit_box_input_item}>
                    Balance: 0.00
                  </p>
                </div>    
              </div>
              <div className={style.PoolAdd_box_price_left_deposit_box}>
                <input type='text' placeholder='0' />
                <div className={style.PoolAdd_box_price_left_deposit_box_input}>
                  <p>
                    <small>ETH</small> Ether
                  </p>
                  <p className={style.PoolAdd_box_price_left_deposit_box_input_item}>
                    Balance: 0.00
                  </p>
                </div>    
              </div>
            </div>

          </div>
        {/* RIGHT */}
          <div className={style.PoolAdd_box_price_right}>
           
            <h4>Set Price Range</h4>
           
            <div className={style.PoolAdd_box_price_right_box}>
              <p className={style.PoolAdd_box_price_right_box_para}>
                Current Price: 54.6543 Testv4 per WETH
              </p>
              <Image src={images.wallet} alt='img' width={80} height={80} />
              <h3>Your Position will appear here.</h3>
            </div>
            
            <div className={style.PoolAdd_box_header_right_range}>
              <div className={style.PoolAdd_box_header_right_range_box}>
                <p>Min Price</p>
                <p 
                  className={style.PoolAdd_box_header_right_range_box_para}
                  onClick={(e)=>minPriceRange(e.target.innerText)}>
                    <smal>-</smal> {minPrice} <small>+</small>
                </p>
                <p>Testv4 per WETh</p>
              </div>
              <div className={style.PoolAdd_box_header_right_range_box}>
                <p>Max Price</p>
                <p 
                  className={style.PoolAdd_box_header_right_range_box_para}
                  onClick={(e)=>maxPriceRange(e.target.innerText)}>
                    <smal>-</smal> {maxPrice} <small>+</small>
                </p>
                <p>Testv4 per WETh</p>
              </div>
            </div>

            <div className={style.PoolAdd_box_header_right_button}>
              <button>Full Range</button>
            </div>

            <div className={style.PoolAdd_box_header_right_amount}>
              <button>Enter a amount</button>
            </div>
            
          </div>
        </div>
      </div>
    {/* TO SHOW SLIPPAGE SETTINGS UI */}
      {openModel && (
        <div className={style.token}>
          <Token setOpenSetting={setOpenModel} />
        </div>
      )}
    
      {openTokenModel && (
        <div className={style.token}>
          <SearchToken tokenData="hey" openToken={setOpenTokenModel} />
        </div>
      )}
    </div>
  );
};

export default PoolAdd;
