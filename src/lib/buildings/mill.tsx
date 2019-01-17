import { Resource } from '../resources'
import { BuildingType, Building } from '../buildings'

export class Mill extends Building {
  constructor(count: number = 0) {
    super(BuildingType.BAKERY, Resource.FLOUR)
    this.count = count
    this.cost[Resource.GOLD] = 20
    this.consumes = {
      [Resource.WATER]: 1,
      [Resource.CROP]: 1
    }
    this.prettyName = 'Mill'
    this.description = 'Wer auf dieser Mühle stirbt, bestimme ich!'
  }
}
