import { Resource } from '../resources'
import { BuildingType, Building } from '../buildings'

export class Mill extends Building {
  constructor(count: number = 0) {
    super(BuildingType.MILL, Resource.FLOUR)
    this.count = count
    this.cost[Resource.GOLD] = 15
    this.consumes = {
      [Resource.WATER]: 2,
      [Resource.CROP]: 5
    }
    this.prettyName = 'Mill'
    this.description = 'Wer auf dieser Mühle stirbt, bestimme ich!'
  }
}
