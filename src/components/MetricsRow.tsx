import React from 'react'
import styled from 'styled-components'

interface MetricsRowProps {
  morningTime: string,
  morningDuration: string,
  eveningTime: string,
  eveningDuration: string,
  title: string,
  color: string,
}

const MetricsRow: React.SFC<MetricsRowProps> = ({ morningDuration, morningTime, color, title, eveningTime, eveningDuration }) => {
  const Dot = styled.div`
    height: 7px;
    width: 7px;
    border-radius: 50%;
    background: ${color};
  `;

  return (
    <Container>
      <Duration>{morningDuration}</Duration>
      <Time>{morningTime}</Time>
      <Container>
        <Dot></Dot>
        <Duration>{title}</Duration>
      </Container>
      <Time>{eveningTime}</Time>
      <Duration>{eveningDuration}</Duration>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Duration = styled.span`
  font-family: Roboto-Thin;
  font-size: 14px;
  color: #000000;
  margin: 4px;
`;

const Time = styled.span`
  font-family: Roboto-Regular;
  font-size: 16px;
  color: #000000;
  margin: 4px;
`;

export default MetricsRow;