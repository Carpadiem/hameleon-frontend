// react, styles, router
import React from 'react'
import styles from './Point.module.css'
import { Link } from 'react-router-dom'

interface PointProps {
  text: string
  to: string
}
const Point = ({ text, to }: PointProps) => {
  const [lineClass, setLineClass] = React.useState(styles.point_line_leave)

  const mouseEnterHandler = () => {
    setLineClass(styles.point_line_enter)
  }
  const mouseLeaveHandler = () => {
    setLineClass(styles.point_line_leave)
  }

  return (
    <div className={styles.point} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
      <Link className={styles.point_text} to={to}>
        {text}
      </Link>
      <div className={lineClass} />
    </div>
  )
}

export default Point
