import { Resource } from '../resources'
import { BuildingType, Building } from '../buildings'

export class Farm extends Building {
  constructor(count: number = 0) {
    super(BuildingType.FARM, Resource.CROP)
    this.count = count
    this.cost = {
      [Resource.GOLD]: 40,
      [Resource.PLANK]: 10
    }
    this.consumes = {
      [Resource.WATER]: 8
    }
    this.prettyName = 'Farm'
    this.description = 'No gold-farming here.'
  }
}
