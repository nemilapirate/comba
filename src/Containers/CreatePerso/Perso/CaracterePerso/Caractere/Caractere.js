import React from 'react'
import './Caractere.css'

export default function Caractere(props) {
    let addCarac = [];
    for (let i=0;i < props.nbPoints;i ++){
            addCarac.push(<div key={i} className='points-caractere'></div>)
        }
  return (
    <div className="content-carac">
        <div className="add croix-caractere" 
            onClick={props.plus}
        > + </div>
        <div className="content-points">
            {props.children}
                <div className="content">{addCarac}</div>
        </div>
        <div className="remouve" 
            onClick={props.moins}
        > - </div>
    </div>
  )
}
