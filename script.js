let question = document.getElementsByClassName('btn-question')[0]
let answer = document.getElementsByClassName('answer')[0]
let iconMost = document.getElementsByClassName('icon-most')[0]

function clicked() {
    if (answer.style.display == 'none') {
        answer.style.display = 'block'
        iconMost.className = 'rotate'
    }else {
        answer.style.display = 'none'
        iconMost.className = 'icon-most'
    }
        
}

question.addEventListener('click', clicked)