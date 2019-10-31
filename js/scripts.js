const cardsData = [
  {
    cardHeadline: 'Supervisor',
    cardBody: 'Monitors activity to identify project roadblocks',
    cardIconSrc: './images/icon-supervisor.svg',
    borderColor: 'cyan-border'
  },
  {
    cardHeadline: 'Team Builder',
    cardBody: 'Scans our talent network to create the optimal team for your project',
    cardIconSrc: './images/icon-team-builder.svg',
    borderColor: 'red-border'
  },
  {
    cardHeadline: 'Karma',
    cardBody: 'Regularly evaluates our talent to ensure quality',
    cardIconSrc: './images/icon-karma.svg',
    borderColor: 'orange-border'
  },
  {
    cardHeadline: 'Calculator',
    cardBody: 'Uses data from past projects to provide better delivery estimates',
    cardIconSrc: './images/icon-calculator.svg',
    borderColor: 'blue-border'
  }
];

const cardContainerGrid = document.getElementById('js-card-grid');

function addCardSection(cardsData) {
  cardsData.forEach(cardData => {
    // create card
    const card = document.createElement('section');
    card.setAttribute('class', `card ${cardData.borderColor} section-padding`);

    // card.style.borderTop = `4px solid ${cardData.borderColor}`; // add inline style not recommended
    cardContainerGrid.appendChild(card);

    // create, add card data
    const cardHeadline = document.createElement('h4');
    cardHeadline.setAttribute('class', 'card-headline');
    cardHeadline.innerHTML = cardData.cardHeadline;
    card.appendChild(cardHeadline);

    const cardBody = document.createElement('p');
    cardBody.setAttribute('class', 'card-body');
    cardBody.innerHTML = cardData.cardBody;
    card.appendChild(cardBody);

    const cardIcon = document.createElement('img');
    cardIcon.setAttribute('class', 'card-icon');
    cardIcon.setAttribute('src', cardData.cardIconSrc);
    // setAttributes(cardIcon, { class: 'card-icon', src:  });
    card.appendChild(cardIcon);
  });
}

addCardSection(cardsData);
