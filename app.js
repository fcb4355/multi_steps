const myNameRegex = /^[a-zA-Z-\s]+$/;
const myMailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const myNumRegex = /^[0-9\s]+$/;
const AllCircle = document.querySelectorAll(".side-bar .circle");
const AllSteps = document.querySelectorAll(".all-steps .stp");
const InputName = document.querySelector("#name");
const InputEmail = document.querySelector("#mail");
const InputNumber = document.querySelector("#phone");
const AllOptions = document.querySelectorAll(".options .option");
const Price_Option = document.querySelectorAll(".options .option .price span");
const Duration_option = document.querySelectorAll(".options .option .price .how");
const Message_Two_month_free = document.querySelectorAll(".options .option .free")
const price_offer = document.querySelectorAll(".offers .offer .price-offer span");
const duration_offer = document.querySelectorAll(".offers .offer .price-offer .witch");
const Toogle = document.querySelector(".stp-2 .toggle .switch .checkBox");
const Duration_final_in_step_Four = document.querySelectorAll(".stp-4 .offr-stp-4");
const Price_plan_choosed = document.querySelector(".stp-4 .pr")
const AllOffers = document.querySelectorAll(".offers .offer input");
const offr_for_stepFour = document.querySelectorAll(".stp-4 .offr .prices")
const Price_Total = document.querySelector(".stp-4 .total .price-tlt");
let Price_choosed = null;
let duration_choosed = null;
let name_plane;


function goToStepTwo() {
  checkNameField();
  checkEmailField();
  checkNmbrField();
  checkAll();
}
function backToStepOne() {
  AllSteps[1].style.cssText = "display:none";
  AllSteps[0].style.cssText = "display:flex";
  AllCircle[1].classList.remove("active")
  AllCircle[0].classList.add("active")
}

const option_step_4 = document.querySelector(".stp-4 .change .left p");
const dur_step_4 = document.querySelector(".stp-4 .change .left span");
function goToStepThree() {
  AllOptions.forEach(option => {
    if (option.classList.contains("active")) {
      Price_choosed = +option.querySelector(".price span").innerHTML;
      duration_choosed = option.querySelector(".price .how").innerHTML;
      name_plane = option.querySelector(".option .about p").innerHTML
      // --------go to step-four
      AllSteps[1].style.cssText = "display:none";
      AllSteps[2].style.cssText = "display:flex";
      AllCircle[1].classList.remove("active");
      AllCircle[2].classList.add("active");
      // ------- update all prices & duration in all next steps 
      if (duration_choosed === "Yr") {
        price_offer.forEach(pr => {
          pr.innerHTML = +pr.innerHTML * 10
        })
        duration_offer.forEach(dur => {
          dur.innerHTML = "Yr"
        })
        Duration_final_in_step_Four.forEach(dur => {
          dur.innerHTML = "Yr"
        })
        dur_step_4.innerHTML = "(Yearly)"
      }
      if (duration_choosed === "mo") {
        Duration_final_in_step_Four.forEach(dur => {
          dur.innerHTML = "mo"
        })
        dur_step_4.innerHTML = "(Monthly)"
      }
    }
  })
  Price_plan_choosed.innerHTML = Price_choosed;
  option_step_4.innerHTML = name_plane;
  console.log(Price_choosed);
  console.log(duration_choosed);
  console.log(name_plane);
}
function BackToStepTwo() {
  AllSteps[2].style.cssText = "display:none";
  AllSteps[1].style.cssText = "display:flex";
  AllCircle[2].classList.remove("active")
  AllCircle[1].classList.add("active")
  // remove active class from all option
  AllOptions.forEach(opt => {
    opt.classList.remove("active")
  })
  //-------- return value offers 
  price_offer.forEach(pr => {
    if (pr.innerHTML >= 10) {
      pr.innerHTML = +pr.innerHTML / 10
    }
  })
  duration_offer.forEach(dur => {
    dur.innerHTML = "mo"
  })
}
let price_offer1;
let price_offer2;
let price_offer3;
function goToStepFour() {
  AllSteps[2].style.cssText = "display:none";
  AllSteps[3].style.cssText = "display:flex";
  AllCircle[2].classList.remove("active");
  AllCircle[3].classList.add("active");
  chooseOffer()
  Price_Total.innerHTML = Price_choosed + price_offer1 + price_offer2 + price_offer3
}

