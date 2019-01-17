import React, { Component } from 'react'
import './App.css'

import { BASE_GAME_SPEED, DATE_MULTIPLIER, DATE_OFFSET } from '../lib/constants'

import { GameState } from '../lib/GameState'

import BuildQueue from './BuildQueue'
import Resources from './Resources'
import Buildings from './Buildings'

interface Props {}
interface State {
  game: GameState
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = { game: new GameState() }
  }

  componentDidMount() {
    window.setInterval(this.update, BASE_GAME_SPEED)
  }

  update = () => {
    this.setState({
      game: this.state.game.update()
    })
  }

  date = (): string => {
    return new Date(
      this.state.game.ticks * DATE_MULTIPLIER + DATE_OFFSET
    ).toLocaleDateString()
  }

  build = (e: any) => {
    const type = e.target.id

    if (!this.state.game.buildQueue[type]) {
      this.state.game.buildQueue[type] = 0
    }
  }

  toggleActive = (e: any) => {
    const type = e.target.id

    this.state.game.buildings[type].toggleActive()
  }

  render() {
    const game = this.state.game

    return (
      <div>
        <span className="laird">
          <p className="nes-balloon from-right">Greetings, thrall!</p>
          <i className="nes-octocat" />
        </span>
        <header>
          <div className="flex">
            <h1 className="title">THE LAIRD (alpha)</h1>
          </div>
        </header>
        <div className="flex">
          <div className="flex-inner nes-container with-title">
            <p className="title">Resources</p>
            <Resources resources={game.resources} />
          </div>

          <div className="flex-inner nes-container with-title building-container">
            <p className="title">Buildings</p>

            <Buildings
              buildings={game.buildings}
              build={this.build}
              toggleActive={this.toggleActive}
            />
          </div>
        </div>
        <div className="flex">
          <div className="flex-inner">
            <BuildQueue queue={game.buildQueue} />
          </div>
        </div>

        <div className="flex">
          <p>
            Date: {this.date()} ({this.state.game.ticks})
          </p>
        </div>
      </div>
    )
  }
}

export default App
