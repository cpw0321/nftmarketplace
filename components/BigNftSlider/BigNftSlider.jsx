'use client'

import React, { useCallback, useState } from 'react'

import Style from './BigNftSlider.module.css'
import Image from 'next/image'
import { MdTimer, MdVerified } from 'react-icons/md'
import images from '../../img'

import { AiFillFire, AiFillHeart } from "react-icons/ai";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";
import { Button } from '../componentsindex'

const BigNftSlider = () => {
    const [idNumber, setIdNumber] = useState(0);

    const silderData = [
        {
            title: "Hello NFT",
            id: 1,
            name: "nft test01",
            collection: "test",
            price: 0.03,
            description: "This is a test description",
            image: images.user1,
            nftImage: images.nft_image_1,
            time: {
                days: 1,
                hours: 40,
                minutes: 25,
                seconds: 16
            },
            likes: 243,
        },
        {
            title: "Buddy NFT",
            id: 1,
            name: "nft test02",
            collection: "test",
            price: 0.03,
            description: "This is a test description",
            image: images.user2,
            nftImage: images.nft_image_2,
            time: {
                days: 5,
                hours: 30,
                minutes: 25,
                seconds: 16
            },
            likes: 244,
        },

    ]

    const inc = useCallback(() => {
        if (idNumber+1 < silderData.length) {
            setIdNumber(idNumber + 1)
        }
    }, [idNumber, silderData.length])

    const dec = useCallback(() => {
        if (idNumber > 0){
            setIdNumber(idNumber - 1)
        }
    }, [idNumber])

    return (
        <div className={Style.bigNftSlider}>
            <div className={Style.bigNftSlider_box}>
                <div className={Style.bigNftSlider_box_left}>
                    <h2>{silderData[idNumber].title}</h2>
                    <div className={Style.bigNftSlider_box_left_creator}>
                        <div className={Style.bigNftSlider_box_left_creator_profile}>
                            <Image
                                className={Style.bigNftSlider_box_left_creator_profile_img}
                                src={silderData[idNumber].image}
                                alt="Creator profile"
                                width={40}
                                height={40}
                            />
                            <div className={Style.bigNftSlider_box_left_creator_profile_info}>
                                <p>Creator</p>
                                <h4>{silderData[idNumber].name} {" "}
                                    <span>
                                        <MdVerified />
                                    </span>
                                </h4>
                            </div>
                        </div>

                        <div className={Style.bigNftSlider_box_left_creator_collection}>
                            <AiFillFire className={Style.bigNftSlider_box_left_creator_collection_icon} />
                            <div className={Style.bigNftSlider_box_left_creator_collection_info}>
                                <p>Collection</p>
                                <h4>{silderData[idNumber].collection}</h4>
                            </div>
                        </div>
                    </div>

                    <div className={Style.bigNftSlider_box_left_bidding}>
                        <div className={Style.bigNftSlider_box_left_bidding_box}>
                            <small>Current Bid</small>
                            <p>{silderData[idNumber].price} <span>$221.12</span></p>
                        </div>
                        <p className={Style.bigNftSlider_box_left_bidding_box_action}>
                            <MdTimer className={Style.bigNftSlider_box_left_bidding_box_action_icon} />
                            <span>Auction ending in </span>
                        </p>

                        <div className={Style.bigNftSlider_box_left_bidding_box_timer}>
                            <div className={Style.bigNftSlider_box_left_bidding_box_timer_item}>
                                <p>{silderData[idNumber].time.days}</p>
                                <span>Days</span>
                            </div>
                            <div className={Style.bigNftSlider_box_left_bidding_box_timer_item}>
                                <p>{silderData[idNumber].time.hours}</p>
                                <span>Hours</span>
                            </div>
                            <div className={Style.bigNftSlider_box_left_bidding_box_timer_item}>
                                <p>{silderData[idNumber].time.minutes}</p>
                                <span>Minutes</span>
                            </div>
                            <div className={Style.bigNftSlider_box_left_bidding_box_timer_item}>
                                <p>{silderData[idNumber].time.seconds}</p>
                                <span>Seconds</span>
                            </div>
                        </div>

                        <div className={Style.bigNftSlider_box_left_button}>
                            <Button btnName="Place Bid" classStyle="btn" handleClick={() => { }} />
                            <Button btnName="View History" classStyle="btn" handleClick={() => { }} />
                        </div>
                    </div>

                    <div className={Style.bigNftSlider_box_left_sliderBtn}>
                        <TbArrowBigLeftLines
                            className={Style.bigNftSlider_box_left_sliderBtn_icon}
                            onClick={() => dec()}
                        />
                        <TbArrowBigRightLine
                            className={Style.bigNftSlider_box_left_sliderBtn_icon}
                            onClick={() => inc()}
                        />
                    </div>
                </div>

                <div className={Style.bigNftSlider_box_right}>
                    <div className={Style.bigNftSlider_box_right_box}>
                        <Image
                            src={silderData[idNumber].nftImage}
                            alt="NFT image"
                            className={Style.bigNftSlider_box_right_box_img}
                        />

                        <div className={Style.bigNftSlider_box_right_box_like}>
                            <AiFillHeart />
                            <span>{silderData[idNumber].likes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigNftSlider

