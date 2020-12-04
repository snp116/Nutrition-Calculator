
var HoagieBuilder = (function() {
  var sodium = 0;     // Private variable to store the hoagie CALORIE
  return {
    addTopping: function(toppingSod) {
      sodium += toppingSod;
      Sod.HB = sodium; 

    }
  };
})();
var HoagieBuilder = (function(maker) {

  var coldSod= {"Turkey":         59,
                "Ham":            33, 
                "Pepperoni":      54, 
                "Roast Beef":     24,
                "Italian":        40,
                "Roasted Veggie":  9};
  maker.addColdSod = function(thisHoagieC) {
    return coldSod[thisHoagieC];
  };
  maker.getColdSod = function () {
    return coldSod;
  };
  return maker;
})(HoagieBuilder);

var HoagieBuilder = (function(maker) {
  var hotSod = {"Meatball":       58, 
                "Cheesestake":    38, 
                 "Veggie":        43};
  maker.addHotSod = function(thisHoagieH) {
    return hotSod[thisHoagieH];
  };
  maker.getHotSod = function () {
    return hotSod;
  };
  return maker;
})(HoagieBuilder);


var finalSod = 0;   //Variable to hold the final price. Default to 0.
var selectedTopping;          //Variable to hold topping that the user selects

var coldChooser = document.getElementById("coldType"),
    hotChooser = document.getElementById("hotType"),
    Sod = document.getElementById("Sod"),  //Our Final Sandwich destination on the DOM
    tSod = document.getElementById("tSod");

coldChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;                      //Get the value chosen from the DOM
  selectedTopping = selectedTopping.split("--");          //Splitting the selectedTopping gives us an array of "btn [0]" and "(bread choosen [1])"
  
  if (selectedTopping[0] === "btn"){
    let coldH = HoagieBuilder.getColdSod();          //Returns the object representing our breads and prices
    let coldHKey = selectedTopping[1];                    //Represents the bread chosen
    finalSod += coldH[coldHKey];               // Add the topping to the HoagieBuilder to increase the total price
    Sod.innerHTML += `+${coldH[coldHKey]}% <br>`; //Output to DOM
    tSod.innerHTML = `${finalSod}%`;

  }
});

hotChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let hotH = HoagieBuilder.getHotSod();
    let hotHKey = selectedTopping[1];
    finalSod += hotH[hotHKey];
    Sod.innerHTML += `+${hotH[hotHKey]}% <br>`;
    tSod.innerHTML = `${finalSod}%`;

  }
});