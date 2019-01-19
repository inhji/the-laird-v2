import * as React from 'react'
import { Queue, Buildings } from '../lib/buildings'

const BuildQueue: React.StatelessComponent<{
  queue: Queue
  buildings: Buildings
}> = ({ queue, buildings }) => (
  <div className="build-queue">
    {Object.keys(queue).length === 0 && <p className="grey">Nothing to do..</p>}

    {Object.keys(queue).map(key => (
      <div className="item">
        <span>Building {buildings[key].prettyName}...</span>
        <progress
          value={queue[key]}
          max="100"
          className="nes-progress is-primary"
        />
      </div>
    ))}
  </div>
)

export default BuildQueue
