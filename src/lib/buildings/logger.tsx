import { Resource } from '../resources'
import { BuildingType, Building } from '../buildings'

export class Logger extends Building {
  constructor(count: number = 0) {
    super(BuildingType.LOGGER, Resource.WOOD)
    this.count = count
    this.cost = {
      [Resource.GOLD]: 10,
      [Resource.PLANK]: 10
    }
    this.prettyName = 'Logger'
    this.description = 'Logging crititcal trees.'
  }
}
