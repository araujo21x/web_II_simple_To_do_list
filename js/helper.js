const inListcreateTags = (tagType, valueText, className, callBack, id) => {
  let tag = document.createElement(tagType)
  tag.appendChild(document.createTextNode(valueText))
  tag.className = className
  if (callBack) tag.onclick = function () { callBack(id) }
  return tag
}

const generateId = () => {
  let id = 0
  if (cards.length === 0) id = 1
  else id = (cards[cards.length - 1].id + 1)
  return Number(id)
}

const mainLoaded = async () => {
  await respawnCards();
};

const fethRequest = async (url, method, body) => {
  return await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
}
