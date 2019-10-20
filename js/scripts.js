const cardsData = [
  {
    cardHeadline: 'Supervisor',
    cardBody: 'Monitors activity to identify project roadblocks',
    cardIconSrc: './images/icon-supervisor.svg'
  },
  {
    cardHeadline: 'Team Builder',
    cardBody: 'Scans our talent network to create the optimal team for your project',
    cardIconSrc: './images/icon-team-builder.svg'
  },
  {
    cardHeadline: 'Karma',
    cardBody: 'Regularly evaluates our talent to ensure quality',
    cardIconSrc: './images/icon-karma.svg'
  },
  {
    cardHeadline: 'Calculator',
    cardBody: 'Uses data from past projects to provide better delivery estimates',
    cardIconSrc: './images/icon-calculator.svg'
  }
];

const cardContainer = document.getElementById('card-container');

function addCardSection(cardsData) {
  cardsData.forEach(cardData => {
    // create card
    const card = document.createElement('section');
    card.setAttribute('class', 'card');
    cardContainer.appendChild(card);

    // create, add card data
    const cardHeadline = document.createElement('h4');
    cardHeadline.setAttribute('class', 'card-headline');
    cardHeadline.innerHTML = cardData.cardHeadline;
    card.appendChild(cardHeadline);

    const cardBody = document.createElement('p');
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
