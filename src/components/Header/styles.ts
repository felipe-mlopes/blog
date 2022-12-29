import styled from "styled-components";
import Cover from '../../assets/Cover.svg'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 296px;
  background: url(${Cover}) no-repeat;
  background-size: cover;

  img {
    padding-bottom: 3rem;
  }
`