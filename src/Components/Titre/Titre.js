import React from 'react'
import './Titre.css'

export default function Titre(props) {
  return (
    <h1 className='main-title'>{props.children}</h1>
  )
}
