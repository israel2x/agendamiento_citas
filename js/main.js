let backwardSteps = [];
let nowStep = 1;
let backbutton = document.querySelector(".buttons .back");
let nextButton = document.querySelector(".buttons .next");
let form = document.forms[0];
// show first
showSteps(nowStep);
// hide backbutton on step 1
backbutton.style.visibility = "hidden";

///////////////////////events

// next button
nextButton.addEventListener("click", (e) => {
  e.preventDefault();
  next();
  if (nowStep === 4) {
    e.currentTarget.innerHTML = "confirmar";
    e.currentTarget.classList.remove("next");
    e.currentTarget.classList.add("confirmar");
  }
});

// back button
backbutton.addEventListener("click", (e) => {
  e.preventDefault();
  if (nowStep !== 1) {
    if (nowStep === 4) {
      nextButton.innerHTML = "next";
      nextButton.classList.remove("confirmar");
      nextButton.classList.add("next");
    }
    nowStep--;
    showSteps(nowStep);
    backwardSteps.pop();
  }
});

// validate tel input
/* form.phone.addEventListener("input", (e) => {
    e.currentTarget.value = e.currentTarget.value
    .replace(/\D+/g, "")
    .replace(/.+/g, "+$&")
    .replace(/([+]\d)\B/g, "$& ")
    .replace(/\d{3}\B/g, "$& "); 
}); */

// choose plan time
/* let planButton = document.querySelector(".step-2 .register-plan button");
showPlanTime(form.timePlan.value);
planButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (form.timePlan.value === "yearly") {
    form.timePlan.value = "monthly";
  } else {
    form.timePlan.value = "yearly";
  }
  showPlanTime(form.timePlan.value);
});
 */
////////////////////functions

// show current step
function showSteps(step) {
  // add and remove hidden class from step cont
  let stepConts = [...document.querySelectorAll(".step-cont")];
  stepConts.forEach((box) => {
    box.classList.remove("hidden");
    if (box.dataset.step != step) {
      box.classList.add("hidden");
    }
  });
  // add active class to li of now step
  let lis = [...document.querySelectorAll("aside li")];
  lis.forEach((li) => {
    li.classList.remove("active");
    if (li.dataset.step == step) {
      li.classList.add("active");
    }
  });

  // show and hide backbutton
  if (step == 1) {
    backbutton.style.visibility = "hidden";
  } else {
    backbutton.style.visibility = "visible";
  }
}

// show yearly Or Monthly
async function showPlanTime(planTime) {
  /* let response = await fetch("./js/data.json");
  let data = await response.json();
  let planData = data["step-2"];
  let ul = document.querySelector(".step-2 .plans");
  ul.innerHTML = "";
  Object.keys(planData).forEach((plan) => {
    let li = `
    <li class="box">
    <input type="radio" name="plan" value="${plan}" />
    <img src="./assets/images/icon-${plan}.svg" alt="" />
    <div class="content">
    <h3>${plan}</h3>
    <span class="price">${planData[plan][planTime]}</span>
    ${
      planTime === "yearly"
        ? `<span class="offer">${planData[plan]["offer"]}</span>`
        : ""
    }
    </div>
    </li>
    `;
    ul.innerHTML += li;
  });
  choosePlanEvent();
  // show step 3 depend on plan time
  showAddOns(planTime, data["step-3"]); */
}

/* function choosePlanEvent() {
  // choose plan
  let plans = [...document.querySelectorAll(".step-2 .plans .box")];
  plans.forEach((box) => {
    box.addEventListener("click", (e) => {
      let value = e.currentTarget.querySelector("input").value;
      form.plan.value = value;
    });
  });
} */

// show add-ons depend on planTime
/* async function showAddOns(planTime, addOns) {
  let ul = document.querySelector(".step-3 .add-ons");
  ul.innerHTML = "";
  Object.keys(addOns).forEach((addOn) => {
    let li = `
        <li class="box">
          <input type="checkbox" name="addOns" value="${addOn}"/>
          <div class="label">
          <h3>${addOn}</h3>
          <p>${addOns[addOn]["description"]}</p>
          </div>
          <span class="price">${addOns[addOn][planTime]}</span>
        </li>
    `;
    ul.innerHTML += li;
  });
  chooseAddOnsEvent();
}
function chooseAddOnsEvent() {
  let addOns = [...document.querySelectorAll(".step-3 .add-ons .box")];
  addOns.forEach((addOn) => {
    addOn.addEventListener("click", (e) => {
      let input = e.currentTarget.querySelector("input");
      if (input.checked) {
        input.checked = false;
      } else {
        input.checked = true;
      }
    });
  });
} */

