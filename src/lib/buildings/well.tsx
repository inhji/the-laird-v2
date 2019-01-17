import { Resource } from '../resources'
import { BuildingType, Building } from '../buildings'

export class Well extends Building {
  constructor(count: number = 0) {
    super(BuildingType.WELL, Resource.WATER)
    this.count = count
    this.cost[Resource.GOLD] = 5
    this.cost[Resource.WOOD] = 10
    this.prettyName = 'Well'
    this.description = 'Water is essential.'
  }
}
