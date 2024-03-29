import { Resource } from '../resources'
import { BuildingType, Building } from '../buildings'

export class Well extends Building {
  constructor(count: number = 0) {
    super(BuildingType.WELL, Resource.WATER)
    this.count = count
    this.cost = {
      [Resource.GOLD]: 5,
      [Resource.STONE]: 10
    }
    this.prettyName = 'Well'
    this.description = 'Water is essential.'
  }
}
