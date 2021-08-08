import React, { FC } from 'react';
import { Edge, PostData } from '../../entity'
import  styled  from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Topic from '../topic/topic';
const style = require("./BlogList.module.scss")

type Topic = 'all' | 'tech' | 'poem';

type Props = {
    topic: Topic
    edges: Edge[]
}

const BlogList: React.FC<Props> = ({topic, edges}) => {


  function convertTime(s: Date): string {
    var tmp = new Date(s).toLocaleDateString()
    return tmp
  }

  return (
      <ListTable>
        <Tabs>
          <Tab activated={true}>ALL</Tab>
          <Tab activated={false}>TECH</Tab>
          <Tab activated={false}>POEM</Tab>
        </Tabs>
        {edges.map( (edge: Edge) => {
            return(
                <PostList>
                  <Link to={`${edge.node.slug}`}
                        className={style.link}>
                    <Post>
                        
                          <PostTitle>{edge.node.title}</PostTitle>
                          <SubTitle>
                            <Topic topic={edge.__typename}/>
                            <p style={{margin: "0"}}>{convertTime(edge.node.publishedDate)}</p>
                          </SubTitle>
                          <p style={{color: 'rgb(204, 204, 204)'}}>{edge.node.description}</p>
                        
                    </Post>
                  </Link>
                </PostList>
            )
        })}
      </ListTable>
  )
}

const ListTable = styled.ol`
  flex: 1;
  margin: 10vh 15vh 10vh 0;
  align-items: center;
  box-sizing: border-box;
  list-style-type: none;
  @media (max-width: 1194px) {
            flex-direction: column;
            margin: 0 0;
        }
`

const Tabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const Tab = styled.div<{activated: Boolean}>`
  background: ${props => props.activated ? '#8484843d' : 'none' };
  color: ${props => props.activated ? 'snow' : '#fff7f776' };
  padding: 1vh 2vh;
  border-radius: 10px 10px 0 0;
  margin-right: 1vh;
  font-size: large;
  transform: translateX(2vh);
  border: solid 0.5px;
  border-bottom: none;
  border-color: #8484843d;
`

const PostList = styled.li`
  background: #8484843d;
  backdrop-filter: blur(2px);
  border-radius: 1rem;
  box-shadow: 1px 1px 1px 0 rgb(1 1 1 / 5%);
  margin-bottom: 15px;
  // transition: all 1s;
  &:hover, &:focus {
      transition: all 0.3s;
      transform: translate(-5px,-5px);;
      box-shadow: 0 5px 5px 0px rgb(0 0 0 / 10%);
  }
`

const PostTitle = styled.h3`
  color: snow;
`

const Post = styled.div`
  padding-top: 1em;
  padding-bottom: 1em;
  margin: 0 auto;
  max-width: 80%;
`

const SubTitle = styled.div`
  display: -webkit-inline-box;
`

export default BlogList;