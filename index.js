/* ===========Steps to increment the button value on click============== */
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-element")
let saveEl = document.getElementById("save-el")

let count = 0

function incrementPassCount() {
    console.log("The button was clicked")
    count += 1
    countEl.textContent = count
}

function save() {
    console.log(count)
    let savedStr = " - " + count

    // Google:
    // innerText alternative mdn
    saveEl.textContent += savedStr
    countEl.textContent = 0
    count = 0
}

