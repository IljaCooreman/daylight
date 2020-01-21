import { UnixTime, MS_IN_A_DAY } from './constants'

export const getStartOfDay = (time: Date | UnixTime): UnixTime => {
  const date = new Date(time);
  const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  return startOfDay;
}

export const getPercentageOfDay = (time: Date | UnixTime, startOfDayInMs: UnixTime) => {
  const differenceInMs = new Date(time).getTime() - startOfDayInMs
  return (differenceInMs / MS_IN_A_DAY) * 100
}

export interface TimeRequestFormat {
  hours?: boolean,
  minutes?: boolean,
  seconds?: boolean,
  direction?: boolean,
}

export const sToMinutesSeconds = (duration: number) => {
  const absDuration = Math.abs(Math.floor(duration / 1000));
  const direction = duration >= 0 ? '+' : '-';
  const seconds = absDuration % 60;
  const remainingSeconds = absDuration - seconds;
  const minutes = (remainingSeconds / 60) % 60;
  const remainingMinutes = (remainingSeconds / 60 - minutes);
  const hours = remainingMinutes / 60;

  return {
    direction,
    minutes,
    seconds,
    hours,
    toString: ({ hours: needHours, minutes: needMinutes, seconds: needSeconds, direction: needDirection }: TimeRequestFormat) => {
      if (needHours === undefined) { needHours = false }
      if (needMinutes === undefined) { needMinutes = true }
      if (needSeconds === undefined) { needSeconds = true }
      if (needDirection === undefined) { needDirection = true }
      return `
      ${needDirection ? direction : ''}
      ${(needHours && hours > 0) ? `${hours}h` : ''}
      ${(needMinutes && minutes > 0) ? `${minutes}m` : ''}
      ${needSeconds && (minutes > 0 || seconds > 0) ? `${seconds}s` : ''}
      `
    },
  }
}
