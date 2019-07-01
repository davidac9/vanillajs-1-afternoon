let arr = []
function play(clickedId) {
    let topMiddle = arr[1]
    let topLeft = arr[0]
    let topRight = arr[2]
    let middleLeft = arr[3]
    let center = arr[4]
    let middleRight = arr[5]
    let bottomLeft = arr[6]
    let bottomMiddle = arr[7]
    let bottomRight = arr[8]
    let boxClicked = document.getElementById(clickedId)
    let playerSpan = document.getElementById('player')
    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O'
        boxClicked.innerText = 'X'
        arr[clickedId] = 'X'
    } else {
        playerSpan.innerText = 'X'
        boxClicked.innerText = 'O'
        arr[clickedId] = 'O'
    }
    // boxClicked.innerText = playerSpan.innerText
    // arr[clickedId] = playerSpan.innerText
    console.log(arr)
    // console.log(arr.length)
    // console.log(arr[0])
    // console.log(topLeft)
    if (topLeft !== undefined && topLeft === topRight && topRight === topMiddle) {
        if (topLeft === 'O') {
            window.alert('O WINS!')
        } else {
            window.alert('X WINS!')
        }
    }
    if (middleLeft !== undefined && middleLeft === middleRight && center === middleRight) {
        if (topLeft === 'O') {
            window.alert('O WINS!')
        } else {
            window.alert('X WINS!')
        }
    }
    if (bottomLeft !== undefined && bottomLeft === bottomRight && bottomMiddle === bottomRight) {
        if(bottomLeft === 'O'){
        window.alert('O WINS!')
        } else {
            window.alert('X WINS!')
        }
    }
    if (topLeft !== undefined && middleLeft === topLeft && bottomLeft === middleLeft) {
        if(topLeft === 'O') {
            window.alert('O WINS!')
        } else {
            window.alert('X WINS!')
        }
    }
    if (topMiddle !== undefined && center === topMiddle && bottomMiddle === center) {
        if(topMiddle === 'O') {
            window.alert('O WINS!')
        } else {
            window.alert('X WINS!')
        }
    }
    if (topRight !== undefined && topRight === middleRight && middleRight === bottomRight) {
        if(topRight === 'O') {
            window.alert('O WINS!')
        } else {
            window.alert('X WINS!')
        }
    }
    if (center !== undefined && topLeft === center && center === bottomRight) {
        if(center === 'O') {
            window.alert('O WINS!')
        } else {
            window.alert('X WINS!')
        }
    }
    if (center !== undefined && topRight === center && center === bottomLeft) {
        if(center === 'O') {
            window.alert('O WINS!')
        } else {
            window.alert('X WINS!')
        }
    }
    if (arr.length !== 0 && arr[0] !== undefined && arr[1] !== undefined && arr[2] !== undefined && arr[3] !== undefined && arr[4] !== undefined && arr[5] !== undefined && arr[6] !== undefined && arr[7] !== undefined && arr[8] !== undefined) {
        window.alert(`CAT'S GAME`)
    }
}
