//choosing elements
const amountInput=document.querySelector("#amount")
const firstOptionInput=document.querySelector("#firstCurrencyOption")
const secondOptionInput=document.querySelector("#secondCurrencyOption")
const result=document.querySelector("#result")
const buton1=document.querySelector("#buton1")
const buton2=document.querySelector("#buton2")

runProgram()

const currency=new Currency()

function runProgram(){
    buton1.addEventListener("click",exchange)
    buton2.addEventListener("click",()=>{
        amountInput.value = "0"
        result.value="0"
    })
}

function exchange(){
const amountValue=Number(amountInput.value.trim())
const firstOptionValue=firstOptionInput.options[firstOptionInput.selectedIndex].textContent
const secondOptionValue=secondOptionInput.options[secondOptionInput.selectedIndex].textContent

currency.exchangeRequest(amountValue,firstOptionValue,secondOptionValue)
.then((final)=>{
    result.value=final.toFixed(2)
})
}

