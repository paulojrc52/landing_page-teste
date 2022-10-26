
const formUser = document.querySelector('#formUser')

const toast = document.querySelector('.toast')

formUser.addEventListener('submit', event => {
    event.preventDefault()

    let error = false

    const inputNameUser = document.forms['formUser']['name']

    if(!inputNameUser.value) {

        toast.classList.add('visible')

        setTimeout(function(){
            toast.classList.remove('visible')
        }, 5000)

        error = true
        inputNameUser.classList.add('inputError')
    } else {
        inputNameUser.classList.remove('inputError')
    }

    const inputEmailUser = document.forms['formUser']['email']

    if(!inputEmailUser.value) {
        
        toast.classList.add('visible')

        setTimeout(function(){
            toast.classList.remove('visible')
        }, 5000)

        error = true
        inputEmailUser.classList.add('inputError')
    } else {
        inputEmailUser.classList.remove('inputError')
    }

    const inputCpfUser = document.forms['formUser']['cpf']

    if(!inputCpfUser.value) {

        toast.classList.add('visible')

        setTimeout(function(){
            toast.classList.remove('visible')
        }, 5000)

        error = true
        inputCpfUser.classList.add('inputError')
    } else {
        inputCpfUser.classList.remove('inputError')
    }

    const inputGender = document.forms.formUser.gender
    const inputGenderBox = document.querySelector('.gender')

    if(inputGender[0].checked == false && inputGender[1].checked == false){
        error = true
        inputGenderBox.classList.add('inputError')
    } else {
        inputGenderBox.classList.remove('inputError')
    }

    if(!error) {
        formUser.submit()
    }
})

const formFriend = document.querySelector('#formFriend')

formFriend.onsubmit = function (event) {
    event.preventDefault()
    let error = false
    
    const inputNameFriend = document.forms['formFriend']['friendName']

    if(!inputNameFriend.value) {

        toast.classList.add('visible')

        setTimeout(function(){
            toast.classList.remove('visible')
        }, 5000)

        error = true
        inputNameFriend.classList.add('inputError')
    } else {
        inputNameFriend.classList.remove('inputError')
    }
    
    const inputEmailFriend = document.forms['formFriend']['friendEmail']

    if(!inputEmailFriend.value) {
        toast.classList.add('visible')

        setTimeout(function(){
            toast.classList.remove('visible')
        }, 5000)
        error = true
        inputEmailFriend.classList.add('inputError')
    } else {
        inputEmailFriend.classList.remove('inputError')
    }

    if (!error) {
        formFriend.submit()
    }
}


function transformJson(response) {
    return response.json()
}

function createBoxes(data) {
    const boxes = data.products
    let boxesFor = []
    

    boxes.forEach(product => {
        boxesFor.push(
            `
            <div class="product">
                <div>
                    <img src=${product.image}>
                </div>
                <div>
                    <h6>${product.name}</h6>
                    <p>${product.description}</p>
                    <span>De R$ ${product.oldPrice}</span>
                    <h5>Por R$ ${product.price}</h5>
                    <span>ou ${product.installments.count} x de R$ ${product.installments.value}</span>
                    <button>Comprar</button>
                </div>
            </div>
            `
        )
       
    })
    document.querySelector('.products').innerHTML = boxesFor.join('')
}

const buttonProducts = document.querySelector('#button')
const nextProducts = document.querySelector('#nextProducts')

let url = 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'


fetch(url)
.then(transformJson)
.then(createBoxes)

buttonProducts.addEventListener('click', () => {
    nextProducts.href = data.nextPage

})