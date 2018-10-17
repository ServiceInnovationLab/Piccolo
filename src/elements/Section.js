import styled, { css } from 'styled-components';

export const Section = styled.section`
  font-family: sans-serif;
  padding: 55px 0;
  @media(min-width: 1024px) {
    text-align: left;

    ${props => props.center && css`
     text-align: center;
    `}

    ${props => props.dark && css`
     background: #2f3045;
    `}
    ${props => props.light && css`
     background: #d9f8fa;
    `}
    ${props => props.grey && css`
     background: #ccc;
    `}
  }

  p:first-child {
    margin-top: 0;
  }

  h2 {
    color: #2f3045;
    margin-bottom: 0;
    ${props => props.dark && css`
     color: #42e2ee;
    `}
  }

  h2 ~ p {
    margin-top: 10px;
    color: #000;
    padding-bottom: 35px;
    ${props => props.dark && css`
     color: #fff;
    `}
  }

  p ~ hr {
    color: #000;
    height: 1px;
    border: 0;
    border-top: 1px solid #000;
    ${props => props.dark && css`
     color: #ccc;
     border-top: 1px solid #ccc;
    `}
  }

  h3 {
    color: #2f3045;
    font-weight: 400;
    ${props => props.primary && css`
      color: #fff;
    `}
  }

  h2 ~ h3 {
    margin-top: 0;
  }
`;


