import React, { Fragment } from 'react';
import styled from 'styled-components';
import { CreativeCommons } from 'styled-icons/fa-brands';
import { Check } from 'styled-icons/fa-solid';

const _CreativeCommons = styled(CreativeCommons)`
  color: #000;
  font-size: 40px;
  height: 40px;
  position: relative;
  top: 7px;
`;

const _Check = styled(Check)`
  color: #000;
  font-size: 24px;
  height: 24px;
`;

export const Icon = props => (
  <Fragment>
    {props.creative_commons && <_CreativeCommons />}
    {props.check && <_Check />}
  </Fragment>
);
