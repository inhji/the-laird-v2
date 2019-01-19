import * as React from 'react'
import classnames from 'classnames'
import { Building as BuildingClass } from '../lib/buildings'
import Icon from './Icon'

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

  activeButton() {
    const isActive = this.props.building.active
    const classes = classnames(
      'nes-btn',
      { 'is-error': isActive },
      { 'is-success': !isActive }
    )

    return (
      <button
        id={this.type()}
        onClick={this.props.toggleActive}
        className={classes}
      >
        {isActive ? 'zZz' : 'GO!'}
      </button>
    )
  }

  buildButton() {
    return (
      <button
        id={this.type()}
        onClick={this.props.build}
        className="nes-btn is-primary build"
      >
        +1
      </button>
    )
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
    const { building, build } = this.props

    return (
      <div className="building">
        {building.root === false && (
          <div className="buttons">
            {this.buildButton()}
            {this.activeButton()}
          </div>
        )}
        <div>
          <span className="active">{this.activeText()}</span>
          <span className={this.activeClass()} title={building.description}>
            {this.buildingName()}
          </span>
        </div>

        <div className="production grey">
          Produces: <Icon name={building.produces} />
        </div>
        {!building.root && (
          <div className="cost grey">
            Build:{' '}
            {Object.keys(building.cost).map(resource => (
              <span>
                <Icon name={resource} /> {building.cost[resource]}{' '}
              </span>
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Building
