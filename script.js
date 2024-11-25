document.addEventListener('DOMContentLoaded', () => {
const cardArray = [
    { name : 'blanket',
        img: "pictures/Blanket.jpg"
    },
    { name : 'car',
        img: "pictures/Car.jpg"
    },
    { name : 'knife',
        img: "pictures/Knife.jpg"
    },
    { name : 'leg',
        img: "pictures/Leg.jpg"
    },
    { name : 'pearl',
        img: "pictures/Pearl.jpg"
    },
    { name : 'rifle',
        img: "pictures/Rifle.jpg"
    },
    { name : 'smoon',
        img: "pictures/SMoon.jpg"
    },
    { name : 'tag',
        img: "pictures/Tag.jpg"
    },

    //second half
    { name : 'blanket',
        img: "pictures/Blanket.jpg"
    },
    { name : 'car',
        img: "pictures/Car.jpg"
    },
    { name : 'knife',
        img: "pictures/Knife.jpg"
    },
    { name : 'leg',
        img: "pictures/Leg.jpg"
    },
    { name : 'pearl',
        img: "pictures/Pearl.jpg"
    },
    { name : 'rifle',
        img: "pictures/Rifle.jpg"
    },
    { name : 'smoon',
        img: "pictures/SMoon.jpg"
    },
    { name : 'tag',
        img: "pictures/Tag.jpg"
    }
]

//randomize cards
cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'pictures/back.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'pictures/back.jpg')
      cards[optionTwoId].setAttribute('src', 'picures/back.jpg')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'pictures/back.jpg')
      cards[optionTwoId].setAttribute('src', 'pictures/back.jpg')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  //flip cards
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
