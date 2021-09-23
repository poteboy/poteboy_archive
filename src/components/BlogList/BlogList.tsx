import React, { FC } from 'react';
import { Edge, PostData } from '../../entity';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Spacer } from '@src/components/Lib/Spacer';
import Topic from '../topic/topic';
import { size } from '@src/constants/size';

type Props = {
  edges: Edge[];
};

const BlogList: React.FC<Props> = ({ edges }) => {
  function convertTime(s: Date): string {
    var tmp = new Date(s).toLocaleDateString();
    return tmp;
  }

  return (
    <ListTable>
      {edges.map((edge: Edge, index) => {
        return (
          <PostList key={index}>
            <Post>
              <PostLeft> {edge.node.emoji ? edge.node.emoji : ''}</PostLeft>
              <PostRight>
                <SubTitle>{convertTime(edge.node.publishedDate)}</SubTitle>
                <Spacer size={10} />
                <Link
                  to={`/blog/${edge.node.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <PostTitle>{edge.node.title}</PostTitle>
                </Link>
              </PostRight>
            </Post>
          </PostList>
        );
      })}
    </ListTable>
  );
};

const ListTable = styled.ol`
  flex: 1;
  margin: 0 0 0 auto;
  width: 75%;
  align-items: center;
  box-sizing: border-box;
  list-style-type: none;
  @media (max-width: ${size.device.tablet}px) {
    flex-direction: column;
    width: 100%;
    padding: 0;
  }
`;

const PostList = styled.li`
  background: white;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 0 rgb(1 1 1 / 5%);
  margin-bottom: 15px;
  @media (max-width: ${size.device.tablet}px) {
    width: 100%;
  }
`;

const PostLeft = styled.h3`
  justify-content: center;
  text-decoration: none;
  margin-left: 10px;
`;

const PostRight = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;

const SubTitle = styled.div`
  color: gray;
  font-size: 15px;
`;

const PostTitle = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 600;
  :hover {
    color: #255eda;
  }
`;

const Post = styled.div`
  padding: 15px 0;
  margin: 0 auto;
  max-width: 90%;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export default BlogList;
