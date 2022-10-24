import React from "react";
import { Box } from "@mui/material";
import Blog from "./Blog";
import { gql, useQuery } from "@apollo/client";

const POSTS = gql`
  {
    posts {
      datePublished
      id
      slug
      title
      updatedAt
      createdAt
      author {
        id
        name
        avatar {
          url
        }
      }
      content
      coverPhoto {
        url
      }
    }
  }
`;

function Feed({ searchWords }) {
  const { loading, error, data } = useQuery(POSTS);
  //   console.log("data", data);
  //   console.log(loading);
  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;
  return (
    <Box flex={4} p={2}>
      {data.posts
        .filter((post) => {
          const isMatched =
            post.title.indexOf(searchWords) !== -1 ||
            post.content.indexOf(searchWords) !== -1;
          // console.log(isMatched);
          return isMatched;
        })
        .map((post) => (
          <Blog
            title={post.title}
            author={post.author}
            coverPhoto={post.coverPhoto}
            content={post.content}
            key={post.title}
            datePublished={post.datePublished}
          />
        ))}
    </Box>
  );
}

export default Feed;
