const box = document.getElementById("box")
const text = document.getElementById("text")

box.addEventListener("focus", function () {
    text.textContent = "Type a number between 1 and 5"
})

box.addEventListener("focusout", function () {
    text.textContent = "Click here to give your rating"
    this.className = ""
})

box.addEventListener("keydown", function (e) {
    let rating = ""

    switch (e.keyCode) {
        case 49:
            rating = "🤬"
            this.className = ""
            this.classList.add("one")
            break
        case 50:
            rating = "☹️"
            this.className = ""
            this.classList.add("two")
            break
        case 51:
            rating = "😐"
            this.className = ""
            this.classList.add("three")
            break
        case 52:
            rating = "🙂"
            this.className = ""
            this.classList.add("four")
            break
        case 53:
            rating = "😁"
            this.className = ""
            this.classList.add("five")
            break
        default:
            this.className = ""
            rating = "😅 only 1 - 5..."
            break
    }

    text.innerHTML = `<span>${rating}</span>`
})
