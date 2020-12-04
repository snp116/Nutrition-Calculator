
var HoagieBuilder = (function() {
  var totalSatFat = 0;     // Private variable to store the hoagie CALORIE
  return {
    addTopping: function(toppingSatFat) {
      totalSatFat += toppingSatFat;
      HSatFatper.HB = totalSatFat; 
      console.log("Currently total fat",totalSatFat);
    }
  };
})();
var HoagieBuilder = (function(maker) {

  var coldSatFat= {"Turkey":     30,
                "Ham":            10, 
                "Pepperoni":      60, 
                "Roast Beef":     0,
                "Italian":         20,
                "Roasted Veggie":  0};
  maker.addColdSatFat = function(thisHoagieC) {
    return coldSatFat[thisHoagieC];
  };
  maker.getColdSatFat = function () {
    return coldSatFat;
  };
  return maker;
})(HoagieBuilder);
var HoagieBuilder = (function(maker) {
  var hotSatFat = {"Meatball":    60, 
                "Cheesestake":    50, 
                 "Veggie":        40};
  maker.addHotSatFat = function(thisHoagieH) {
    return hotSatFat[thisHoagieH];
  };
  maker.getHotSatFat = function () {
    return hotSatFat;
  };
  return maker;
})(HoagieBuilder);


var finalHoagieSatFat = 0;   //Variable to hold the final price. Default to 0.
var selectedTopping;          //Variable to hold topping that the user selects

var coldChooser = document.getElementById("coldType"),
    hotChooser = document.getElementById("hotType"),
    HSatFatper = document.getElementById("HSatFatper"),  //Our Final Sandwich destination on the DOM
    tSatFat = document.getElementById("tSatFat");

coldChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;                      //Get the value chosen from the DOM
  selectedTopping = selectedTopping.split("--");          //Splitting the selectedTopping gives us an array of "btn [0]" and "(bread choosen [1])"
  
  if (selectedTopping[0] === "btn"){
    let coldH = HoagieBuilder.getColdSatFat();          //Returns the object representing our breads and prices
    let coldHKey = selectedTopping[1];                    //Represents the bread chosen
    finalHoagieSatFat += coldH[coldHKey];               // Add the topping to the HoagieBuilder to increase the total price
    HSatFatper.innerHTML += `+${coldH[coldHKey]} <br>`; //Output to DOM
    tSatFat.innerHTML = `${finalHoagieSatFat}%`;

  }
});

hotChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let hotH = HoagieBuilder.getHotSatFat();
    let hotHKey = selectedTopping[1];
    finalHoagieSatFat += hotH[hotHKey];
    HSatFatper.innerHTML += `+${hotH[hotHKey]} <br>`;
    tSatFat.innerHTML = `${finalHoagieSatFat}%`;

  }
});