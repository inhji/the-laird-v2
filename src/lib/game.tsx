import { Resource, Resources } from './resources'
import {
  Buildings,
  BuildingType,
  Logger,
  Well,
  Farm,
  Bakery,
  Mill,
  Queue,
  Castle,
  Sawmill
} from './buildings'

import {
  STARTING_GOLD,
  BASE_BUILD_SPEED,
  BASE_GAME_SPEED,
  BASE_POPULATION
} from './constants'

interface Production {
  [resource: string]: number
}

export class Game {
  ticks: number
  resources: Resources
  buildings: Buildings
  population: number
  buildQueue: Queue
  production: Production

  constructor() {
    this.ticks = 0
    this.population = 0
    this.resources = {
      [Resource.GOLD]: STARTING_GOLD,
      [Resource.WATER]: 0,
      [Resource.WOOD]: 0,
      [Resource.PLANK]: 0,
      [Resource.CROP]: 0,
      [Resource.FLOUR]: 0,
      [Resource.BREAD]: 0
    }
    this.production = {}

    this.buildings = {
      [BuildingType.CASTLE]: new Castle(),
      [BuildingType.WELL]: new Well(),
      [BuildingType.LOGGER]: new Logger(),
      [BuildingType.SAWMILL]: new Sawmill(),
      [BuildingType.FARM]: new Farm(),
      [BuildingType.MILL]: new Mill(),
      [BuildingType.BAKERY]: new Bakery()
    }

    this.buildQueue = {}
  }

  updateTicks() {
    this.ticks++
  }

  updateTitle() {
    document.title = `The Laird - ${this.ticks}`
  }

  updatePopulation() {
    const totalPopulation = Object.keys(this.buildings).reduce((sum, name) => {
      const building = this.buildings[name]
      let population = 0

      if (!building.root && building.active) {
        population = building.working
      }

      return sum + population
    }, 0)
    this.population = BASE_POPULATION - totalPopulation
  }

  updateBuildings() {
    for (let name in this.buildings) {
      const building = this.buildings[name]
      const produced: number = building.calcProduced(this.resources)

      // TODO: Only add resources when consumes is actually available
      this.updateResource(building.produces, produced)

      for (let resource in building.consumes) {
        this.updateResource(
          resource as Resource,
          -((building.consumes[resource] * building.working) / 100)
        )
      }
    }
  }

  updateProduction() {
    Object.keys(this.resources).forEach(key => {
      const resource = key as Resource
      this.production[key] = this.calcProductionFor(resource, this.buildings)
    })
  }

  calcProductionFor(resource: Resource, buildings: Buildings) {
    return Object.keys(buildings).reduce((sum, type) => {
      if (buildings[type].produces === resource) {
        return sum + buildings[type].working
      } else {
        return sum
      }
    }, 0)
  }

  updateBuildQueue() {
    const queue = this.buildQueue

    for (let name in queue) {
      queue[name] = queue[name] + BASE_BUILD_SPEED / BASE_GAME_SPEED

      if (queue[name] >= 100) {
        this.buildings[name].count++
        delete queue[name]
      }
    }
  }

  updateResource(name: Resource, value: number) {
    this.resources[name] = this.resources[name] + value

    if (this.resources[name] > this.resources.max) {
      this.resources[name] = this.resources.max
    }
  }

  build = (e: any) => {
    const type = e.target.id
    const game = this
    const resourceCosts = game.buildings[type].cost

    if (!game.buildQueue[type]) {
      const allResourcesAvailable = Object.keys(resourceCosts).every(key => {
        const cost = resourceCosts[key]

        return game.resources[key] >= cost
      })

      if (!allResourcesAvailable) return

      for (let key in resourceCosts) {
        const cost = resourceCosts[key]

        if (game.resources[key] >= cost) {
          game.resources[key] = game.resources[key] - cost
        } else {
          return
        }
      }

      game.buildQueue[type] = 0
    }
  }

  update() {
    this.updateTicks()
    this.updateTitle()
    this.updateBuildings()
    this.updateBuildQueue()
    this.updatePopulation()
    this.updateProduction()
    return this
  }
}
