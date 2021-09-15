class Tip{
    constructor(userBill,userTip,numOfPeople){
        this.userBill = userBill;
        this.userTip = userTip;
        this.numOfPeople = numOfPeople
    }
    tipAmount(){
        
    }

}

let tipBtns = document.querySelectorAll(".btn");
console.log(tipBtns)

tipBtns.forEach(btn=>{
    btn.addEventListener("click",e=>{
        let customerBill = parseInt(document.querySelector(".bill").value);
        let tipPercentage = e.target.innerText;
        let numberOfPeople = parseInt(document.querySelector(".people").value);
        let customerTip = new Tip(customerBill,tipPercentage,numberOfPeople);
        
        console.log(customerTip)
        
    })
})