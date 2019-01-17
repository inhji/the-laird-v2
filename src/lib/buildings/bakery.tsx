import { Resource } from '../resources'
import { BuildingType, Building } from '../buildings'

export class Bakery extends Building {
  constructor(count: number = 0) {
    super(BuildingType.BAKERY, Resource.BREAD)
    this.count = count
    this.cost[Resource.GOLD] = 20
    this.consumes = {
      [Resource.WATER]: 1,
      [Resource.FLOUR]: 2,
      [Resource.WOOD]: 1
    }
    this.prettyName = 'Bakery'
    this.description = 'Let them eat cake.'
  }
}
