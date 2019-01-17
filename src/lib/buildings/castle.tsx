import { Resource } from '../resources'
import { BuildingType, Building } from '../buildings'

export class Castle extends Building {
  constructor(count: number = 1) {
    super(BuildingType.CASTLE, Resource.GOLD)
    this.count = count
    this.cost[Resource.ALLTHELOVEINTHEWORLD] = 1
    this.prettyName = 'Castle'
    this.description = 'Where u live irl.'
  }
}