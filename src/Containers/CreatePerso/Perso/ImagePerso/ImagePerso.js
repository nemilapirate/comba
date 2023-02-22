import React from 'react'
import Perso1 from '../../../../assets/ImgPersonnage/elfe.png'
import Perso2 from '../../../../assets/ImgPersonnage/draenei.png'
import Perso3 from '../../../../assets/ImgPersonnage/mage.png'
import Perso4 from '../../../../assets/ImgPersonnage/trall.png'
import './ImagePerso.css'

export default function ImagePerso(props) {

    let imgDisplay = "";

    if(props.numImage === 1)imgDisplay = Perso1;
    else if(props.numImage === 2) imgDisplay = Perso2;
    else if(props.numImage === 3) imgDisplay = Perso3;
    else if(props.numImage === 4) imgDisplay = Perso4;

    return (
        <div className="content-img-perso">
            <div className="gauche" onClick={props.flecheGauche}></div>
            <img className='image-perso' src={imgDisplay} alt="Item des personnages" />
            <div className="droite" onClick={props.flecheDroite}></div>
        </div>
    )
}
