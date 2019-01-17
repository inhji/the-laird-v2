import * as React from 'react'
import { Building as BuildingClass } from '../lib/buildings'

interface Props {
  building: BuildingClass
  build: any
  toggleActive: any
}
interface State {}

class Building extends React.Component<Props, State> {
  type() {
    return this.props.building.type.toString()
  }

  activeText() {
    return this.props.building.active ? '' : 'zZz '
  }

  activeClass() {
    return this.props.building.active ? 'name' : 'name grey'
  }

  buildingName() {
    const building = this.props.building

    return (
      <span>
        {building.prettyName}{' '}
        {building.root === false && (
          <span>
            ({building.working}/{building.count})
          </span>
        )}
      </span>
    )
  }

  render() {
    const { building, build, toggleActive } = this.props

    return (
      <div className="building">
        {building.root === false && (
          <div className="buttons">
            <a
              href="#"
              id={this.type()}
              onClick={build}
              className="nes-btn is-success build"
            >
              +1
            </a>
            <a
              href="#"
              id={this.type()}
              onClick={toggleActive}
              className="nes-btn build"
            >
              zZz
            </a>
          </div>
        )}
        <div>
          <span className="active">{this.activeText()}</span>
          <span className={this.activeClass()}>{this.buildingName()}</span>
        </div>
        <div className="description grey">{building.description}</div>
        {building.root === false && (
          <div className="cost grey">
            Building Cost:{' '}
            {Object.keys(building.cost).map(resource => (
              <span>
                {building.cost[resource]} {resource}
              </span>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Building
