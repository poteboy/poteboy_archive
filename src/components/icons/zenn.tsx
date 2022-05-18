import React, { FC } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

export const ZennIcon: FC = props => {
  const [hoverd, setHoverd] = useState(false);

  const click = () => {
    window.open('https://zenn.dev/poteboy', '_blank');
  };

  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 88.3 88.3"
      // style={{
      //   enableBackground: 'new 0 0 88.3 88.3',
      // }}
      xmlSpace="preserve"
      {...props}
      onMouseOver={() => setHoverd(true)}
      onMouseLeave={() => setHoverd(false)}
      onClick={click}
    >
      <g fill={hoverd ? '#3affdb' : 'gray'}>
        <path
          className="st0"
          d="M3.9 83.3h17c.9 0 1.7-.5 2.2-1.2L69.9 5.2c.6-1-.1-2.2-1.3-2.2H52.5c-.8 0-1.5.4-1.9 1.1L3.1 81.9c-.3.6.1 1.4.8 1.4zM62.5 82.1l22.1-35.5c.7-1.1-.1-2.5-1.4-2.5h-16c-.6 0-1.2.3-1.5.8L43 81.2c-.6.9.1 2.1 1.2 2.1h16.3c.8 0 1.6-.4 2-1.2z"
        />
      </g>
    </SVG>
  );
};

const SVG = styled.svg`
  height: 30px;
  width: 30px;
  color: gray;
  :hover {
    color: #3affdb;
    cursor: pointer;
  }
`;
