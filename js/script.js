class Tip{
    constructor(userBill,userTip,numOfPeople){
        this.userBill = userBill;
        this.userTip = userTip;
        this.numOfPeople = numOfPeople
    }
    tipPerPerson(){
        return ((this.userBill * this.userTip)/(this.numOfPeople * 100)).toFixed(2)
    }
    totalAmountPerPerson(){
        return ((this.userBill * (this.userTip + 100))/(this.numOfPeople * 100)).toFixed(2);
    }

}

let tipBtns = document.querySelectorAll(".btn");
console.log(tipBtns)

tipBtns.forEach(btn=>{
    btn.addEventListener("click",e=>{
        let customerBill = parseFloat(document.querySelector(".bill").value);
        let tipPercentage = e.target.innerText.split("");
        let tip = parseFloat(tipPercentage[0] + tipPercentage[1]);
        let numberOfPeople = parseFloat(document.querySelector(".people").value);
        let customerTip = new Tip(customerBill,tip,numberOfPeople);
        let tipPricePerPerson = document.querySelector(".tipPrice");
        let totalPricePerPerson =  document.querySelector(".totalPrice");

        tipPricePerPerson.innerText = customerTip.tipPerPerson();
        totalPricePerPerson.innerText = customerTip.totalAmountPerPerson();
        
        console.log(customerTip)
        console.log(customerTip.totalAmountPerPerson())
        console.log(customerTip.tipPerPerson())
        
        
    })
})