import { observable, computed } from 'mobx'
import { PartialCoordinates, HALF_LIST_LENGTH } from './constants'
import { DEFAULT_LOCATION } from './constants';
import SunCalc from 'suncalc';
import sub from 'date-fns/sub'

export const DAY_IN_MS = 24 * 60 * 60 * 1000;

class Store {
  @observable location: PartialCoordinates = DEFAULT_LOCATION
  @observable selectedDate: Date = new Date()

  @computed get visibleScrollDates() {
    const resultArray = []
    const startDate = new Date(this.selectedDate)
    startDate.setDate(this.selectedDate.getDate() - HALF_LIST_LENGTH)


    for (let index = 0; index < HALF_LIST_LENGTH * 2 + 1; index++) {
      resultArray.push(
        new Date(
          startDate.setDate(startDate.getDate() + 1)
        )
      )
    }
    return resultArray
  }

  @computed get todayMetrics() {
    const todayMetrics = SunCalc.getTimes(
      this.selectedDate,
      this.location.latitude,
      this.location.longitude
    )
    const yesterdayMetrics = SunCalc.getTimes(
      sub(this.selectedDate, { days: 1 }),
      this.location.latitude,
      this.location.longitude
    )

    const todayDayLength = todayMetrics.sunset.getTime() - todayMetrics.sunrise.getTime();
    const yesterdayDayLength = yesterdayMetrics.sunset.getTime() - yesterdayMetrics.sunrise.getTime();

    return {
      ...todayMetrics,
      dayLength: todayDayLength,
      dayLengthDelta: yesterdayDayLength - todayDayLength,
      sunriseDelta: todayMetrics.sunrise.getTime() - yesterdayMetrics.sunrise.getTime() - DAY_IN_MS,
      sunsetDelta: todayMetrics.sunset.getTime() - yesterdayMetrics.sunset.getTime() - DAY_IN_MS,
      dawnDelta: todayMetrics.dawn.getTime() - yesterdayMetrics.dawn.getTime() - DAY_IN_MS,
      duskDelta: todayMetrics.dusk.getTime() - yesterdayMetrics.dusk.getTime() - DAY_IN_MS,
      solarNoonDelta: (todayMetrics.solarNoon.getTime() - yesterdayMetrics.solarNoon.getTime()) - DAY_IN_MS,
    }
  }

  @computed get sunTimes() {
    return this.visibleScrollDates.map(date => (
      {
        ...SunCalc.getTimes(
          date,
          this.location.latitude,
          this.location.longitude
        ),
        date
      }
    ))
  }
}

export const store = new Store()
