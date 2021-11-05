
// elements
const plans = document.querySelector('.plans');
const plan1 = document.querySelector('.plan1');
const plan2 = document.querySelector('.plan2');
const plan3 = document.querySelector('.plan2');

const totalMiles = document.querySelector('.totalMilesCount');
const totalGST = document.querySelector('.totalGST');
const totalCostNum = document.querySelector('.totalCostNum');

const cardholderName = document.querySelector('.cardholderName');
const cardNumber = document.querySelector('.cardNumber');
const expireDate = document.querySelector('.expireDate');
const cvv = document.querySelector('.cvv');
const street = document.querySelector('.street');
const unit = document.querySelector('.unit');
const city = document.querySelector('.city');
const country = document.querySelector('.country');
const state = document.querySelector('.state');
const zipCode = document.querySelector('.zipCode');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');
const chechBox = document.querySelector('#terms');
const submit = document.querySelector('.finalBtn');



//data

let chosenData = "";

const cardData = [
    {
      "type": "buy",
      "amount": 2000,
      "cost": 250.00
    },
    {
      "type": "buy",
      "amount": 4000,
      "cost": 450.00
    },
    {
      "type": "buy",
      "amount": 7000,
      "cost": 600.00
    }
  ]

//event listeners

submit.addEventListener('click', () => { 
    console.log(chosenData);
    finalSubmit();
})


//function 

 const boxLoad = function(){
    cardData.map((el, index) => { 
        const planBox = document.createElement('div');
        planBox.classList.add("plan");
        plans.appendChild(planBox);

        planBox.addEventListener('click', () => {
            chosenData = cardData[index];
            console.log(chosenData);
            totalMiles.innerHTML = `${el.amount}`;
            totalCostNum.innerHTML = `$ ${el.cost}.00`;
        })
    
        const planTitle = document.createElement('p');
        planTitle.classList.add('planTitle');
        planTitle.innerHTML = `Buy ${el.amount} miles`;
        planBox.appendChild(planTitle);
    
        const planTxt = document.createElement('p');
        planTxt.classList.add('planTitle');
        planTxt.innerHTML = `$ ${el.cost}`;
        planBox.appendChild(planTxt);


        index === 0 ? planBox.classList.add("active") : null;
        
        plans.addEventListener('mouseenter', () => {
            planBox.classList.remove('active');
        })
        plans.addEventListener('mouseleave', () => {
            planBox.classList.remove("active");
            index === 0 ? planBox.classList.add("active") : null;
        })

      });
};

boxLoad();

const finalSubmit = (e) => {
    e.preventDefault();

    var reg = /^\d+$/;
    const cvvMatch = cvv.value.match(reg);
    const cardNumberMatch = cardNumber.match(reg);
    //All status checks can be added in real project
    

    const formStatus = cardholderName.value.length === 0 ? false : 
    cardNumber.value.length && cardNumberMatch === 0 ? false : 
    expireDate.value.length === 0 ? false : 
    cvv.value.length && cvvMatch === 0 ? false : 
    street.value === 0 ? false : 
    unit.value.length === 0 ? false : 
    city.value.length === 0 ? false : 
    country.value.length === 0 ? false : 
    zipCode.value.length === 0 ? false : 
    phone.value.length === 0 ? false : 
    email.value.length === 0 ? false :
    !chechBox.checked ? false : true;






    if (formStatus && chosenData.length !== "") {
        //order done
        const NewOrder = { 
            cardholderName : cardholderName.value,
            cardNumber : cardNumber.value,
            expireDate : expireDate.value,
            cvv :  cvv.value,
            street :  street.value,
            unit :  unit.value,
            city :  city.value,
            country :  country.value,
            state :  state.value,
            zipCode :  zipCode.value,
            phone :  phone.value,
            email :  email.value,
            submit :  submit.value,
            chosenPlan: chosenData,

        //final steps : 
        //send data to server
        //submit plan alert to client
        }
    }
}











 