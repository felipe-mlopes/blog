import styled from "styled-components";
import { Link } from 'react-router-dom';

export const PostContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-decoration: none;

  background: ${props => props.theme["base-post"]};
  border-radius: 10px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.25rem;
      color: ${props => props.theme["base-title"]};
      margin-right: 2rem;
    }

    span {
      font-size: .875rem;
      color: ${props => props.theme["base-span"]};
      white-space: nowrap;
      /* text-transform: capitalize; */
    }
  }

  p {
    color: ${props => props.theme["base-text"]};
    max-height: 7rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    margin-top: 1.25rem;
  }
`