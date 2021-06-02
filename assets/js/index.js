const arenas = document.querySelector('.arenas')

const scorpion = {
  name: "SCORPION",
  hp: 120,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["Fists", "Legs", "Kunai"],
  attack() {
    console.log(`${this.name} Fight!`)
  }
}

const kitana = {
  name: "KITANA",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["Fists", "Legs", "Fan"],
  attack() {
    console.log(`${this.name} Fight!`)
  }
}

const liuKang = {
  name: "LIU KANG",
  hp: 110,
  img: "http://reactmarathon-api.herokuapp.com/assets/Nunchucks.gif",
  weapon: ["Fists", "Legs", "Fan"],
  attack() {
    console.log(`${this.name} Fight!`)
  }
}

const sonya = {
  name: "SONYA",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["Fists", "Legs", "Garrote"],
  attack() {
    console.log(`${this.name} Fight!`)
  }
}

const subZero = {
  name: "SUBZERO",
  hp: 150,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["Fists", "Legs", "Frost Axe"],
  attack() {
    console.log(`${this.name} Fight!`)
  }
}

const createPlayer = (cls, playerObj) => {

  const { hp, name, img } = playerObj

  const playerCard = `
      <div class="${cls}">
        <div class="progressbar">
          <div class="life">${hp}</div>
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
