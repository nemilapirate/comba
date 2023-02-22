import React from 'react'
import Arme from './Arme/Arme';
import ImageArc from '../../../assets/ImgArmes/arc.png'
import ImageEpee from '../../../assets/ImgArmes/epee.png'
import ImageHache from '../../../assets/ImgArmes/ax.png'
import ImageMasse from '../../../assets/ImgArmes/masse.jpg'
import './Armes.css'

export default function Armes(props) {
  return (
    <div className='content-list-armes'>
       {props.listeArmes.map(arme => {
        let imgArme;
        switch(arme){
            case "arc" : imgArme=ImageArc;
            break;
            case "masse" : imgArme=ImageMasse;
            break;
            case "hache" : imgArme=ImageHache;
            break;
            case "epee" : imgArme=ImageEpee;
            break;
            default:  
        }
        return <Arme key={arme} imageArme={imgArme} className='list-arme'>{arme}</Arme>
       })}
    </div>
  );
}
