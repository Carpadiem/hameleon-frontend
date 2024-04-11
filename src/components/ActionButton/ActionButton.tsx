// react, styles, router
import React from 'react'
import styles from './ActionButton.module.css'

interface ActionButtonProps {
  text: string
  action: () => void
  bcolor?: string
  tcolor?: string
  width?: number | string
  height?: number | string
  radius?: number | string
  iconSvg?: React.ReactSVGElement | undefined
  icolor?: string
  border?: string
}
const ActionButton = ({
  text,
  action,
  bcolor = 'black',
  tcolor = 'white',
  width = 'auto',
  height = 'auto',
  radius = 3,
  iconSvg = undefined,
  icolor = 'red',
  border = 'none',
}: ActionButtonProps) => {
  //
  const btn_style = {
    backgroundColor: bcolor,
    color: tcolor,
    textAlign: 'center',
    border: border,
    height: height,
    width: width,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } as React.CSSProperties

  return (
    <>
      <div className={styles.btn} style={btn_style} onClick={action}>
        {text}
      </div>
    </>
  )
}

export default ActionButton
