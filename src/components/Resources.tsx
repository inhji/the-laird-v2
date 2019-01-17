import * as React from 'react'
import {
  Resources as ResourcesType,
  Resource as ResourceType
} from '../lib/resources'
import { Buildings } from '../lib/buildings'
import Icon from './Icon'

interface Props {
  type: string
  value: number
  production: number
}
interface State {}

class Resource extends React.Component<Props, State> {
  productionClass() {
    return this.props.production > 0 ? 'green' : 'grey'
  }

  render() {
    const { type, value, production } = this.props

    return (
      <div className="flex space-between">
        <div className="flex-inner">
          <span>
            <Icon name={type} /> {type}
          </span>{' '}
          <span className={this.productionClass()}>+{production}</span>
        </div>
        <div className="flex-inner">{value.toFixed(0)}</div>
      </div>
    )
  }
}

const Resources: React.StatelessComponent<{
  resources: ResourcesType
  buildings: Buildings
  calcProductionFor: any
}> = ({ resources, buildings, calcProductionFor }) => (
  <div className="resources">
    {Object.keys(resources).map(resource => (
      <Resource
        type={resource}
        value={resources[resource]}
        production={calcProductionFor(resource, buildings)}
      />
    ))}
  </div>
)

export default Resources
