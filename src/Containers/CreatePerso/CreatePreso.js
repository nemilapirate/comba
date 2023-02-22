import React, { Component} from 'react'
import Titre from '../../Components/Titre/Titre'
import Bouton from '../../Components/Bouton/Bouton'
import Perso from './Perso/Perso'
import Armes from './Armes/Armes'
import './CreatePerso.css'


class CreatePerso extends Component {
    state = {
        personnage: {
            image : 1,
            force : 0,
            agilite : 0,
            intelligence : 0
        },
        nbPv : 10, 
        armes : ["epee","hache", "arc", "masse" ]
    }
    handlePrevImage = () => {
        this.setState(oldState => {
            const newPerso = {...oldState.personnage};
            if(oldState.personnage.image <= 1) newPerso.image = 4;
            else newPerso.image --;
            return {personnage:newPerso};
        })
    }
    handleNextImage = () => {
        this.setState(oldState => {
            const newPerso = {...oldState.personnage};
            if(oldState.personnage.image >= 4) newPerso.image = 1;
            else newPerso.image ++;
            return {personnage:newPerso};
        })
    }
    handleEnleverPoint = (carac) => {
        this.setState((oldState,props) => {
            // On verifie avant que les carcteristique ne sont pas a zéro et inférieur à 7
            if(oldState.personnage[carac] <= 0 || oldState.nbPv >= 7) return null;
            // Dans ce cas on retire un point
            const newPointCarac = oldState.personnage[carac] - 1;
            // On créer un nouvel objet des caracteristiques
            const newPerso = {...oldState.personnage};
            // Auquel on rajoute notre point retiré
            const newnNbPv = oldState.nbPv + 1;
            newPerso[carac] = newPointCarac;
            return {
                personnage:newPerso,
                nbPv : newnNbPv
            }
        })
    }
    handleAjouterPoint = (carac) => {
        this.setState((oldState,props) => {
            if(oldState.personnage[carac] >= 5 || oldState.nbPv <= 0) return null;
            const newPointCarac = oldState.personnage[carac] + 1;
            const newPerso = {...oldState.personnage};
            const newnNbPv = oldState.nbPv - 1;
            newPerso[carac] = newPointCarac;
            return {
                personnage:newPerso,
                nbPv : newnNbPv
            }
        })
    }
    render() {
        return (
            <div className="container">
                <Titre>Créateur de personnages</Titre>
                <Perso
                // On envoi toutes les informations de nos personnages
                    {...this.state.personnage}
                    prev={this.handlePrevImage}
                    next={this.handleNextImage}
                    nbPv={this.state.nbPv}
                    enleverPoint={this.handleEnleverPoint}
                    ajouterPoint={this.handleAjouterPoint}
                ></Perso>
                <Armes listeArmes = {this.state.armes} />
                <Bouton typeBtn="btn-red" clic={() => console.log("réinitialisation")}>Réinitialisé</Bouton>
                <Bouton typeBtn="btn-green" clic={() => console.log("création")}>Créer</Bouton>
            </div>
        );
    }
}


export default CreatePerso;
