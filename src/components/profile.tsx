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
      <Spacer size={100} />
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
  width: 80%;
  background: white;
  border-radius: 20px;
  @media (max-width: 1194px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  font-family: phenomena-regular;
  padding: 3vh;
  max-width: 80vh;
  @media (max-width: 1194px) {
    max-width: none;
  }
`;

const AboutMe = styled.p`
  font-family: 'Quicksand';
  padding: 2vh;
  text-align: center;
  // box-shadow: 0px 1px 1px 1px #2dcece;
`;

const Bio = styled.div`
  text-align: left;
  padding: 2vh;
  font-family: 'Quicksand';
  line-height: 2;
  @media (max-width: 1194px) {
    line-height: 3;
  }
`;

export default Profile;
