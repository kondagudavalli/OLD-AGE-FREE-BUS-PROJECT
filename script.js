const seatAvailable = document.getElementById("seatAvailable");
const ageAbove50 = document.getElementById("ageAbove50");
const hasAadhar = document.getElementById("hasAadhar");
const checkButton = document.getElementById("checkStatus");
const passengerStatus = document.getElementById("status");

checkButton.addEventListener("click", function () {
  let isSeatAvailable = seatAvailable.checked;
  let isAgeAbove50 = ageAbove50.checked;
  let hasAadharCard = hasAadhar.checked;
  if(isSeatAvailable){
    console.log('Seat is available');
    if(isAgeAbove50){
        console.log('age is above 50');
        if(hasAadharCard){
            console.log('Welcome to ouR Bus🥰')
          alret('Welcome to ouR Bus🥰')
            passengerStatus.textContent="Welcome to ouR Bus🥰";
        }else{
            console.log("I'm SorrY🤞");
            passengerStatus.textContent="seat is available, aged above 50, but You don't have Adhar Card!"
        }
    }else{
        console.log('youR age below 50,Sorry');
        passengerStatus.textContent ="seat is available,but youR age below 50,Sorry";
    }
}else{
    console.log('Seat is not available');
 passengerStatus.textContent = 'Seat is not available';
}
});
