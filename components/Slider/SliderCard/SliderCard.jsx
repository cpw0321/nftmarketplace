'use client'

import React from 'react'

import Style from './SliderCard.module.css'
import { motion } from "framer-motion";
import Image from "next/image";

const SliderCard = ({ el, i }) => {
    return (
        <motion.div className={Style.sliderCard}>
            <div className={Style.sliderCard_box}>
                <motion.div className={Style.sliderCard_box_img}>
                    <Image
                        className={Style.sliderCard_box_img_img}
                        src={el.background}
                        alt="profile braground"
                        width={500}
                        height={300}
                        objectFit='cover'
                    />
                </motion.div>
                <div className={Style.sliderCard_box_title}>
                    <p>NFT Video #123</p>
                    <div className={Style.sliderCard_box_title_like}>
                        <small>1 of 100</small>
                    </div>
                </div>

                <div className={Style.sliderCard_box_price}>
                    <div className={Style.sliderCard_box_price_box}>
                        <small>Current Bid</small>
                        <p>1.00 ETH</p>
                    </div>

                    <div className={Style.sliderCard_box_price_time}>
                        <small>Reaming time</small>
                        <p>3h : 15m : 20s</p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default SliderCard