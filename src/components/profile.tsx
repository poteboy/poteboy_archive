import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Spacer } from '@src/components/Lib/Spacer';

const Profile = () => {
  return (
    <Wrapper>
      <Table>
        <Content>
          <AboutMe>ABOUT ME</AboutMe>
          <Bio>
            都内在住のソフトウェア開発者（デザインエンジニア）です。
            <br />
            主にデザインシステム基盤構築・高速なプロトタイプ検証を得意としています。
            <br />
            技術としてはTypeScript、React
            Native、Figmaが好物ですが、実務では他にもNext.js、Anguler、Ruby on
            Rails、Apolloなどを触ってきました。
            <br />
            趣味で個人開発（iOSアプリ＊２）やOSS活動（npmパッケージ*1）にも取り組んでいます。
            <br />
            TOEIC920点(2017年)。ベンチプレス150kg(2019年)。
          </Bio>
        </Content>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Table = styled.div`
  align-self: flex-end;
  width: 70%;
  background: white;
  /* box-shadow: 14px 14px 28px #d5d8e0, -14px -14px 28px #ffffff; */
  border-radius: 15px;
  border: solid 2px #d5d8e0;
  /* box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15); */
  @media (max-width: 1194px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  font-family: phenomena-regular;
  padding: 3vh;
  margin: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1194px) {
    max-width: none;
    margin: auto;
  }
`;

const AboutMe = styled.p`
  padding: 10px 20px;
  color: white;
  font-size: x-large;
  font-family: phenomena-regular;
  background: linear-gradient(to right, #acb6e5, #86fde8);
  box-shadow: 0 0 5px #acb6e5;
  border-radius: 20px;
  width: 200px;
  text-align: center;
`;

const Bio = styled.p`
  text-align: left;
  padding: 2vh;
  font-family: 'Quicksand';
  line-height: 2.5;
  letter-spacing: 1.5px;
  font-weight: 500;
  @media (max-width: 1194px) {
    line-height: 3;
  }
`;

export default Profile;
