const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')

function setCard() {
    let card = document.getElementById(idInput.value)
    card.style.color = colorInput.value
}
function reset() {
    let card = document.getElementById('diamonds')
    let card2 = document.getElementById('clubs')
    let card3 = document.getElementById('hearts')
    let card4 = document.getElementById('spades')
    card.style.color = null
    card2.style.color = null
    card3.style.color = null
    card4.style.color = null
}