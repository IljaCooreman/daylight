import * as React from 'react';
import { GetTimesResult } from 'suncalc';
import './DayGraph.css';
import { getStartOfDay, getPercentageOfDay } from './helpers';
import { UnixTime } from './constants';

interface IDayGraphProps {
  timings: GetTimesResult
}

const DayGraph: React.FunctionComponent<IDayGraphProps> = ({ timings }) => {

  const startOfDay: UnixTime = getStartOfDay(timings.sunrise)
  const percentageSunrise = getPercentageOfDay(timings.sunrise, startOfDay)
  const percentageSunset = getPercentageOfDay(timings.sunset, startOfDay)
  console.log("TCL: percentageSunrise", percentageSunrise, percentageSunset)



  return (
    <div className="daygraph--container">

      <div
        className="daygraph--daytime"
        style={{ left: `${percentageSunrise}%`, width: `${percentageSunset - percentageSunrise}%` }}
      />
      {/* <div
        className="daygraph--sunset"
        style={{ left: '57%' }}
      >
        <span className="daygraph--indicator--time">
          12:00
        </span>
      </div> */}
    </div>
  );
};

export default DayGraph;
