import React from 'react'
import Style from './NFTTabs.module.css';
import Image from 'next/image';

const NFTTabs = ({ dataTab, icon }) => {
    return (
        <div className={Style.nftTabs}>
            {
                dataTab.map((el, i) => (
                    <div className={Style.nftTabs_box} key={i + 1}>
                        <Image
                            src={el}
                            alt="NFT"
                            width={40}
                            height={40}
                            className={Style.nftTabs_box_img}
                        />
                        <div className={Style.nftTabs_box_info}>
                            <span>
                                Offer by $770 by <span>Shoaib Bhai</span>
                                {icon}
                            </span>

                            <small>Jun 14 - 4:12 PM</small>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default NFTTabs