class Tip{
    constructor(userBill,userTip,numOfPeople){
        this.userBill = userBill;
        this.userTip = userTip;
        this.numOfPeople = numOfPeople
    }
    tipAmount(){
        return (this.userBill * (this.userTip + 100))/(this.numOfPeople * 100).toFixed(2);
    }

}

let tipBtns = document.querySelectorAll(".btn");
console.log(tipBtns)

tipBtns.forEach(btn=>{
    btn.addEventListener("click",e=>{
        let customerBill = parseFloat(document.querySelector(".bill").value);
        let tipPercentage = e.target.innerText.split("");
        let tip = parseFloat(tipPercentage[0] + tipPercentage[1])
        let numberOfPeople = parseFloat(document.querySelector(".people").value);
        let customerTip = new Tip(customerBill,tip,numberOfPeople);
        
        console.log(customerTip)
        console.log(customerTip.tipAmount())
        
    })
})