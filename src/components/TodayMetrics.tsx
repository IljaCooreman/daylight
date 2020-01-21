import React from 'react';
import styled from 'styled-components';
import TimeBadge from './TimeBadge';
import { store } from '../store';
import format from 'date-fns/format'
import { sToMinutesSeconds } from '../helpers';
import MetricsRow from './MetricsRow';
import { COLORS } from '../constants';

const dateFormat = "HH:mm"

const TodayMetrics: React.SFC = () => {
  const { sunrise, sunriseDelta, sunset, sunsetDelta, dayLength, dayLengthDelta, dusk, goldenHour, goldenHourEnd, dawn, dawnDelta } = store.todayMetrics;
  console.log(dayLength / 1000 / 60 / 60)
  return (
    <div>
      <TimeBadgeWrapper>
        <TimeBadge
          title={'Sunrise'}
          value={format(sunrise, dateFormat)}
          subValue={sToMinutesSeconds(sunriseDelta).toString({})}
        />
        <TimeBadge
          title={'Day Length'}
          value={
            sToMinutesSeconds(dayLength).toString(
              { hours: true, minutes: true, seconds: false, direction: false }
            )}
          subValue={sToMinutesSeconds(dayLengthDelta).toString({})}
        />
        <TimeBadge
          title={'Sunset'}
          value={format(sunset, dateFormat)}
          subValue={sToMinutesSeconds(sunsetDelta).toString({})}
        />
      </TimeBadgeWrapper>
      <MetricsRow
        morningDuration={''}
        morningTime={format(goldenHourEnd, dateFormat)}
        color={COLORS.orange}
        title='Golden Hour'
        eveningTime={format(goldenHour, dateFormat)}
        eveningDuration={''}
      />
      <MetricsRow
        morningDuration={sToMinutesSeconds(sunrise.getTime() - dawn.getTime()).toString({ direction: false })}
        morningTime={format(dawn, dateFormat)}
        color={COLORS.purple}
        title='Nautical twilight'
        eveningTime={format(dusk, dateFormat)}
        eveningDuration={sToMinutesSeconds(dawnDelta).toString({})}
      />
    </div>
  )
}

export default TodayMetrics;

const TimeBadgeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`