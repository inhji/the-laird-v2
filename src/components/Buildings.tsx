import * as React from 'react'
import { Buildings as BuildingsType } from '../lib/buildings'
import Building from './Building'

const Buildings: React.StatelessComponent<{
  buildings: BuildingsType
  build: any
  toggleActive: any
}> = ({ buildings, build, toggleActive }) => (
  <div className="buildings">
    {Object.keys(buildings).map(building => (
      <Building
        building={buildings[building]}
        build={build}
        toggleActive={toggleActive}
      />
    ))}
  </div>
)

export default Buildings
