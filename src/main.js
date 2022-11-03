function createGame(player1, hour, player2) {
  return `
  <li>
    <img src="./src/images/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./src/images/icon-${player2}.svg" alt="Bandeira da ${player2}">
  </li>
  `
}

function createCard(date, day, games) {
  return `
  <div class="card">
  <h2>${date} <span>${day}</h2>

  <ul>
  ${games}
  </ul>

</div>  
  `
}

document.querySelector('#app').innerHTML = `
  <header>
    <img src="./src/images/logo.svg" alt="Logo NLW Copa">
  </header>
  <main id="cards">
    ${createCard(
      '20/11', 
      'domingo',
      createGame('qatar', '13:00', 'ecuador')
    )}

    ${createCard(
      '21/11', 
      'segunda',
      createGame('england', '10:00', 'iran') +
      createGame('senegal', '13:00', 'netherlands') +
      createGame('united-states', '16:00', 'wales')
    )}

    ${createCard(
      '24/11', 
      'quinta',
      createGame('brazil', '16:00', 'serbia')
    )}

    ${createCard(
      '28/11', 
      'segunda',
      createGame('switzerland', '13:00', 'brazil') +
      createGame('portugal', '13:00', 'uruguay')
    )}  

    ${createCard(
      '02/12', 
      'sexta',
      createGame('brazil', '16:00', 'cameroon')
    )}     
  </main>
`