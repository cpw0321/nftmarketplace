import React from 'react'
import Image from "next/image";
import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialInstagram,
} from "react-icons/ti";

import Style from "./CollectionProfile.module.css";
import images from "../../img";

const CollectionProfile = () => {
    const cardArray = [1, 2, 3, 4];
    return (
        <div className={Style.collectionProfile}>
            <div className={Style.collectionProfile_box}>
                <div className={Style.collectionProfile_box_left}>
                    <Image
                        src={images.nft_image_1}
                        alt="nft image"
                        width={180}
                        height={180}
                        className={Style.collectionProfile_box_left_img}
                    />

                    <div className={Style.collectionProfile_box_left_social}>
                        <a href="#">
                            <TiSocialFacebook />
                        </a>
                        <a href="#">
                            <TiSocialInstagram />
                        </a>
                        <a href="#">
                            <TiSocialLinkedin />
                        </a>
                        <a href="#">
                            <TiSocialTwitter />
                        </a>
                    </div>
                </div>
                <div className={Style.collectionProfile_box_right}>
                    <h1>Awesome NFTs Collection</h1>
                    <p>
                        Karafuru is home to 5,555 generative arts where colors reign
                        supreme. Leave the drab reality and enter the world of Karafuru by
                        Museum of Toys.
                    </p>

                    <div className={Style.collectionProfile_box_right_box}>
                        {cardArray.map((el, i) => (
                            <div
                                className={Style.collectionProfile_box_right_box_item}
                                key={i + 1}
                            >
                                <small>Floor price</small>
                                <p>${i + 1}95,4683</p>
                                <span>+ {i + 2}.11%</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionProfile