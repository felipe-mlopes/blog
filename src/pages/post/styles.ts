import styled from "styled-components";

export const PostInfo = styled.div`
  background: ${props => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  
  padding: 2rem;
  margin-top: -5rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h2 {
    padding: 1.25rem 0 .5rem;
    font-size: 1.5rem;
    color: ${props => props.theme["base-title"]};
  }
`

export const PostTags = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: center;

    > svg {
    width: 1.125rem;
    height: 1.125rem;
    color: ${props => props.theme["base-label"]};
    padding-right: .5rem;
    }

    > p {
      color: ${props => props.theme["base-span"]};
    }
  } 
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2.5rem 2rem;

  p {
    font-weight: bold;
    color: ${props => props.theme["base-text"]};
    margin-bottom: 1.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 2px;
    padding: 1rem;
    background: ${props => props.theme["base-post"]};
  }
`

export const ContentText =  styled.section`
  h1, h2, h3 {
    color: ${props => props.theme.blue};
    text-decoration: underline;
    padding-bottom: .75rem;
  }

  h4 {
    color: ${props => props.theme.blue};
    text-decoration: none;
    padding-bottom: .75rem;
  }

  a {
    color: ${props => props.theme.blue};
    text-decoration: none;
  }

  li {
    color: ${props => props.theme["base-subtitle"]};
    padding-bottom: 1rem;

    > p {
      margin-bottom: 0;
    }
  }

  code {
    background: ${props => props.theme["base-post"]};
    padding: .2em .4em;
    border-radius: 6px;
  }

  pre {
    padding: 1rem;
    background: ${props => props.theme["base-post"]};
    border-radius: 6px;
    margin-bottom: 1.5rem;


    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
    }
  }
`