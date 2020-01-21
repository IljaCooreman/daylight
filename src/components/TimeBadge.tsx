import React from 'react';
import styled from 'styled-components'
import { COLORS } from '../constants'


export interface TimeBadgeProps {
  title: string,
  value: string | number,
  subValue: string | number,
}

const TimeBadge: React.SFC<TimeBadgeProps> = ({ title, value, subValue }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Value>{value}</Value>
      <SubValue>{subValue}</SubValue>
    </Wrapper>
  )
}

export default TimeBadge;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: 13px;
  margin: 13px;
  background: rgba(255,255,255,0.77);
  box-shadow: 0 1px 4px 0 rgba(180,180,180,0.50);
  border-radius: 11px;
  font-family: Roboto-Regular;
  font-size: 12px;
`;

const Title = styled.span`
  font-family: Roboto-Thin;
  font-size: 12px;
  color: #000000;
`;

const Value = styled.span`
  font-family: Roboto-Regular;
  font-size: 16px;
  color: #000000;
`;

const SubValue = styled.span`
opacity: 0.4;
font-family: Roboto-Regular;
font-size: 10px;
color: ${COLORS.blue};
`