import React, { Component } from 'react'
import './App.css'

import { BASE_GAME_SPEED, DATE_MULTIPLIER, DATE_OFFSET } from '../lib/constants'

import { Game } from '../lib/game'

import BuildQueue from './BuildQueue'
import Buildings from './Buildings'
import Resources from './Resources'
import Footer from './Footer'
import Stats from './Stats'

interface Props {}
interface State {
  game: Game
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = { game: new Game() }
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

  toggleActive = (e: any) => {
    const type = e.target.id

    this.state.game.buildings[type].toggleActive()
  }

  render() {
    const game = this.state.game

    return (
      <div>
        <span className="laird">
          <i className="nes-mario image" />
          <p className="nes-balloon from-left text">
            Greetings, thrall!
            <br /> You are mine now!
          </p>
        </span>
        <header>
          <div className="flex">
            <h1 className="title">THE LAIRD</h1>
            <h2>(alpha)</h2>
          </div>
        </header>
        <div className="flex space-evenly">
          <div className="flex-inner left-side">
            <div className="flex vertical">
              <div className="flex-inner nes-container with-title resource-container">
                <p className="title">Stats</p>
                <Stats
                  ticks={game.ticks}
                  date={this.date()}
                  population={game.population}
                />
              </div>
              <div className="flex-inner nes-container with-title resource-container">
                <p className="title">Resources</p>
                <Resources
                  resources={game.resources}
                  buildings={game.buildings}
                  calcProductionFor={game.calcProductionFor}
                />
              </div>
            </div>
          </div>

          <div className="flex-inner nes-container with-title building-container">
            <p className="title">Buildings</p>

            <Buildings
              buildings={game.buildings}
              build={this.state.game.build}
              toggleActive={this.toggleActive}
            />
          </div>

          <div className="flex-inner right-side">
            <div className="flex vertical">
              <div className="flex-inner nes-container with-title queue-container">
                <p className="title">Queue</p>

                <BuildQueue
                  queue={game.buildQueue}
                  buildings={game.buildings}
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default App
