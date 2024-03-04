const principalE = document.getElementById("principal")
const rateE = document.getElementById("rate")
const yearsE = document.getElementById("years")
const totalAmount = document.getElementById("total-amount")
const Submit = document.getElementById("submit")


const principal = principalE.value
const rate = rateE.value
const years = yearsE.value

Submit.addEventListener("click" , () => {
    const result = principal*Math.pow( (1+rate/1) , 1*years )  
    totalAmount.textContent = result.toLocaleString(undefined , { style:"currency", currency: "USD" });    
})