import * as React from 'react'

const Footer: React.StatelessComponent<{
  date: string
  ticks: number
}> = ({ date, ticks }) => (
  <footer>
    <p>
      Date: {date} ({ticks})
    </p>
    <p>
      <span>Created by Inhji with Typescript, </span>
      <a href="https://nostalgic-css.github.io/NES.css/">NES.css</a>
      <span> and </span>
      <i className="nes-icon heart is-small" />
    </p>
  </footer>
)

export default Footer
