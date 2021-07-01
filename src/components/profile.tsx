import React, { useState, useEffect } from 'react';
const style = require("../styles/profile.module.scss")


const Profile = () => {
    return(
        <div className={style.profileTable}>
            <div className={style.content}>
                <p className={style.about}>ABOUT ME</p>

                <div className={style.bio}>
                    2021年4月より医療系スタートアップに新卒で入社し、アプリケーション開発者として働いています。
                    <br/>
                    モノづくりが好きで、早稲田大学国際教養学部在学時からアプリケーションの実務開発業務に携わりReact、Angular、Ruby on Railsなどを用いたアプリケーション開発の経験を摘みました。
                    <br/>
                    また、卒業論文では「機械学習を用いたパワーリフティングスコアの回帰予測」をテーマに取り組みました。
                    <br/>
                    Human-Computer InteractionやUXデザインなど、デザインとテクノロジーの融合に興味を持っています。
                    <br/>
                    絵を描くことも好きで、休日は専らイラストやアニメーションの作成に費やしています。
                </div>
            </div>
        </div>
    )
}

export default Profile