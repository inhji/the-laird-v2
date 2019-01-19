import * as React from 'react'
import './Icon.css'
import { Resource } from '../lib/resources'

interface Props {
  name: string
}
interface State {}

interface XY {
  x: number
  y: number
}

class Icon extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  convertNameToXY(name: string): XY {
    switch (name) {
      case Resource.LOVE:
        return { x: 16 * 3, y: 16 * 7 }
      case Resource.GOLD:
        return { x: 16 * 6, y: 16 * 14 }
      case Resource.WOOD:
        return { x: 16 * 5, y: 16 * 11 }
      case Resource.PLANK:
        return { x: 16 * 6, y: 16 * 11 }
      case Resource.BREAD:
        return { x: 16 * 31, y: 16 * 7 }
      case Resource.WATER:
        return { x: 16 * 26, y: 16 * 15 }
      case Resource.CROP:
        return { x: 16 * 27, y: 16 * 12 }
      case Resource.FLOUR:
        return { x: 16 * 28, y: 16 * 11 }
      case Resource.STONE:
        return { x: 16 * 8, y: 16 * 5 }
      default:
        return { x: 0, y: 0 }
    }
  }

  render() {
    const { x, y } = this.convertNameToXY(this.props.name)

    return (
      <span className="icon" style={{ backgroundPosition: `${x}px ${y}px` }} />
    )
  }
}

export default Icon
