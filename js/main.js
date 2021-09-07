activeQuestion = null
function questionSelected(question) {
    if(activeQuestion) {
        activeQuestion.classList.remove("selected")
        if(activeQuestion == question) {
            activeQuestion = null
            return
        }
    }
    activeQuestion = question
    activeQuestion.classList.add("selected")
}