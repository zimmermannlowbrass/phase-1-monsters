let counter = 0

fetch('http://localhost:3000/monsters')
.then(resp => resp.json())
.then(data => makeMonsterList(data))


let monsterList = []
function makeMonsterList(data) {
    data.forEach(monster => monsterList.push(monster))
    addMonsterIn()
}


function addMonsterIn() {
    let newMonsters = []
    for (let i = 0; i < 50; i++) {
        newMonsters.push(monsterList[i + counter])
    }
    console.log(newMonsters)
    newMonsters.forEach(monsterInfo => populateMonster(monsterInfo))
}

function populateMonster(monsterInfo) {
    let monster = document.createElement('div')
    let monsterContainer = document.querySelector('#monster-container')
    //name
    let monsterName = document.createElement('h2')
    monsterName.innerText = monsterInfo.name
    monster.appendChild(monsterName)
    //age
    let monsterAge = document.createElement('h4')
    monsterAge.innerText = monsterInfo['age']
    monster.appendChild(monsterAge)
    //bio
    let monsterBio = document.createElement('p')
    monsterBio.innerText = monsterInfo.description
    monster.appendChild(monsterBio)
    //post the monster
    monsterContainer.appendChild(monster)
}


const backBtn = document.querySelector('#back')
const forwardBtn = document.querySelector('#forward')
forwardBtn.addEventListener('click', nextMonsters)
backBtn.addEventListener('click', prevMonsters)

function nextMonsters() {
    let monsterContainer = document.querySelector('#monster-container')
    //check to see if there are currently monsters
    if (counter < 1000) {
        for (let i = 0; i < 50; i++) {
            let currentMonster = monsterContainer.querySelector('div')
            if (currentMonster) {
                monsterContainer.removeChild(currentMonster)
            }
        }
        counter += 50
        addMonsterIn()
    } else {
        alert('Go the other way :)')
    }
    
}

function prevMonsters() {
    let monsterContainer = document.querySelector('#monster-container')
    //check to see if there are currently monsters
    if (counter > 1) {
        for (let i = 0; i < 50; i++) {
            let currentMonster = monsterContainer.querySelector('div')
            if (currentMonster) {
                monsterContainer.removeChild(currentMonster)
            }
        }        
        counter -= 50
        addMonsterIn()
    } else {
        alert('Go the other way :)')
    }
    }

