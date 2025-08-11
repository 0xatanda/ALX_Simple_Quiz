document.getElementById("submit-answer").addEventListener("click", checkAnswer);
function checkAnswer() {
    let correctAnwer = "4"
    const selectedOption = document.querySelector("inpu[name=quiz]:checked")

    if (!selectedOption) {
        document.getElementById("feedback")
        return
    }

    let userAnswer = selectedOption.value
    if (userAnswer === correctAnwer) {
        document.getElementById("feedback").textContent = "Correct Well done"
    } else {
        document.getElementById("feedback").textContent = "That's incorrect try again"
    }
}
