const writing = document.querySelector('#writing')
const append = document.querySelector('#append')
const mark = document.querySelector('#mark')
const list = document.querySelector('.list')
const remove = document.querySelector('.remove')
const edit = document.querySelector('.edit')

append.addEventListener('click', () => {
    let newDiv = document.createElement('div')
    newDiv.id = 'card_' + Math.trunc(Math.random() * 100)
    if (mark.checked === true){
        let card = `<div class="card">
    <p class="result">${writing.value}</p>
    <div>
    <div class="btns">
        <button class="edit">edit</button>
        <button class="remove">remove</button>
    </div>
    <p class="important">important</p>
    </div>
    </div>`
        newDiv.innerHTML = card
        list.appendChild(newDiv)
    }

    else if (mark.checked === false){
        let card = `<div class="card">
    <p class="result">${writing.value}</p>
    <div class="btns">
        <button class="edit">edit</button>
        <button class="remove">remove</button>
    </div>
</div>`
        newDiv.innerHTML = card
        list.appendChild(newDiv)
    }
})

list.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit')) {
        let card = event.target.closest('.card')
        let paragraph = card.querySelector('p')
        let newValue = writing.value
        if (newValue !== null) {
            paragraph.textContent = newValue
        }
    }

    if (event.target.classList.contains('remove')) {
        let card = event.target.closest('.card')
        card.parentNode.removeChild(card)
    }
})


