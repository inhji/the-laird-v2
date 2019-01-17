export enum Resource {
  NOTHING = 'NOTHING',
  WATER = 'WATER',
  WOOD = 'WOOD',
  GOLD = 'GOLD',
  CROP = 'CROP',
  BREAD = 'BREAD',
  FLOUR = 'FLOUR',
  PLANK = 'PLANK',
  LOVE = 'LOVE'
}

export interface Resources {
  [resource: string]: number
}
