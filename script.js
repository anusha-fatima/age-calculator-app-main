//Output variables.
const output_year = document.querySelector(".output-year");
const  output_month = document.querySelector(".output-month");
const output_day = document.querySelector(".output-day ");
const submit_btn = document.querySelector(".submit_btn");

//input variables.

let isValid = false;
const day = document.querySelector("#input_1");
const month = document.querySelector("#input_2");
const year = document.querySelector("#input_3");

//for error-variables.

const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");

//For click function
submit_btn.addEventListener('click', AgeCalculator);

//For Day
input_1.addEventListener("input" , (e) =>{
    if(+input_1.value > 31){
        error_day.textContent = "Must be a valid date";
        return;
    }
    else{
        isValid = true;
        error_day.textContent = "";

    }
  if(+input_1.value === 0){
    error_day.textContent = 'This field is required'
    isValid = false;
    return;
  }
  else{
    error_day.textContent = "";
  }
});
//for Month
input_2.addEventListener("input" , (e) =>{
    if(+input_2.value > 12){
        error_month.textContent = "Must be a valid date";
        return;
    }
    else{
        isValid = true;
        error_month.textContent = "";
    }
  if(+input_2.value === 0){
    error_month.textContent = 'This field is required'
    isValid = false;
    return;
  }
  else{
    error_month.textContent = "";
  }
});
//For years
input_3.addEventListener("input" , (e) =>{
    if(+input_3.value > 2023){
        error_year.textContent = "Must be a valid date";
        return;
    }
    else{
        isValid = true;
        error_year.textContent = "";
    }
  if(+input_3.value === 0){
    error_year.textContent = 'This field is required'
    isValid = false;
    return;
  }
  else{
    error_year.textContent = "";
  }
});

//Final Output.
function AgeCalculator(){
    if(isValid){
        let yourAge = `${input_2.value}/${input_1.value}/${input_3.value}`;
        console.log(yourAge);
        let yourAgeObj = new  Date(yourAge);
        let currentAgeDiff = Date.now() - yourAgeObj;
        let ageDate = new Date(currentAgeDiff);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonths = ageDate.getUTCMonth();
        let ageDays = ageDate.getUTCDay();
        //Final Output of Your Current Age,
        output_day.textContent = ageDays;
        output_month.textContent = ageMonths;
        output_year.textContent  = ageYears;
    }
    else{
        alert('ERROR!!');
    }
}