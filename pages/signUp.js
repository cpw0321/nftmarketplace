import React from 'react'
import Style from '../styles/signUp.module.css'
import LoginAndSignUp from "../loginAndSignUp/LoginAndSignUp";

const signUp = () => {
    return (
        <div className={Style.signUp}>
            <div className={Style.signUp_box}>
                <h1>SignUp</h1>
                <LoginAndSignUp />
                <p className={Style.signUp_box_para}>
                    New user? <a href="#">Create an account</a>
                </p>
            </div>
        </div>
    )
}

export default signUp