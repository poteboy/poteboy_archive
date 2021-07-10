import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
const style = require("../styles/profile.module.scss")


const Profile = () => {
    return(
        <ProfileTable>
            <Content>
                <AboutMe>ABOUT ME</AboutMe>
                <Bio>
                    2021年4月より医療系スタートアップに新卒で入社し、アプリケーション開発者として働いています。
                    <br/>
                    モノづくりが好きで、早稲田大学国際教養学部在学時からアプリケーションの実務開発業務に携わりReact、Angular、Ruby on Railsなどを用いたアプリケーション開発の経験を摘みました。
                    <br/>
                    また、卒業論文では「機械学習を用いたパワーリフティングスコアの回帰予測」をテーマに取り組みました。
                    <br/>
                    Human-Computer InteractionやUXデザインなど、デザインとテクノロジーの融合に興味を持っています。
                    <br/>
                    絵を描くことも好きで、休日は専らイラストやアニメーションの作成に費やしています。
                </Bio>
            </Content>
        </ProfileTable>
    )
}

const ProfileTable = styled.div`
    transform: translateY(15vh);
    background: transparent;
    backdrop-filter: blur(5px);
    border: solid 1px snow;
    border-radius: 3px;
    box-shadow: 3px 5px 8px 4px #2dcece;
    @media (max-width: 1194px) {
        transform: translateY(-5vh) scale(0.9);
    }
`

const Content = styled.div`
    font-family: phenomena-regular;
    padding:3vh;
    max-width: 70vh;
`

const AboutMe = styled.p`
    padding: 2vh;
    text-align: center;
    box-shadow: 0px 1px 1px 1px #2dcece;
`

const Bio = styled.div`
    text-align: left;
    padding: 2vh;
    font-family: 'Quicksand';
    line-height: 2;
    @media (max-width: 1194px) {
        line-height: 3;
    }
`

export default Profile