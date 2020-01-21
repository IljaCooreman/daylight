export interface PartialCoordinates extends Partial<Coordinates> {
  latitude: number,
  longitude: number,
}
export type UnixTime = number;
export const DEFAULT_LOCATION: PartialCoordinates = { latitude: 0, longitude: 0 }

export const MS_IN_A_DAY = 1000 * 60 * 60 * 24

export const HALF_LIST_LENGTH = 180

export enum COLORS {
  orange = '#F4C342',
  red = '#C2256C',
  purple = '#4914D7',
  blue = '#2D5488',
}

interface Phase {
  color: COLORS,
  name: string,
}

enum Phases {
  dusk,
  sunrise,
  dawn,
  sunset
}

// export const PHASES = {
//   [Phases.dusk]: {
//     color: COLORS.purple,
//     name: "dusk"
//   },
//   [Phases.sunrise]: {
//     color: COLORS.red,
//     name: 'sunrise',
//   },

//   [Phases.dawn]: {
//     color: COLORS.purple,
//     name: "dawn"
//   },
//   [Phases.sunset]: {
//     color: COLORS.red,
//     name: 'sunset',
//   },
// }