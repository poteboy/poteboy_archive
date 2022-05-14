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
            都内在住のプログラマー。
            <br />
            2021年4月に新卒で医療系スタートアップに入社し、 React (Next.js),
            React Native, Angular, Ruby on
            Railsなどを用いたアプリケーション開発に携わる。
            <br />
            TypeScripを用いたWebフロントエンド開発を中心に、大学在学中から長期インターン生として実務アプリケーション開発に携わる。
            <br />
            また、卒業論文では「機械学習を用いたパワーリフティングスコアの回帰予測」をテーマに取り組む。
            <br />
            最近の趣味はiOS開発とお絵かき。TOEIC920点(2017年)。ベンチプレス150kg(2019年)。
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
  font-weight: 300;
  @media (max-width: 1194px) {
    line-height: 3;
  }
`;

export default Profile;
