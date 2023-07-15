import React from 'react'

function Display(props) {
  return (
    <div className='ball'>
        <div className='display'>
            {props.item}
        </div>
      
    </div>
  )
}

export default Display
