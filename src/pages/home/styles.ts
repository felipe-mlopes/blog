import styled from "styled-components";

export const Container = styled.div`
  padding: 0 18rem 14.625rem;
`

export const SearchWrapper = styled.form`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: .75rem;

    p {
      font-size: 1.125rem;
      font-weight: bold;
      color: ${props => props.theme["base-subtitle"]};
    }

    span {
      font-size: .875rem;
      color: ${props => props.theme["base-span"]};
    }
  }

  input {
      background: ${props => props.theme["base-input"]};
      border: 1px solid ${props => props.theme["base-border"]};
      border-radius: 6px;
      outline: 0;
      color: ${props => props.theme["base-text"]};
      padding: .75rem 1rem;

      &::placeholder {
        color: ${props => props.theme["base-label"]};
      }

      &:focus {
        border: 1px solid ${props => props.theme.blue};
        color: ${props => props.theme["base-text"]};
      }
    }
`

export const Feed = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 30rem);
  justify-content: center;
  gap: 2rem;

  margin-top: 3rem;
`