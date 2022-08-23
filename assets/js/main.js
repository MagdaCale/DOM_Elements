const change = document.getElementById('navChange')
const home = document.getElementById('navHome')

let checked = false

change.addEventListener('click', () => {
    if(checked === false) {
        home.style.backgroundColor = 'pink'
        home.style.transform = 'rotateY(180deg)'
        checked = true
    }else{
        home.style.backgroundColor = '#333'
        home.style.transform = 'rotateY(0deg)'
        checked = false
    }

})

/* ====================================================================== */


const submit = document.querySelector('input[type = submit]')



submit.addEventListener('click', ()=> {
    let vorname = document.forms[0].vorname.value

    let nachname = document.forms[0].nachname.value

    let land = document.forms[0].land.value

    console.log(`Full name: ${vorname} ${nachname} Land: ${land}`)

})
