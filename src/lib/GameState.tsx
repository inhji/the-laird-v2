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
  Castle
} from './buildings'

import { STARTING_GOLD, BASE_BUILD_SPEED, BASE_GAME_SPEED } from './constants'

export class GameState {
  ticks: number
  resources: Resources
  buildings: Buildings
  buildQueue: Queue

  constructor() {
    this.ticks = 0
    this.resources = {
      [Resource.GOLD]: STARTING_GOLD,
      [Resource.WOOD]: 0,
      [Resource.BREAD]: 0,
      [Resource.WATER]: 0,
      [Resource.CROP]: 0,
      [Resource.FLOUR]: 0
    }

    this.buildings = {
      [BuildingType.CASTLE]: new Castle(),
      [BuildingType.WELL]: new Well(),
      [BuildingType.LOGGER]: new Logger(),
      [BuildingType.FARM]: new Farm(),
      [BuildingType.MILL]: new Mill(),
      [BuildingType.BAKERY]: new Bakery()
    }

    this.buildQueue = {}
  }

  updateTicks() {
    this.ticks++
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
          -(building.consumes[resource] * building.working)
        )
      }
    }
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
  }

  update() {
    this.updateTicks()
    this.updateBuildings()
    this.updateBuildQueue()
    return this
  }
}
