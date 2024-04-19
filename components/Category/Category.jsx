'use client'

import React from 'react'
import Style from './Category.module.css'
import { BsCircleFill } from "react-icons/bs";
import Image from "next/image";

import images from '../../img'

const Category = () => {
    const CategoryArray = [
        images.creatorbackground1,
        images.creatorbackground10,
        images.creatorbackground11,
        images.creatorbackground2,
        images.creatorbackground4,
        images.creatorbackground5,
      ];
  return (
    <div className={Style.category}>
        <div className={Style.category_boxs}>
            {
                CategoryArray.map((el, i) => (
                    <div className={Style.category_box} key={i + 1}>
                        <Image
                            src={el}
                            className={Style.category_box_img}
                            alt="profile background"
                            width={200}
                            height={100}
                        />

                        <div className={Style.category_box_title}>
                            <span>
                            <BsCircleFill />
                            </span>
                            <div className={Style.category_box_title_info}>
                                <h4>Enterainment</h4>
                                <small>1995 NFTS</small>
                            </div>
                        </div>
                    </div>
                   
                ))
            }
        </div>
    </div>
  )
}

export default Category