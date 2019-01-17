import { BuildingType } from './buildings'

interface BuildingNames {
  [building: string]: string
}

const buildingNames: BuildingNames = {
  [BuildingType.WELL]: 'Well',
  [BuildingType.LOGGER]: 'Logger',
  [BuildingType.FARM]: 'Farm',
  [BuildingType.BAKERY]: 'Bakery'
}

export function prettyName(type: string) {
  if (buildingNames[type]) {
    return buildingNames[type]
  } else {
    return 'Unknown Building'
  }
}