function BackfromFourToTwo() {
  AllSteps[3].style.cssText = "display:none";
  AllSteps[1].style.cssText = "display:flex";
  AllCircle[3].classList.remove("active")
  AllCircle[1].classList.add("active")
  // remove active class from all option
  AllOptions.forEach(opt => {
    opt.classList.remove("active")
  })
  //-------- return value offers 
  price_offer.forEach(pr => {
    if (pr.innerHTML >= 10) {
      pr.innerHTML = +pr.innerHTML / 10
    }
  })
  duration_offer.forEach(dur => {
    dur.innerHTML = "mo"
  })
}

function chooseOffer() {
  // for offer 1
  if (AllOffers[0].checked) {
    price_offer1 = +AllOffers[0].parentElement.nextElementSibling.querySelector("span").innerHTML; //update value
    offr_for_stepFour[0].innerHTML = price_offer1 // extract value in result
  } else {
    price_offer1 = 0
    offr_for_stepFour[0].innerHTML = 0
    console.log(Price_choosed + price_offer1);
  }
  // for offer 2
  if (AllOffers[1].checked) {
    price_offer2 = +AllOffers[1].parentElement.nextElementSibling.querySelector("span").innerHTML; //update value
    offr_for_stepFour[1].innerHTML = price_offer2 // extract value in result
  } else {
    price_offer2 = 0
    offr_for_stepFour[1].innerHTML = 0
  }
  // for offer 3
  if (AllOffers[2].checked) {
    price_offer3 = +AllOffers[2].parentElement.nextElementSibling.querySelector("span").innerHTML; //update value
    offr_for_stepFour[2].innerHTML = price_offer3 // extract value in result
  } else {
    price_offer3 = 0
    offr_for_stepFour[2].innerHTML = 0
  }
}
function goToStepFive() {
  AllSteps[3].style.cssText = "display:none";
  AllSteps[4].style.cssText = "display:flex";
  AllCircle[3].classList.remove("active");
  AllCircle[4].classList.add("active");
}
function backToStepThree() {
  AllSteps[3].style.cssText = "display:none";
  AllSteps[2].style.cssText = "display:flex";
  AllCircle[3].classList.remove("active");
  AllCircle[2].classList.add("active");
}
SwitchDelay()
function SwitchDelay() {
  Toogle.addEventListener("click", () => {
    // remove active class from all option
    AllOptions.forEach(opt => {
      opt.classList.remove("active")
    })
    // when toogle checked = true
    if (Toogle.checked === true) {
      // ---- update price----
      Price_Option.forEach(price => {
        price.innerHTML = price.innerHTML * 10;
      })
      // ---- update duration----
      Duration_option.forEach(dur => {
        dur.innerHTML = "Yr";
      })
      // ---- show mssg----
      Message_Two_month_free.forEach(mssg => {
        mssg.classList.add("active")
      })
    }
    // when toogle checked = false
    else {
      // ---- return price----
      Price_Option.forEach(price => {
        price.innerHTML = price.innerHTML / 10
      })
      // ---- return duration-----
      Duration_option.forEach(dur => {
        dur.innerHTML = "mo";
      })
      // ---- hide message-----
      Message_Two_month_free.forEach(mssg => {
        mssg.classList.remove("active")
      })
    }
  })
}
AllOptions.forEach(option => {
  option.addEventListener("click", () => {
    let cont = option.classList.contains("active")
    AllOptions.forEach(opt => {
      if (cont) {
        return
      }
      if (opt.classList.contains("active")) {
        opt.classList.remove("active")
      }
    })
    option.classList.toggle("active")
  })
})
// #############################################################//
//-------------------check-input-field--------------------------//
// #############################################################//
function checkNameField() {
  if (InputName.value == "") {
    InputName.classList.add("error")
    InputName.previousElementSibling.lastElementChild.style.cssText = "display:block"
    InputName.previousElementSibling.lastElementChild.innerHTML = "this field is required"
    InputName.previousElementSibling.firstElementChild.style.cssText = "color:red"
  } else if (InputName.value.length < 4) {
    InputName.classList.add("error")
    InputName.previousElementSibling.lastElementChild.style.cssText = "display:block"
    InputName.previousElementSibling.lastElementChild.innerHTML = "your Name min 4 Character"
    InputName.previousElementSibling.firstElementChild.style.cssText = "color:red"
  }
  else if (myNameRegex.test(InputName.value) == false) {
    InputName.classList.add("error")
    InputName.previousElementSibling.lastElementChild.style.cssText = "display:block"
    InputName.previousElementSibling.lastElementChild.innerHTML = "invalid Name You must use just character"
    InputName.previousElementSibling.firstElementChild.style.cssText = "color:red"
  } else {
    InputName.classList.remove("error")
    InputName.previousElementSibling.lastElementChild.style.cssText = "display:none"
    InputName.previousElementSibling.firstElementChild.style.cssText = "color:black"
    InputEmail.focus()
  }
}
function checkEmailField() {
  if (InputEmail.value == "") {
    InputEmail.classList.add("error")
    InputEmail.previousElementSibling.lastElementChild.style.cssText = "display:block"
    InputEmail.previousElementSibling.lastElementChild.innerHTML = "this field is required"
    InputEmail.previousElementSibling.firstElementChild.style.cssText = "color:red"
  } else if (myMailRegex.test(InputEmail.value) == false) {
    InputEmail.classList.add("error")
    InputEmail.previousElementSibling.lastElementChild.style.cssText = "display:block"
    InputEmail.previousElementSibling.lastElementChild.innerHTML = "invalid Email"
    InputEmail.previousElementSibling.firstElementChild.style.cssText = "color:red"
  } else {
    InputEmail.classList.remove("error")
    InputEmail.previousElementSibling.lastElementChild.style.cssText = "display:none"
    InputEmail.previousElementSibling.firstElementChild.style.cssText = "color:black"
    InputNumber.focus()
  }
}
function checkNmbrField() {
  if (InputNumber.value == "") {
    InputNumber.classList.add("error")
    InputNumber.previousElementSibling.lastElementChild.style.cssText = "display:block"
    InputNumber.previousElementSibling.lastElementChild.innerHTML = "this field is required"
    InputNumber.previousElementSibling.firstElementChild.style.cssText = "color:red"
  } else if (myNumRegex.test(InputNumber.value) == false) {
    InputNumber.classList.add("error")
    InputNumber.previousElementSibling.lastElementChild.style.cssText = "display:block"
    InputNumber.previousElementSibling.lastElementChild.innerHTML = "invalid Number"
    InputNumber.previousElementSibling.firstElementChild.style.cssText = "color:red"
  } else {
    InputNumber.classList.remove("error")
    InputNumber.previousElementSibling.lastElementChild.style.cssText = "display:none"
    InputNumber.previousElementSibling.firstElementChild.style.cssText = "color:black"
    InputNumber.blur()
  }
}
function checkAll() {
  if (
    InputName.value !== "" &&
    InputName.value.length >= 4 &&
    myNameRegex.test(InputName.value) &&
    InputEmail.value !== "" &&
    myMailRegex.test(InputEmail.value) &&
    InputNumber.value !== "" &&
    myNumRegex.test(InputNumber.value)
  ) {
    AllSteps[0].style.cssText = "display:none";
    AllSteps[1].style.cssText = "display:flex";
    AllCircle[0].classList.remove("active")
    AllCircle[1].classList.add("active")
  }
}