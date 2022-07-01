const display = document.getElementById('display')
const button = document.querySelectorAll('button')

let screenValue = ''
for (item of button) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if(buttonText=='='){
            console.log(display.innerText)
            display.value=eval(screenValue)
        }
        else if(buttonText=='c'){
            screenValue='';
            display.value=screenValue;
        }
        else{
            screenValue+=buttonText;
            display.value=screenValue;
        }
    })
}