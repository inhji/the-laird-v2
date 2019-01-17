import { BuildingType } from '.'
import { Resource, Resources } from '../resources'
import { Modifier } from '../modifiers'
import { BASE_PRODUCTION } from '../constants'

export class Building {
  type: BuildingType
  count: number
  working: number
  production: number
  produces: Resource
  cost: Resources
  consumes: Resources
  prettyName: string
  description: string
  modifiers: Array<Modifier>
  active: boolean

  constructor(type: BuildingType, produces: Resource) {
    this.type = type
    this.count = 0
    this.working = 0
    this.production = BASE_PRODUCTION
    this.produces = produces
    this.cost = {}
    this.consumes = {}
    this.modifiers = []
    this.prettyName = 'Generic Building'
    this.description = 'Generic Description'
    this.active = true
  }

  calcConsumed(resources: Resources): Resources {
    const result: Resources = {}

    Object.keys(this.consumes).forEach(resource => {
      result[resource] = this.consumes[resource] * this.working
    })

    return result
  }

  calcProduced(resources: Resources): number {
    const oneHouse = this.production * this.calcModifier(this.modifiers)
    let count = this.count

    if (!this.active) {
      this.working = 0
      return 0
    }

    // No dependencies, working with full steam
    if (Object.keys(this.consumes).length === 0) {
      this.working = this.count
      return (oneHouse * count) / 100
    }

    // All hope is lost
    if (count === 0) {
      this.working = 0
      return 0
    }

    // determine how much houses can produce
    while (count > 0) {
      if (this.canProduce(count, this.consumes, resources)) {
        this.working = count
        return (oneHouse * count) / 100
      }
      count--
    }

    // if no house can produce, return zer0
    this.working = 0
    return 0
  }
  canProduce(count: number, consumes: Resources, resources: Resources) {
    for (let key in consumes) {
      const resource = consumes[key]
      const total = resource * count
      if (total > resources[key]) {
        return false
      }
    }

    return true
  }
  calcModifier(modifiers: Array<Modifier>): number {
    if (modifiers.length === 0) {
      return 1
    }

    return modifiers.reduce((total, mod) => mod.value + total, 0)
  }
  toggleActive(): void {
    this.active = !this.active
    console.log(
      `${this.prettyName} is now ${this.active ? 'active' : 'not active'}`
    )
  }
}
