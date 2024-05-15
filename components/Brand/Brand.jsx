'use client'
import React from 'react'

import Style from "./Brand.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";
import Image from 'next/image';

const Brand = () => {
  return (
    <div className={Style.brand}>
      <div className={Style.brand_box}>
        <div className={Style.brand_box_left}>
          <Image src={images.logo} alt="brand logo" width={100} height={100} />
          <h1>Earn free crypto with Ciscrypt</h1>
          <p>A creative agency that lead and inspire.</p>

          <div className={Style.brand_box_left_btn}>
            <Button btnName="Create" classStyle="btn" handleClick={() => { }} />
            <Button btnName="Discover" classStyle="btn" handleClick={() => { }} />
          </div>
        </div>
        <div className={Style.brand_box_right}>
          <Image
            src={images.earn}
            alt="brand"
            width={500}
            height={400}
            className={Style.brand_box_right_img}
          />
        </div>
      </div>
    </div>
  )
}

export default Brand