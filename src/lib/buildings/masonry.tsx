import { Resource } from '../resources'
import { BuildingType, Building } from '../buildings'

export class Masonry extends Building {
  constructor(count: number = 0) {
    super(BuildingType.MASONRY, Resource.STONE)
    this.count = count
    this.cost = {
      [Resource.GOLD]: 20,
      [Resource.PLANK]: 10,
      [Resource.STONE]: 10
    }
    this.consumes = {}
    this.prettyName = 'Masonry'
    this.description = 'Flexibel wie granit'
  }
}
