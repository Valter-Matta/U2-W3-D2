const saveButton = document.getElementById('save')
const removeButton = document.getElementById('remove')
const inputField = document.getElementById('input')

const key = 'Nome utente'
let arrOfNames = []
saveButton.addEventListener('click', () => {
  arrOfNames.push(inputField.value)
  console.log(arrOfNames)
  localStorage.setItem(key, JSON.stringify(arrOfNames))
})

removeButton.addEventListener('click', () => {
  if (arrOfNames) {
    const memory = localStorage.getItem(key)
    console.log(memory)
    const utenti = JSON.parse(memory)
    localStorage.removeItem('key')
    utenti.pop()
    console.log(utenti)
  }
})

const secondKey = 'contatore'
const startTimeKey = 'startTime'

let counter = parseInt(sessionStorage.getItem(startTimeKey))
sessionStorage.setItem(startTimeKey, counter)

const contatore = () => {
  const currentTime = Date.now()
  const seconditrascorsi = Math.floor((currentTime - counter) / 1000)
  sessionStorage.setItem(secondKey, seconditrascorsi)
}
setInterval(contatore, 1000)

contatore()
// const secondKey = 'contatore'
// const startTimeKey = 'startTime'

// // Recupera il timestamp di inizio dalla sessione, o lo imposta al momento attuale
// let startTime = parseInt(sessionStorage.getItem(startTimeKey)) || Date.now()
// sessionStorage.setItem(startTimeKey, startTime)

// // Calcola i secondi trascorsi dall'inizio e visualizza
// function updateCounter() {
//   const currentTime = Date.now()
//   const secondsElapsed = Math.floor((currentTime - startTime) / 1000)
//   sessionStorage.setItem(secondKey, secondsElapsed) // Salva il contatore attuale
// }

// // Aggiorna il contatore ogni secondo
// setInterval(updateCounter, 1000)

// // Mostra immediatamente il valore iniziale all'avvio della pagina
// updateCounter()
