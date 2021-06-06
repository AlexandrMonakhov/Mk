const arenas = document.querySelector('.arenas')
const random = document.querySelector('.random')

const scorpion = {
  name: "SCORPION",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["Fists", "Legs", "Kunai"],
  player: 1,
  attack() {
    console.log(`${this.name} Fight!`)
  }
}

const kitana = {
  name: "KITANA",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["Fists", "Legs", "Fan"],
  player: 2,
  attack() {
    console.log(`${this.name} Fight!`)
  }
}

const liuKang = {
  name: "LIU KANG",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/Nunchucks.gif",
  weapon: ["Fists", "Legs", "Fan"],
  player: 1,
  attack() {
    console.log(`${this.name} Fight!`)
  }
}

const sonya = {
  name: "SONYA",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["Fists", "Legs", "Garrote"],
  player: 2,
  attack() {
    console.log(`${this.name} Fight!`)
  }
}

const subZero = {
  name: "SUBZERO",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["Fists", "Legs", "Frost Axe"],
  player: 1,
  attack() {
    console.log(`${this.name} Fight!`)
  }
}

const loseGame = name => {
  const loseTitle = `<div class="loseTitle">${name} lose</div>`

  return loseTitle
}

const changePlayerHp = player => {
  console.log(player.player);
  const playerLife = document.querySelector(`.player${player.player} .life`)
  player.hp -= Math.floor(Math.random() * 20) + 1
  playerLife.style.width = `${player.hp < 0 ? 0 : player.hp}%`

  if (player.hp < 0) {
    arenas.insertAdjacentHTML("beforeend", loseGame(player.name))
    random.disabled = true
    random.style.cursor = 'not-allowed'
  }
}

const createPlayer = (cls, playerObj) => {

  const { name, img } = playerObj

  const playerCard = `
      <div class="${cls}">
        <div class="progressbar">
          <div class="life"></div>
          <div class="name">${name}</div>
        </div>
        <div class="character">
            <img src="${img}" />
        </div>
      </div>
    `
  arenas.insertAdjacentHTML("beforeend", playerCard)
}

createPlayer('player1', subZero)
createPlayer('player2', sonya)


random.addEventListener('click', () => {
  changePlayerHp(subZero)
  changePlayerHp(sonya)
});