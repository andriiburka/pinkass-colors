let btn = document.getElementById('gooey-button')

function random(number) {
    return Math.floor(Math.random() * number)
}

function randomBackgroundColor() {
    return `linear-gradient(${random(360)}deg, 
    #${Math.floor(Math.random() * 16777215).toString(16)}, 
    #${Math.floor(Math.random() * 16777215).toString(16)}, 
    #${Math.floor(Math.random() * 16777215).toString(16)}, 
    #${Math.floor(Math.random() * 16777215).toString(16)}, 
    #${Math.floor(Math.random() * 16777215).toString(16)}, 
    #${Math.floor(Math.random() * 16777215).toString(16)}
    ) fixed`
}

function randomTextColor() {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`
}

btn.addEventListener('click', function () {
    document.body.style.background = randomBackgroundColor()
    document.body.style.color = randomTextColor()
    document.querySelector(".button-txt").style.backgroundColor = randomBackgroundColor()

    let sourceCode = document.createElement("h3")
    document.body.appendChild(sourceCode)
})


