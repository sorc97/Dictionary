import React from 'react'

const ContextMenu = ({contextMenuItems = f=> f, isHidden = true, top = 0, left = 0, elemId = 0}) => {
  let _menu;

  const showContext = () => {
    
  }

  return(
    <div 
      className='contextMenu-wrapper' 
      ref = {input => _menu = input}
    >
      <ul className='contextMenu-list'>
        {
          contextMenuItems.map((item, i) => 
            <li className='contextMenu-item' key={i}>
              {item}
            </li>
          )
        }
      </ul>
    </div>
  )
}
 
export default ContextMenu