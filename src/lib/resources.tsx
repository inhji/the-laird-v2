export enum Resource {
  WATER = 'WATR',
  WOOD = 'WOOD',
  GOLD = 'GOLD',
  CROP = 'CROP',
  BREAD = 'BREA',
  FLOUR = 'FLOR',
  PLANK = 'PLNK',
  STONE = 'STNE',
  LOVE = 'LOVE'
}

export interface Resources {
  [resource: string]: number
}
