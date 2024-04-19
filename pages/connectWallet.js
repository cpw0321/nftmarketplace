import React, { useState } from 'react'
import Style from '../styles/connectWallet.module.css'
import Image from 'next/image'
import images from "../img";

const ConnectWallet = () => {
    const [activeBtn, setActiveBtn] = useState(1);
    const providerArray = [
        {
            provider: images.provider1,
            name: "Metamask",
        },
        {
            provider: images.provider2,
            name: "walletConnect",
        },
        {
            provider: images.provider3,
            name: "walletlink",
        },
        {
            provider: images.provider1,
            name: "Formatic",
        },
    ];
    return (
        <div className={Style.connectWallet}>
            <div className={Style.connectWallet_box}>
                <h1>Connect your wallet</h1>
                <p className={Style.connectWallet_box_para}>
                    Connect with one of our avaliabl wallet providers or create a new one
                </p>

                <div className={Style.connectWallet_box_provider}>
                    {providerArray.map((el, i) => (
                        <div
                            key={i + 1}
                            className={`${Style.connectWallet_box_provider_item} ${
                                activeBtn === i + 1
                                    ? Style.connectWallet_box_provider_box_active
                                    : ""
                            }`}
                            onClick={() => setActiveBtn(i + 1)}
                        >
                            <Image
                                src={el.provider}
                                alt="provider"
                                width={50}
                                height={50}
                                className={Style.connectWallet_box_provider_item_img}
                            />
                            <p>{el.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ConnectWallet