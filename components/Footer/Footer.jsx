import React from 'react'

import Image from 'next/image'
import Style from './Footer.module.css'
import images from '../../img'
import { Discover, HelpCenter } from "../NavBar/index";

import {
    TiSocialFacebook,
    TiSocialLinkedin,
    TiSocialTwitter,
    TiSocialYoutube,
    TiSocialInstagram,
    TiArrowSortedDown,
    TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";


const Footer = () => {
    return (
        <div className={Style.footer}>
            <div className={Style.footer_box}>
                {/* social */}
                <div className={Style.footer_box_social}>
                    <Image
                        src={images.logo}
                        alt="footer logo"
                        width={100}
                        height={100}
                    />
                    <p>
                        The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                    </p>
                    <div className={Style.footer_box_social_social}>
                        <a href="#">
                            <TiSocialFacebook />
                        </a>
                        <a href="#">
                            <TiSocialLinkedin />
                        </a>
                        <a href="#">
                            <TiSocialTwitter />
                        </a>
                        <a href="#">
                            <TiSocialYoutube />
                        </a>
                        <a href="#">
                            <TiSocialInstagram />
                        </a>
                    </div>
                </div>

                {/* discover */}
                <div className={Style.footer_box_discover}>
                    <h3>Discover</h3>
                    <Discover />
                </div>

                {/* help center */}
                <div className={Style.footer_box_discover}>
                    <h3>Help Center</h3>
                    <HelpCenter />
                </div>

                {/* subscribe */}
                <div className={Style.footer_box_subscribe}>
                    <h3>Subscribe</h3>
                    <div className={Style.footer_box_subscribe_box}>
                        <input type="email" placeholder="Enter You Email" />
                        <RiSendPlaneFill  className={Style.footer_box_subscribe_box_send}/>
                    </div>
                    <div className={Style.footer_box_subscribe_info}>
                        <p>
                            Discover, collect, and sell extraordinary NFTs OpenSea is the
                            world first and largest NFT marketplace
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer