import React from 'react'
import ImagePerso from './ImagePerso/ImagePerso'
import CaracterePerso from './CaracterePerso/CaracterePerso'
import './Perso.css'

export default function Perso(props) {
  return (
    <div className="content-perso">
        <div className="item img-perso">
          <ImagePerso 
          numImage={props.image}
          flecheGauche={props.prev}
          flecheDroite={props.next}
        />
        </div>
        <div className="item carac-perso">
          <CaracterePerso  
            nbPv = {props.nbPv}
            force = {props.force}
            agilite = {props.agilite}
            intelligence = {props.intelligence}
            enleverPoint = {props.enleverPoint}
            ajouterPoint = {props.ajouterPoint}
          />
        </div>
    </div>
  )
}
