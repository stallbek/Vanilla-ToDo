const all = document.querySelector('#all')
const row1 = document.querySelector('.row1')
const row2 = document.querySelector('.row2')
const row3 = document.querySelector('.row3')
const btn1 = document.querySelector('#one')
const btn2 = document.querySelector('#two')
const btn3 = document.querySelector('#three')
const btn4 = document.querySelector('#four')
const btn5 = document.querySelector('#five')
const btn6 = document.querySelector('#six')
const btn7 = document.querySelector('#seven')
const btn8 = document.querySelector('#eight')
const btn9 = document.querySelector('#nine')

const box1 = document.querySelector('#btn1')
const box2 = document.querySelector('#btn2')
const box3 = document.querySelector('#btn3')
const box4 = document.querySelector('#btn4')
const box5 = document.querySelector('#btn5')
const box6 = document.querySelector('#btn6')
const box7 = document.querySelector('#btn7')
const box8 = document.querySelector('#btn8')
const box9 = document.querySelector('#btn9')

const reload = document.querySelector('#reload')

const buttons = [btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9]
const boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
const column1 = []

function box() {
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            box.parentElement.classList.toggle('red')
            let checkbox = box.nextElementSibling;
            checkbox.checked = !checkbox.checked;
        })
    })
}

function checkbox (){
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.classList.toggle('red')
        })
    })
}

all.addEventListener('click', function(){
    boxes.forEach(box => {
        box.parentElement.classList.toggle('red')
        let checkbox = box.nextElementSibling;
        checkbox.checked = !checkbox.checked;
    })
})

reload.addEventListener('click', function(){
    location.reload()
})


checkbox()
box()




