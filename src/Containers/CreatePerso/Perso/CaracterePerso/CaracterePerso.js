import React from 'react'
import Caractere from './Caractere/Caractere'
import './CaracterePerso.css'

export default function CaracterePerso(props) {
  return (
    <div className="contente-caractere">
        <div>P.V restants :
            <span className='span-carac'> {props.nbPv}</span>
        </div>
        <div>
            <Caractere 
              nbPoints={props.force}
              moins={() => props.enleverPoint('force')}
              plus={() => props.ajouterPoint('force')}
              >
              Force </Caractere>
            <Caractere 
              nbPoints={props.agilite}
              moins={() => props.enleverPoint('agilite')}
              plus={() => props.ajouterPoint('agilite')}
            >Agilité </Caractere>
            <Caractere 
              nbPoints={props.intelligence}
              moins={() => props.enleverPoint('intelligence')}
              plus={() => props.ajouterPoint('intelligence')}
            >Intélligence </Caractere>
        </div>
    </div>
  )
}
