import React from 'react'

export default function Arme(props) {
  return (
    <div>
        <div className="content-img-arme">
            <img src={props.imageArme} alt={props.children} className="image-arme"/>
        </div>
        <div className="nom-arme">
            {props.children}
        </div>
    </div>
  )
}
