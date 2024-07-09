import React from 'react'
import Image from 'next/image'
import style from './Toggle.module.css'

const Toggle = (label) => {
  return (
    <div className={style.Toggle}>
      <div className={style.Toggle_switch_box}>
        <input className={style.Toggle_checkbox} type='checkbox' name={label} id={label} />
        <label className={style.Toggle_label} htmlFor={label}>
          <span className={style.Toggle_inner} />
          <span className={style.Toggle_switch} />
        </label>
      </div>      
    </div>
  )
}

export default Toggle
Toggle