import React from 'react'

const Avatar = ({children, backgroundColor, px, py, color,borderRadius,fonSize,cursor}) => {

    const style = {
    backgroundColor,
    padding:`${py} ${px}`,
    color:color || 'black',
    borderRadius,
    fonSize,
    textAlign:"center",
    cursor: cursor || null,
  }
  return (
    <div style={style}>
      { children }
    </div>
  ) 
}

export default Avatar
