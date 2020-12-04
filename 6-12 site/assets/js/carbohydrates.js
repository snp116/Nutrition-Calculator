
var HoagieBuilder = (function() {
  var carbohydrates = 0;     // Private variable to store the hoagie CALORIE
  return {
    addTopping: function(toppingCarbs) {
      carbohydrates += toppingCarbs;
      carbs.HB = carbohydrates; 

    }
  };
})();
var HoagieBuilder = (function(maker) {

  var coldCarbs= {"Turkey":       2,
                "Ham":            1, 
                "Pepperoni":      1, 
                "Roast Beef":     0,
                "Italian":        1,
                "Roasted Veggie":  2};
  maker.addColdCarbs = function(thisHoagieC) {
    return coldCarbs[thisHoagieC];
  };
  maker.getColdCarbs = function () {
    return coldCarbs;
  };
  return maker;
})(HoagieBuilder);

var HoagieBuilder = (function(maker) {
  var hotCarbs = {"Meatball":    7, 
                "Cheesestake":    7, 
                 "Veggie":        3};
  maker.addHotCarbs = function(thisHoagieH) {
    return hotCarbs[thisHoagieH];
  };
  maker.getHotCarbs = function () {
    return hotCarbs;
  };
  return maker;
})(HoagieBuilder);


var finalCarbs = 0;   //Variable to hold the final price. Default to 0.
var selectedTopping;          //Variable to hold topping that the user selects

var coldChooser = document.getElementById("coldType"),
    hotChooser = document.getElementById("hotType"),
    carbs = document.getElementById("carbs"),  //Our Final Sandwich destination on the DOM
    tCarbs = document.getElementById("tCarbs");

coldChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;                      //Get the value chosen from the DOM
  selectedTopping = selectedTopping.split("--");          //Splitting the selectedTopping gives us an array of "btn [0]" and "(bread choosen [1])"
  
  if (selectedTopping[0] === "btn"){
    let coldH = HoagieBuilder.getColdCarbs();          //Returns the object representing our breads and prices
    let coldHKey = selectedTopping[1];                    //Represents the bread chosen
    finalCarbs += coldH[coldHKey];               // Add the topping to the HoagieBuilder to increase the total price
    carbs.innerHTML += `${coldH[coldHKey]}% <br>`; //Output to DOM
    tCarbs.innerHTML = `${finalCarbs}%`;

  }
});

hotChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let hotH = HoagieBuilder.getHotCarbs();
    let hotHKey = selectedTopping[1];
    finalCarbs += hotH[hotHKey];
    carbs.innerHTML += `${hotH[hotHKey]}% <br>`;
    tCarbs.innerHTML = `${finalCarbs}%`;

  }
});