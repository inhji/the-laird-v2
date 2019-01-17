import { Resource } from '../resources'
import { BuildingType, Building } from '../buildings'

export class Farm extends Building {
  constructor(count: number = 0) {
    super(BuildingType.WELL, Resource.CROP)
    this.count = count
    this.cost[Resource.GOLD] = 20
    this.consumes = {
      [Resource.WATER]: 1
    }
    this.prettyName = 'Farm'
    this.description = 'No gold-farming here.'
  }
}
