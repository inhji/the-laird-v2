import * as React from 'react'
import { Resources as ResourcesType } from '../lib/resources'
import Icon from './Icon'

const Resources: React.StatelessComponent<{ resources: ResourcesType }> = ({
  resources
}) => (
  <div className="resources">
    {Object.keys(resources).map(resource => (
      <div className="flex">
        <div className="flex-inner">
          <Icon name={resource} /> {resource}
        </div>
        <div className="flex-inner">{resources[resource].toFixed(1)}</div>
      </div>
    ))}
  </div>
)

export default Resources
