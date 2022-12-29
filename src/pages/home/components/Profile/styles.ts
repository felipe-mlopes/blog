import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  margin-bottom: 4.5rem;
  margin-top: -5rem;

  background: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  img {
    height: 9.25rem;
    margin-left: .5rem;
    margin-right: 1.5rem;
    border-radius: 6px;
  }
`

export const ProfileContent = styled.div`
  padding: .5rem;

  header {
    display: flex;
    justify-content: space-between;

    h2 {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${props => props.theme["base-title"]};
    }
  }

  > p {
    color: ${props => props.theme["base-text"]};
    padding: .5rem 0 1.5rem;
  }
`

export const TagLink = styled.div`
  display: flex;
  align-items: center;

  a {
    border-bottom: 1px solid transparent;
    text-decoration: none;
    text-transform: uppercase;
    font-size: .75rem;
    font-weight: bold;
    color: ${props => props.theme.blue};
    transition: border-bottom 300ms;

    &:hover {
      border-bottom: 1px solid ${props => props.theme.blue};
    }

    svg {
      width: .75rem;
      height: .75rem;
      color: ${props => props.theme.blue};
      padding: 0 0 0 .5rem;
    }

    .back {
      padding: 0 .5rem 0 0;
    }
  }
`

export const Tags = styled.div`
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
      color: ${props => props.theme["base-subtitle"]};
    }
  } 
`
