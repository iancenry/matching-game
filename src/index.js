document.addEventListener('DOMContentLoaded', () => {
    // card options
    const cardsArray = [{
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        },
        {
            name: 'fries',
            img: 'src/images/fries.png'
        },
        {
            name: 'cheeseburger',
            img: 'src/images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: 'src/images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: 'src/images/pizza.png'
        },
        {
            name: 'milkshake',
            img: 'src/images/milkshake.png'
        },
        {
            name: 'hotdog',
            img: 'src/images/hotdog.png'
        }
    ]

    // sort the cardsArray array randomly
    cardsArray.sort(() => 0.5 - Math.random())
    console.log(cardsArray)

    // add the cardsArray to html grid
    const grid = document.querySelector('.grid')
    let cardsChosen = []
    let cardsChosenIds = []
    cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardsArray.length; i++) {
            // for every card. create an image that is a blank version of the cardsArray
            const card = document.createElement('img')
            card.setAttribute('src', 'src/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }



    //function to flip the card when clicked 
    function flipCard() {
        //this - whatever card we have clicked 
        //we're getting the card clicked id and store to the cardsArray arrayChosen but only the name 
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardsArray[cardId].name)
        cardsChosenIds.push(cardId)

        //flip the card when clicked
        this.setAttribute('src', cardsArray[cardId].img)

        //revert if two selected aren't the same
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)

        }

    }

    function checkForMatch() {
        // make sure people can not double click and flip to be blank again
        const cards = document.querySelectorAll('img')
        const resultDisplay = document.querySelector('#result')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]
        if (optionOneId == optionTwoId) {
            alert('You clicked the same image, choose another')
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            //checking for match and if match remove card by replacing with white png + remove clickability
            alert('you have found a match!')
            cards[optionOneId].setAttribute('src', 'src/images/white.png')
            cards[optionTwoId].setAttribute('src', 'src/images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            //if you find no match
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
            alert('Sorry, try again!')
        }
        //remove form cards chosen array and cardschosenids to start over to compare new cards
        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === 6) {
            resultDisplay.textContent = 'Congratulations! You have won'
        }


        console.log(cardsChosen)
        console.log(cardsWon)
    }

    createBoard()

})

/*window.location.reload(true);--- reloads page*/