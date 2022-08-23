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


const exampleClass = document.getElementsByClassName('example')

let clicked = false

const myFunction = () => {

    if(clicked === false) {
        for(let i = 0; i < exampleClass.length; i++ ){
            exampleClass[i].style.color = '#fff'
            exampleClass[i].style.backgroundColor = '#000'
        }
        clicked = true
    }else{
        for(let i = 0; i < exampleClass.length; i++ ){
            exampleClass[i].style.color = '#fff'
            exampleClass[i].style.backgroundColor = '#666'
        }
        clicked = false
    }
}



/* ====================================================================== */



const submit = document.querySelector('input[type = submit]')



submit.addEventListener('click', ()=> {
    let vorname = document.forms[0].vorname.value

    let nachname = document.forms[0].nachname.value

    let land = document.forms[0].land.value

    console.log(`Full name: ${vorname} ${nachname} Land: ${land}`)

})



/* ====================================================================== */



const change2 = document.getElementById('navChange2')

let aTag = document.getElementsByTagName("a")
let checked2 = false

change2.addEventListener('click', () => {    

    if(checked2 === false) { 
        //document.getElementsByTagName("a")[4].style.backgroundColor = '#f6c89f'
        aTag[4].style.backgroundColor = '#f6c89f'
        aTag[4].style.color = '#333'

        aTag[5].style.backgroundColor = '#ffe7d1'
        aTag[5].style.color = '#333'

        aTag[6].style.backgroundColor = '#4b8e8d'
        aTag[6].style.color = '#333'

        aTag[7].style.backgroundColor = '#396362'
        aTag[7].style.color = '#333' 

        checked2 = true

    }else{
        aTag[4].style.color = '#fff'
        aTag[4].style.backgroundColor = '#333'

        aTag[5].style.color = '#fff'
        aTag[5].style.backgroundColor = '#333'

        aTag[6].style.color = '#fff'
        aTag[6].style.backgroundColor = '#333'

        aTag[7].style.color = '#fff'
        aTag[7].style.backgroundColor = '#4CAF50';

        checked2 = false
    } 

})
