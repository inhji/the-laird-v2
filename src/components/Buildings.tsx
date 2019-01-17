import * as React from 'react'
import { Buildings as BuildingsType } from '../lib/buildings'

const Buildings: React.StatelessComponent<{
  buildings: BuildingsType
  build: any
  toggleActive: any
}> = ({ buildings, build, toggleActive }) => (
  <div className="buildings">
    {Object.keys(buildings).map(building => (
      <div className="building">
        {buildings[building].root === false && (
          <div className="buttons">
            <a
              href="#"
              id={building}
              onClick={build}
              className="nes-btn is-success build"
            >
              +1
            </a>
            <a
              href="#"
              id={building}
              onClick={toggleActive}
              className="nes-btn build"
            >
              zZz
            </a>
          </div>
        )}
        <div>
          <span className="active">
            {buildings[building].active ? '' : 'zZz '}
          </span>
          <span className={buildings[building].active ? 'name' : 'name grey'}>
            {buildings[building].prettyName}{' '}
            {buildings[building].root === false && (
              <span>
                ({buildings[building].working}/{buildings[building].count})
              </span>
            )}
          </span>
        </div>
        <div className="description grey">
          {buildings[building].description}
        </div>
        {buildings[building].root === false && (
          <div className="cost grey">
            Building Cost:{' '}
            {Object.keys(buildings[building].cost).map(resource => (
              <span>
                {buildings[building].cost[resource]} {resource}
              </span>
            ))}
          </div>
        )}
      </div>
    ))}
  </div>
)

export default Buildings
