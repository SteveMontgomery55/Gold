function flip(event){
	let element = event.currentTarget;
	if (element.className === "card") {
    if(element.style.transform == "rotateY(180deg)") {
      element.style.transform = "rotateY(0deg)";
    }
    else {
      element.style.transform = "rotateY(180deg)";
    }
  }
};

const cardArray = [
    {name: 'money-one',
     img: 'images/money-one.jpg'
    },
    {name: 'money-one',
     img: 'images/money-one.jpg'
    },
    {name: 'money-one',
     img: 'images/money-one.jpg'
    },
    {name: 'money-two',
     img: 'images/money-two.jpg'
    },
    {name: 'money-two',
     img: 'images/money-two.jpg'
    },
    {name: 'money-two',
     img: 'images/money-two.jpg'
    },
    {name: 'money-three',
     img: 'images/money-three.jpg'
    },
    {name: 'money-three',
     img: 'images/money-three.jpg'
    },
    {name: 'money-three',
     img: 'images/money-three.jpg'
    }
]

const container = document.querySelector('.container')

cardArray.sort(() => 0.5 - Math.random())

let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

function checkForMatches() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You have found a match')
        cards[optionOneId].setAttribute ('src', 'images/piggybank.jpg')
        cards[optionTwoId].setAttribute ('src', 'images/piggybank.jpg')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute ('src', 'images/')
        cards[optionTwoId].setAttribute ('src', 'images/')
    }
 
}


