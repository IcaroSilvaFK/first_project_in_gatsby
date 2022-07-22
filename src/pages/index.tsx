import React from 'react';
import { graphql } from 'gatsby';
import { Profile } from '../components/Profile';
import { Header } from '../components/Header';
import { Card } from '../components/Post';

interface IDataProps {
  data: {
    allMarkdownRemark: {
      nodes: [
        {
          html: string;
          frontmatter: { title: string; date: string };
        }
      ];
    };
  };
}

export default function HelloWorld({ data }: IDataProps) {
  console.log(data);

  return (
    <div className='container__page'>
      <Header />
      <Profile />
      {data.allMarkdownRemark.nodes.map((post) => (
        <Card
          date={post.frontmatter.date}
          title={post.frontmatter.title}
          html={post.html}
        />
      ))}
    </div>
  );
}

export const gql = graphql`
  query MyQuery {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          title
          date
        }
      }
    }
  }
`;
