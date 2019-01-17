import * as React from 'react'
import { Queue } from '../lib/buildings'

const BuildQueue: React.StatelessComponent<{ queue: Queue }> = ({ queue }) => (
  <div className="build-queue">
    {Object.keys(queue).map(key => (
      <div className="item">
        {key}:{' '}
        <progress
          value={queue[key]}
          max="100"
          className="nes-progress is-success"
        />
      </div>
    ))}
  </div>
)

export default BuildQueue
