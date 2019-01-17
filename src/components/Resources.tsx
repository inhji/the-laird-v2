import * as React from 'react'
import { Resources as ResourcesType } from '../lib/resources'
import Icon from './Icon'

const Resources: React.StatelessComponent<{ resources: ResourcesType }> = ({
  resources
}) => (
  <div className="resources">
    {Object.keys(resources).map(resource => (
      <div>
        <Icon name={resource} /> {resource}: {resources[resource].toFixed(1)}
      </div>
    ))}
  </div>
)

export default Resources
