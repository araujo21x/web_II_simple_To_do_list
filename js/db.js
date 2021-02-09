const URLAPI = 'http://localhost:3000/todo'

const setCards = async (cardText) => {
  await fethRequest(URLAPI, 'POST', { cardText, done: false })
  await respawnCards()
}

const getCards = async () => {
  const response = await fetch(URLAPI, { method: 'get' })
  return await response.json()
}

const remove = async (id) => {
  await fethRequest(URLAPI, 'DELETE', { id })
  await respawnCards()
}

const done = async (id) => {
  await fethRequest(URLAPI, 'PUT', { id, done: true })
  await respawnCards()
}

const notDone = async (id) => {
  await fethRequest(URLAPI, 'PUT', { id, done: false })
  await respawnCards()
}

