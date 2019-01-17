export enum Resource {
  NOTHING = 'NOTHING',
  WATER = 'WATER',
  WOOD = 'WOOD',
  GOLD = 'GOLD',
  CROP = 'CROP',
  BREAD = 'BREAD',
  FLOUR = 'FLOUR',
  ALLTHELOVEINTHEWORLD = 'ALLTHELOVEINTHEWORLD'
}

export interface Resources {
  [resource: string]: number
}
