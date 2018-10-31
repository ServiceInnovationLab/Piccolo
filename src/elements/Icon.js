import React from 'react';
import styled from 'styled-components';
// import { CreativeCommons } from 'styled-icons/fa-brands';
// import { Check } from 'styled-icons/fa-solid';

// const CreativeCommonsIcon = styled(CreativeCommons)`
//   color: #000;
//   font-size: 40px;
//   height: 40px;
//   position: relative;
//   top: 7px;
// `;

// const CheckIcon = styled(Check)`
//   color: #fff;
//   font-size: 40px;
//   height: 40px;
// `;

// export const Icon = props => (
//   <Fragment>
//     {props.creative_commons && <CreativeCommonsIcon />}
//   </Fragment>
// );

const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => (props.dark ? '#2e4554' : '#50a3d7')};
  margin: 0 auto;
  margin-bottom: 40px;

  > span {
    width: 100px;
    display: inline-block;
    font-size: 45px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    line-height: 100px;
  }
`;

export const IconCircle = props => (
  <Circle>
    {<span>{props.value}</span>}
    {/* {props.value === 0 && <span><CheckIcon /></span>} */}
  </Circle>
);
