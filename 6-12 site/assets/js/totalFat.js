// total fat //


var HoagieBuilder = (function(maker) {

  var coldFat= {"Turkey":         34,
                "Ham":            5, 
                "Pepperoni":      49, 
                "Roast Beef":     3,
                "Italian":         18,
                "Roasted Veggie":  5};
  maker.addColdFat = function(thisHoagieC) {
    return coldFat[thisHoagieC];
  };
  maker.getColdFat = function () {
    return coldFat;
  };
  return maker;
})(HoagieBuilder);
var HoagieBuilder = (function(maker) {
  var hotFat = {"Meatball":    58, 
                "Cheesestake": 32, 
                 "Veggie":     45};
  maker.addHotFat = function(thisHoagieH) {
    return hotFat[thisHoagieH];
  };
  maker.getHotFat = function () {
    return hotFat;
  };
  return maker;
})(HoagieBuilder);


var finalHoagieFat = 0;   //Variable to hold the final price. Default to 0.
var selectedTopping;          //Variable to hold topping that the user selects

var coldChooser = document.getElementById("coldType"),
    hotChooser = document.getElementById("hotType"),
    HFatper = document.getElementById("HFatper"),  //Our Final Sandwich destination on the DOM
    tFat = document.getElementById("tFat");

coldChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;                      //Get the value chosen from the DOM
  selectedTopping = selectedTopping.split("--");          //Splitting the selectedTopping gives us an array of "btn [0]" and "(bread choosen [1])"
  
  if (selectedTopping[0] === "btn"){
    let coldH = HoagieBuilder.getColdFat();          //Returns the object representing our breads and prices
    let coldHKey = selectedTopping[1];                    //Represents the bread chosen
    finalHoagieFat += coldH[coldHKey];               // Add the topping to the HoagieBuilder to increase the total price
    HFatper.innerHTML += `+${coldH[coldHKey]}%<br>`; //Output to DOM
    tFat.innerHTML = `${finalHoagieFat}`;

  }
});

hotChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let hotH = HoagieBuilder.getHotFat();
    let hotHKey = selectedTopping[1];
    finalHoagieFat += hotH[hotHKey];
    HFatper.innerHTML += `+${hotH[hotHKey]}%<br>`;
    tFat.innerHTML = `${finalHoagieFat}`;

  }
});



