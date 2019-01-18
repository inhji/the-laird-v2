import { Resource } from '../resources'
import { BuildingType, Building } from '../buildings'

export class Sawmill extends Building {
  constructor(count: number = 0) {
    super(BuildingType.SAWMILL, Resource.PLANK)
    this.count = count
    this.cost = {
      [Resource.GOLD]: 15,
      [Resource.PLANK]: 10
    }
    this.consumes = {
      [Resource.WATER]: 1,
      [Resource.WOOD]: 3
    }
    this.prettyName = 'Sawmill'
    this.description = "Don't cut yourself."
  }
}
