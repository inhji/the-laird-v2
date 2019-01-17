import { Building } from './building'

export { Building } from './building'
export { Castle } from './castle'
export { Logger } from './logger'
export { Well } from './well'
export { Farm } from './farm'
export { Bakery } from './bakery'
export { Mill } from './mill'
export { Sawmill } from './sawmill'

export interface Buildings {
  [building: string]: Building
}

export interface Queue {
  [building: string]: number
}

export enum BuildingType {
  CASTLE,
  WELL,
  LOGGER,
  SAWMILL,
  FARM,
  MILL,
  BAKERY
}
