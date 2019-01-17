import { Resource } from '../resources'
import { BuildingType, Building } from '../buildings'
import { Modifier } from '../modifiers'

export class Castle extends Building {
  constructor(count: number = 1) {
    super(BuildingType.CASTLE, Resource.GOLD)
    this.count = count
    this.cost[Resource.LOVE] = 1
    this.prettyName = 'Castle'
    this.description = 'Where u live irl.'
    this.modifiers = [new Modifier('CastleMod', 0.1)]
    this.root = true
  }
}
