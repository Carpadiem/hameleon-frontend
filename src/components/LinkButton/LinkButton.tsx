// react, styles, router
import React from 'react'
import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom'

interface LinkButtonProps {
  text: string
  to: string
  bcolor?: string
  tcolor?: string
  width?: number | string
  height?: number | string
  radius?: number | string
  iconSvg?: React.ReactSVGElement | undefined
  icolor?: string
  border?: string
}
const LinkButton = ({
  text,
  to,
  bcolor = 'black',
  tcolor = 'white',
  width = 'auto',
  height = 'auto',
  radius = 3,
  iconSvg = undefined,
  icolor = 'red',
  border = 'none',
}: LinkButtonProps) => {
  //
  const btn_style = {
    backgroundColor: bcolor,
    border: border,
    borderRadius: radius,
    width: width,
    height: height,
  } as React.CSSProperties

  return (
    <>
      <div className={styles.btn} style={btn_style}>
        <Link to={to} style={{ color: tcolor }}>
          {text}
        </Link>
      </div>
    </>
  )
}

export default LinkButton
