const display = document.querySelector('#display')

const buttons = document.querySelectorAll('button')

buttons.forEach((item) =>{
    item.onclick = () => {
        if(item.id=="clear"){
            display.textContent=""
        }else if(item.id=="backspace"){
            let string = display.textContent.toString()
            display.textContent = string.slice(0, string.length-1)
            // display.textContent = string.slice(0, string.length-1)
        }else if(display.textContent != "" && item.id == "equal"){

            display.textContent= eval(display.textContent)
        }else if(display.textContent == "" && item.id == "equal"){
            display.textContent = "Null"
            setTimeout(()=>(display.textContent=""),2000)
        }else{
            display.textContent+=item.id
        }
    }
})

const themeToggleBtn = document.querySelector('.theme-toggler')
const calculator = document.querySelector('.calculator')


let isDark = true;
themeToggleBtn.onclick= ()=>{
    calculator.classList.toggle("dark")
    themeToggleBtn.classList.toggle("active")
   
    isDark = !isDark
}