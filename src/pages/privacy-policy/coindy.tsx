import React from 'react';
import Layout from '../../components/layout';
import Meta from '../../components/meta';
import Adsense from '../../components/ads/adsense';
const style = require('../../styles/post.module.scss');

const PrivacyPolicy = () => {
  return (
    <Layout side={true}>
      <Meta
        title="Coindy プライバシーポリシー"
        description="Coindy のプライバシーポリシー"
      />
      <div className={style.all}>
        <div className={style.content}>
          <div className={style.post}>
            <h1 style={{ textAlign: 'center' }}>Coindy</h1>
            <h3 style={{ textAlign: 'center' }}>プライバシーポリシー</h3>
            <h2>利用者情報の取得</h2>
            <p>本アプリが利用者の個人情報を取得することはありません。</p>
            <h2>利用者情報の利用</h2>
            <p>本アプリが利用者の個人情報を利用することはありません。</p>
            <h2>広告</h2>
            <p>
              本アプリでは広告配信ツールとしてAdMob(Google社提供)を使用しております。AdMobのプライバシーポリシーは
              <a
                target="_blank"
                href="https://support.google.com/admob/answer/6128543?hl=en"
              >
                こちら
              </a>
              をご確認ください。
            </p>
            <h2>お問い合わせ先</h2>
            <p>
              何かご不明点がございましたら
              <a target="_blank" href="https://twitter.com/_poteboy_">
                @_poteboy_
              </a>
              までご連絡ください。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
