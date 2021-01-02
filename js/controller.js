const add = () => {
  let cardText = document.querySelector('.input').value
  if (!cardText) alert('Campo não preenchido')
  else setCards(cardText, respawnCards)
}

const respawnCards = () => {
  let cards = getCards()
  let ul = document.querySelector('.items')
  document.querySelector('.input').value = ''
  ul.innerHTML = ''

  cards.forEach((item) => {
    let span = !item.done ? inListcreateTags('span', item.cardText, 'item')
      : inListcreateTags('span', item.cardText, 'item done')
    let aDone = !item.done ? inListcreateTags('a', 'Feito', 'done-button', done, item.id)
      : inListcreateTags('a', 'Fazendo', 'done-button', notDone, item.id)
    let aRemove = inListcreateTags('a', 'Excluir', 'remove-button', remove, item.id)

    li = document.createElement('li')
    li.appendChild(span)
    li.appendChild(aRemove)
    li.appendChild(aDone)
    ul.appendChild(li)
  })
}

