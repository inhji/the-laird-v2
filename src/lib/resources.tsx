export enum Resource {
  NOTHING = 'NOTHING',
  WATER = 'WATR',
  WOOD = 'WOOD',
  GOLD = 'GOLD',
  CROP = 'CROP',
  BREAD = 'BREA',
  FLOUR = 'FLOR',
  PLANK = 'PLNK',
  LOVE = 'LOVE'
}

export interface Resources {
  [resource: string]: number
}
