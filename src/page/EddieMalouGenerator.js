import React, { Component } from 'react'

export class EddieMalouGenerator extends Component {

  getQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)]
  }

  state = {
    quote: this.getQuote()
  }

  render() {
    return (
      <div>
        <Quote>
          {this.state.quote}
        </Quote>

        <br/><hr/>

        <button className="btn btn-success" onClick={() => this.setState({quote: this.getQuote()})}>
          Plus de savoir du grand Eddy Malou
        </button>
      </div>
    )
  }
}

const Quote = (props) => (
  <span>
    {props.children}
  </span>
);

const quotes = [
  "Bonjour messieurs fidèles",
  "Le nom de mon père c'est le nom du papa du savant de la République Eddy Malou",
  "Renaissance Africaine comparé la Rénaque",
  "Eddy Malou, le premier savant de toute la république démocratique du Congo",
  "Eddy Malou, E, double D, Y, M, A, L, O, U",
  "Hein c'est à dire, ça veut dire imposer la force vers le valium c'est à dire l'estime du savoir",
  "Les gens qui connaissent beaucoup de choses, incristaliser, imposer, iiiiiiiiiiintentionner ça dans toute la république démocratique du Congo",
  "Pour que nous puissions avoir la congolexicomatisation des lois du marché propres aux congolais, je vous en prie",
  "Mais oui c'est clair !",
  "Lorsqu'on parle de tout ces points de vues, c'est l'activisme vers ce qu'on appelle la dynamique des sports",
  "C'est à dire mettre un accent sur les revenus aussi à voir hein",
  "C'est un problème de TGO, théorie générale des organisations.",
  "Comment nous pouvons parvenir aussi à relever aussi le défi",
  "Parce que par exemple le Brésil, à part les végétariens là, le végétalisme, hein !",
  "Nous avons aussi cette même climatologie, le Brésil aussi le …",
  "Roller c'est à dire, quand on parle de ces relais, on voit ce qu'on appelle, le système de la technicité informatisée",
  "C'est à dire nous devons avoir cet, c'est systématique.",
  "Oui ça y fait allusion, parce que quand on parle des sports, on voit la nucléarité",
  "C'est l'Homme qui va vers la dynamique",
  "Oui, mais c'est clair",
  "Ça fait allusion au re-dynamisme de l'Homme qui doit assurer ce qu'on appelle la systématique de l'orthodoxisation",
  "C'est à dire la réflexologie, le reflex, tu sais ça",
  "Oui mais maintenant à ces moments là, il y a la relaxation comme tel",
  "Quand on parle de relaxation c'est les cinq sens qui doivent tourner",
  "Nous avons même affaire à ce qu'on appelle à l'upensmie, ce qui doit être éventualiste sous cet angle là",
  "C'est clair",
  "Quand on parle de relais c'est faire allusion à informatiser le sens dynamiciels vers l'humanisme, je vous en prie"
];