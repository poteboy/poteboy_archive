import React from 'react';
import Blog from '../components/blog';
import Meta from '../components/meta';
import Adsense from '../components/ads/adsense';
const style = require("../styles/post.module.scss");


const PrivacyPolicy = () => {
    return(
        <Blog>
            <Meta
                title="プライバシーポリシー"
                description="ぽてログのプライバシーポリシー"
            />
            <div className={style.all}>
                <div className={style.content}>
                    <div className={style.post}>
                    <h1 style={{textAlign: 'center'}}>プライバシーポリシー</h1>
                        <h2>広告の配信について</h2>
                        <p>当サイトはGoogle及びGoogleのパートナー（第三者配信事業者）の提供する広告を設置しております。その広告配信にはCookieを使用し、当サイトやその他のサイトへの過去のアクセス情報に基づいて広告を配信します。</p>
                        <p>Google が広告 Cookie を使用することにより、当サイトや他のサイトにアクセスした際の情報に基づいて、Google やそのパートナーが適切な広告を表示しています。</p>
                        <p>お客様はGoogleアカウントの<a href="https://adssettings.google.com/u/0/authenticated" target="_blank" rel="noopener">広告設定ページ</a>で、パーソナライズ広告を無効にできます。また aboutads.info のページにアクセスして頂き、パーソナライズ広告掲載に使用される第三者配信事業者のCookieを無効にできます。</p>
                        <p>その他、Googleの広告におけるCookieの取り扱い詳細については、Googleのポリシーと<a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener">規約ページ</a>をご覧ください。</p>
                        <Adsense/>
                    </div>
                </div>
            </div>
        </Blog>
    )
}

export default PrivacyPolicy