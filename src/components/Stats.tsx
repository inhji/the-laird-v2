import * as React from 'react'

const Stats: React.StatelessComponent<{
  date: string
  ticks: number
  population: number
}> = ({ date, ticks, population }) => (
  <div>
    <div className="flex space-between">
      <div className="flex-inner">Date</div>
      <div className="flex-inner">{date}</div>
    </div>
    <div className="flex space-between">
      <div className="flex-inner">Ticks</div>
      <div className="flex-inner">{ticks}</div>
    </div>
    <div className="flex space-between">
      <div className="flex-inner">Population</div>
      <div className="flex-inner">{population}</div>
    </div>
  </div>
)

export default Stats