// show step 4 (total and choosed services)

async function showStep4() {
  /* let response = await fetch("./js/data.json");
  let data = await response.json();
  let timePlan = localStorage["timePlan"];
  let plan = localStorage["plan"];
  let addOns =
    localStorage["addOns"] === "" ? false : localStorage["addOns"].split(",");
  let [mainLi, planPrice] = createMainLi(data, plan, timePlan);
  let ul = document.querySelector(".step-4 .sub-and-add-ons");
  let total = document.querySelector(".step-4 .total-cont");
  ul.innerHTML = "";
  total.innerHTML = "";
  if (addOns) {
    let [addOnLis, addOnPrice] = createAddOnLi(data, timePlan, addOns);
    let totalLi = createTotalLi(planPrice, timePlan, addOnPrice);
    ul.append(mainLi, ...addOnLis);
    total.append(totalLi);
  } else {
    let totalLi = createTotalLi(planPrice, timePlan);
    ul.append(mainLi);
    total.append(totalLi);
  } */
}
function createMainLi(data, plan, timePlan) {
  /* let planPrice = data["step-2"][plan][timePlan];
  let li = document.createElement("li");
  li.classList.add("main");
  li.innerHTML = `
    <div class="label">
      <span>${plan}(${timePlan})</span>
      <a href="#">change</a>
    </div>
    <span class="price">${planPrice}</span>
  `;
  return [li, planPrice]; */
}
function createAddOnLi(data, timePlan, addOns) {
  /* let addOnLis = [];
  let addOnPrice = [];
  addOns.forEach((addOn) => {
    let price = data["step-3"][addOn][timePlan];
    let li = document.createElement("li");
    li.classList.add("add-on");
    li.innerHTML = `
        <div class="label">${addOn}</div>
        <span class="price">${price}</span>
    `;
    addOnLis.push(li);
    addOnPrice.push(price);
  });
  return [addOnLis, addOnPrice]; */
}
function createTotalLi(planPrice, timePlan, addOnPrice = false) {
  /* let addOnSum = addOnPrice
    ? +addOnPrice
        .map((price) => price.match(/\d+/)[0])
        .reduce((previous, current) => +previous + +current)
    : 0;

  let total = addOnSum + +planPrice.match(/\d+/)[0];
  let div = document.createElement("div");
  div.classList.add("total");
  div.innerHTML = `
      <div class="label">total (per ${timePlan.slice(0, -2)})</div>
      <span class="price">+$${total}/${
    timePlan === "monthly" ? "mo" : "yr"
  }</span>
  `;
  return div; */
}

// next step functions
function next() {
  // validate step and add to localStorage
  let steps = [step1, step2, step3, step4];
  let valid;
  if (nowStep === 5) {
    valid = true;
  } else {
    valid = steps[nowStep - 1]();
  }
  // go next
  if (valid) {
    backwardSteps.push(nowStep);
    nowStep++;
    showSteps(nowStep);
  }
}

function step1() {
  // validate step1
  let valid = true;
  let inputs = [form.name];

  //let inputs = [form.name, form.email, form.phone];
  // validate inputs

  inputs.forEach((input) => {
    let label = input.parentElement.querySelector("label");
    if (input.value.length === 0) {
      label.dataset.msg = "Información Obligatoria";
      valid = false;
    } /*  else if (input.type === "email") {
      let regex = /\w+@\w+[.]\w+/gi;
      if (!regex.test(input.value)) {
        valid = false;
        label.dataset.msg = "invalid email, please input valid one";
      } else {
        label.removeAttribute("data-msg");
      }
    } else if (input.type === "tel") {
      if (input.value.replace(/\s/g, "").length < 11) {
        valid = false;
        label.dataset.msg = "invalid phone, please input valid one";
      } else {
        label.removeAttribute("data-msg");
      }
    } else {
      label.removeAttribute("data-msg");
    }   */
  });

  // add to local storage
  if (valid) {
    inputs.forEach((input) => {
      localStorage[input.name] = input.value;
    });
  }
  return valid;
}
function step2() {
  /* if (form.plan.value) {
    localStorage["plan"] = form.plan.value;
    localStorage["timePlan"] = form.timePlan.value;
    return true;
  }
  return false; */
  return true;
}
function step3() {
  /*  let inputs = [...form.addOns];
  let values = [];
  inputs.forEach((input) => {
    if (input.checked) values.push(input.value);
  });
  localStorage["addOns"] = values;
  showStep4(); */
  return true;
}

function step4() {
  let buttons = backbutton.parentElement;
  buttons.parentElement.removeChild(buttons);
  return true;
}
