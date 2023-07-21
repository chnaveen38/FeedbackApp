import React from 'react'
import propTypes  from 'prop-types'

function Card({children, reverse}) {
  return (
    <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  )
}

Card.defaultProps ={
    reverse: false,
}

Card.propTypes = {
    reverse: propTypes.bool,
    children : propTypes.node.isRequired
}
export default Card