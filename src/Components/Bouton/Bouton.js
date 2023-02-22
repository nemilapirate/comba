import React from 'react'
import './Bouton.css'

export default function Bouton(props) {
  // Ici on créer la const pour récupéré les informations sur le css des btn
  const btnCss =`btn ${props.typeBtn}`;
  return (
    <div className="content-btn">
      {/* Dans le bouton className affichera la couleur, les props du click et l'élement children du btn */}
        <button className={btnCss} onClick={props.clic}>{props.children}</button>
    </div>
  )
}

