
var HoagieBuilder = (function() {
  var pro = 0;     // Private variable to store the hoagie CALORIE
  return {
    addTopping: function(toppingPro) {
      pro += toppingPro;
      Proteins.HB = pro; 

    }
  };
})();
var HoagieBuilder = (function(maker) {

  var coldProteins= {"Turkey":    26,
                "Ham":            16, 
                "Pepperoni":       14, 
                "Roast Beef":      14,
                "Italian":         24,
                "Roasted Veggie":  2};
  maker.addColdProteins = function(thisHoagieC) {
    return coldProteins[thisHoagieC];
  };
  maker.getColdProteins = function () {
    return coldProteins;
  };
  return maker;
})(HoagieBuilder);

var HoagieBuilder = (function(maker) {
  var hotProteins = {"Meatball":    12, 
                "Cheesestake":    24, 
                 "Veggie":        31};
  maker.addHotProteins = function(thisHoagieH) {
    return hotProteins[thisHoagieH];
  };
  maker.getHotProteins = function () {
    return hotProteins;
  };
  return maker;
})(HoagieBuilder);


var finalProteins = 0;   //Variable to hold the final price. Default to 0.
var selectedTopping;          //Variable to hold topping that the user selects

var coldChooser = document.getElementById("coldType"),
    hotChooser = document.getElementById("hotType"),
    Proteins = document.getElementById( "Proteins"),  //Our Final Sandwich destination on the DOM
    tProteins = document.getElementById("tProteins");

coldChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;                      //Get the value chosen from the DOM
  selectedTopping = selectedTopping.split("--");          //Splitting the selectedTopping gives us an array of "btn [0]" and "(bread choosen [1])"
  
  if (selectedTopping[0] === "btn"){
    let coldH = HoagieBuilder.getColdProteins();          //Returns the object representing our breads and prices
    let coldHKey = selectedTopping[1];                    //Represents the bread chosen
    finalProteins += coldH[coldHKey];               // Add the topping to the HoagieBuilder to increase the total price
    Proteins.innerHTML += `${coldH[coldHKey]}g <br>`; //Output to DOM
    tProteins.innerHTML = `${finalProteins}g`;

  }
});

hotChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let hotH = HoagieBuilder.getHotProteins();
    let hotHKey = selectedTopping[1];
    finalProteins += hotH[hotHKey];
    Proteins.innerHTML += `${hotH[hotHKey]}g <br>`;
    tProteins.innerHTML = `${finalProteins}g`;

  }
});