import React from 'react'

const Like = props => {
    let classes = "fa fa-heart" ;//ini untuk memanggil font-awesome hati
    if(!props.liked) classes += "-o" ;//tanda seru ini adalah NOT. Dibaca jika tidak di klik like nya maka hatinya akan putih
  return (
    <i onClick={props.onClick} style={{cursor: "pointer"}} className={classes} aria-hidden="true"></i>
    // dibaca jika di klik props nya di klik, maka cursor akan berubah menjadi pointer dan hati nya akan berubah jadi hitam. true nya ini jika benar di klik
  )
}

export default Like