import React, { Fragment } from 'react';
import styled from 'styled-components';
import Container from '../elements/Container';
import List, { Item } from '../elements/List';
import { CreativeCommons } from '../components/CreativeCommons';

const Footer = styled.section`
  padding-top: 45px;
  height: 270px;
  background: #eee;

  a {
    display: inline-block;
    color: #000;
    margin-top: 20px;
    text-decoration: none;
    padding-bottom: 5px;
  }
`;

const PageFooter = () => (
  <Fragment>
    <Footer>
      <Container>
        <List stripped bordered>
          <Item>
            <a href="mailto:serviceinnovationlab@dia.govt.nz">Contact Us</a>
          </Item>
        </List>

        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CreativeCommons label="Creative Commons" />
        </a>
      </Container>
    </Footer>
  </Fragment>
);

export default PageFooter;
