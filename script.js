let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')

let inpSpeed = document.getElementById('inpSpeed')
let values = ['1', '2', '3', '4', '5', '6', '8', '9']

let begin = document.getElementById('begin')
let stopit = document.getElementById('stopIt')
let result = document.getElementById('res')

begin.onclick = function () {
    updateAnimation(10);
    document.getElementById('value1').classList.add('movable');
    document.getElementById('value2').classList.add('movable');
    document.getElementById('value3').classList.add('movable');
    result.innerHTML = ''
}
stopit.onclick = function () {
    clearInterval(animationId)
    document.getElementById('value1').classList.remove('movable');
    document.getElementById('value2').classList.remove('movable');
    document.getElementById('value3').classList.remove('movable');

    if (value1 == value2 && value2 == value3)
        result.innerHTML = 'YOU WON!'
    else
        result.innerHTML = 'YOU LOST!'
}

function getRandomValue() {
    return values[Math.floor(Math.random() * 8)]
}

let animationId;
function updateAnimation(newSpeed) {
    if (animationId) clearInterval(animationId)
    animationId = setInterval(() => {
        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
    }, 1000 / newSpeed);
}

inpSpeed.onchange= function (event) {
        document.documentElement.style.setProperty('--speed', event.target.value)
        updateAnimation(event.target.value)
}