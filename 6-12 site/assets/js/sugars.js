
var HoagieBuilder = (function() {
  var sweet = 0;     // Private variable to store the hoagie CALORIE
  return {
    addTopping: function(toppingSugars) {
      sweet += toppingSugars;
      Sugars.HB = sweet; 

    }
  };
})();
var HoagieBuilder = (function(maker) {

  var coldSugars= {"Turkey":       3,
                "Ham":             0, 
                "Pepperoni":       2, 
                "Roast Beef":      0,
                "Italian":         1,
                "Roasted Veggie":  4};
  maker.addColdSugars = function(thisHoagieC) {
    return coldSugars[thisHoagieC];
  };
  maker.getColdSugars = function () {
    return coldSugars;
  };
  return maker;
})(HoagieBuilder);

var HoagieBuilder = (function(maker) {
  var hotSugars = {"Meatball":    8, 
                "Cheesestake":    16, 
                 "Veggie":        3};
  maker.addHotSugars = function(thisHoagieH) {
    return hotSugars[thisHoagieH];
  };
  maker.getHotSugars = function () {
    return hotSugars;
  };
  return maker;
})(HoagieBuilder);


var finalSugars = 0;   //Variable to hold the final price. Default to 0.
var selectedTopping;          //Variable to hold topping that the user selects

var coldChooser = document.getElementById("coldType"),
    hotChooser = document.getElementById("hotType"),
    Sugars = document.getElementById("Sugars"),  //Our Final Sandwich destination on the DOM
    tSugars = document.getElementById("tSugars");

coldChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;                      //Get the value chosen from the DOM
  selectedTopping = selectedTopping.split("--");          //Splitting the selectedTopping gives us an array of "btn [0]" and "(bread choosen [1])"
  
  if (selectedTopping[0] === "btn"){
    let coldH = HoagieBuilder.getColdSugars();          //Returns the object representing our breads and prices
    let coldHKey = selectedTopping[1];                    //Represents the bread chosen
    finalSugars += coldH[coldHKey];               // Add the topping to the HoagieBuilder to increase the total price
    Sugars.innerHTML += `${coldH[coldHKey]}g <br>`; //Output to DOM
    tSugars.innerHTML = `${finalSugars}g`;

  }
});

hotChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let hotH = HoagieBuilder.getHotSugars();
    let hotHKey = selectedTopping[1];
    finalSugars += hotH[hotHKey];
    Sugars.innerHTML += `${hotH[hotHKey]}g <br>`;
    tSugars.innerHTML = `${finalSugars}g`;

  }
});