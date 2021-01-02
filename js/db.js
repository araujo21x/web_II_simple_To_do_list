let cards = []

const setCards = (cardText) => {
  cards.push({ cardText, id: generateId(), done: false })
  respawnCards()
}

const getCards = () => {
  return cards
}

const remove = (id) => {
  cards = cards.filter(item => item.id !== id)
  respawnCards()
}

const done = (id) => {
  cards.map(card => {
    if (card.id == id) card.done = true
  })
  respawnCards()
}

const notDone = (id) => {
  cards.map(card => {
    if (card.id == id) card.done = false
  })
  respawnCards()
}

