
var HoagieBuilder = (function() {
  var cholestrol = 0;     // Private variable to store the hoagie CALORIE
  return {
    addTopping: function(toppingchl) {
      cholestrol += toppingchl;
			chl.HB = cholestrol; 
      console.log("Currently total fat",cholestrol);
    }
  };
})();
var HoagieBuilder = (function(maker) {

  var coldCHL= {"Turkey":     22,
                "Ham":            17, 
                "Pepperoni":      23, 
                "Roast Beef":     23,
                "Italian":         17,
                "Roasted Veggie":  0};
  maker.addColdCHL = function(thisHoagieC) {
    return coldCHL[thisHoagieC];
  };
  maker.getColdCHL = function () {
    return coldCHL;
  };
  return maker;
})(HoagieBuilder);
var HoagieBuilder = (function(maker) {
  var hotCHL = {"Meatball":       17, 
                "Cheesestake":    23, 
                 "Veggie":        38};
  maker.addCHL = function(thisHoagieH) {
    return hotCHL[thisHoagieH];
  };
  maker.getHotCHL = function () {
    return hotCHL;
  };
  return maker;
})(HoagieBuilder);


var finalCHL = 0;   //Variable to hold the final price. Default to 0.
var selectedTopping;          //Variable to hold topping that the user selects

var coldChooser = document.getElementById("coldType"),
    hotChooser = document.getElementById("hotType"),
    chl = document.getElementById("chl"),  //Our Final Sandwich destination on the DOM
    tCHL = document.getElementById("tCHL");

coldChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;                      //Get the value chosen from the DOM
  selectedTopping = selectedTopping.split("--");          //Splitting the selectedTopping gives us an array of "btn [0]" and "(bread choosen [1])"
  
  if (selectedTopping[0] === "btn"){
    let coldH = HoagieBuilder.getColdCHL();          //Returns the object representing our breads and prices
    let coldHKey = selectedTopping[1];                    //Represents the bread chosen
    finalCHL += coldH[coldHKey];               // Add the topping to the HoagieBuilder to increase the total price
    chl.innerHTML += `+${coldH[coldHKey]}% <br>`; //Output to DOM
    tCHL.innerHTML = `${finalCHL}`;

  }
});

hotChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let hotH = HoagieBuilder.getHotCHL();
    let hotHKey = selectedTopping[1];
    finalCHL += hotH[hotHKey];
    chl.innerHTML += `+${hotH[hotHKey]}% <br>`;
    tCHL.innerHTML = `${finalCHL}`;

  }
});