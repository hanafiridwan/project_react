import React from 'react'

const GroupList = (props) => {
    const {items, textProperty, valueProperty, selectedItem, onItemSelect} = props
  return (
    <ul className='list-group'>
      {items.map(item => ( 
        // items diubah menjadi item
        <li
        onClick={() => onItemSelect(item)}
        key={item[valueProperty]}
        className={item === selectedItem ? "list-group-item active" : "list-group-item"} //Dibaca : jika item dipilih atau diklik maka list grup akan active jika tidak maka akan biasa aja list grup nya
        >
            
            {item[textProperty]} {/*ini untuk memanggil semua data atau itemnya */}
        </li>
      ))}
    </ul>
  )
}

GroupList.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
}

export default GroupList