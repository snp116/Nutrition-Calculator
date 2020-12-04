
var HoagieBuilder = (function() {

  var totalCalorie = 0;     // Private variable to store the hoagie CALORIE

  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingCal) {
      totalCalorie += toppingCal;
			sandwichEl.HB = totalCalorie;

    }
  };
})();

/////// ########### cold options ############///////

var HoagieBuilder = (function(maker) {

  var coldCal= {"Turkey":         330,
                "Ham":            100, 
                "Pepperoni":      360, 
                "Roast Beef":     160,
                "Italian":        410,
                "Roasted Veggie":  60};
        

  // Augment the original object with another method
  maker.addColdCal = function(thisHoagieC) {
    return coldCal[thisHoagieC];
  };

  maker.getColdCal = function () {
    return coldCal
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(HoagieBuilder);

/////// ########### hot options ############///////

var HoagieBuilder = (function(maker) {
  // Private variable to store the different meat prices
  var hotCal = {"Meatball":    480, 
                "Cheesestake": 370, 
                 "Veggie":     210};

  // Augment the original object with another method
  maker.addHotCal = function(thisHoagieH) {
    return hotCal[thisHoagieH];
  };

  maker.getHotCal = function () {
    return hotCal
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(HoagieBuilder);

/////// ########### cheese options ############///////

var HoagieBuilder = (function(maker) {

  var cheeseCal= {"American":    80, 
                  "Provolone":  100, 
                  "Cheddar":    110, 
                  "Swiss":      100,
                  "Pepper Jack":100,
                  "No Cheese":    0};

  // Augment the original object with another method
  maker.addCheeseCal = function(thisCheese) {
    return cheeseCal[thisCheese];
  };

  maker.getCheeseCal = function () {
    return cheeseCal
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(HoagieBuilder);

/////// ########### condiments options ############///////

var HoagieBuilder = (function(maker) {
  // Private variable to store the different condiment prices
  var condimentCal= {"Mayo":          50,
                    "Oil":            50,
                    "Vinegar":         5,
                    "Ranch Dressing": 80,
                    "Yellow Mustard": 20,
                    "Ketchup":        30,
                    "BBQ Sauce":      50,
                    "Siracha Sauce":   5};

  // Augment the original object with another method
  maker.addCondimentCal = function(thisCondiment) {
    return condimentCal[thisCondiment];
  };

  maker.getCondimentCal = function () {
    return condimentCal
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(HoagieBuilder);

/////// ########### topping options ############///////


var HoagieBuilder = (function(maker) {
  // Private variable to store the different veggie prices
  var toppingCal= {"Lettuce":         5, 
                  "Tomato":          15,
		   "Peppers":	      0,
                  "Pickle":           0, 
                  "Cucumbers":        0, 
                  "Jalapenos":        0, 
                  "Grated Parmesan": 15, 
                  "Spinach":          0, 
                  "Salt":             0, 
                  "Black Peppers":    0};

  // Augment the original object with another method
  maker.addToppingCal = function(thisTop) {
    return toppingCal[thisTop];
  };

  maker.getToppingCal = function () {
    return toppingCal
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(HoagieBuilder);

var finalHoagieCal = 0;   //Variable to hold the final price. Default to 0.
var selectedTopping;          //Variable to hold topping that the user selects

// Get references to the <select> elements that have all the varied options
var coldChooser = document.getElementById("coldType"),
    hotChooser = document.getElementById("hotType"),
    cheeseChooser = document.getElementById("cheeses"),
    condimentChooser = document.getElementById("condiments"),
    toppingChooser = document.getElementById("topping"),
    sandwichEl = document.getElementById("finalSandwichEl"),  //Our Final Sandwich destination on the DOM
    totalEl = document.getElementById("totalEl");

// A <select> element broadcasts a change event (I went with "click"), so you listen for it
// and get the value of the topping from your augmented IIFE
coldChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;                      //Get the value chosen from the DOM
  selectedTopping = selectedTopping.split("--");          //Splitting the selectedTopping gives us an array of "btn [0]" and "(bread choosen [1])"
  
  if (selectedTopping[0] === "btn"){
    let coldH = HoagieBuilder.getColdCal();          //Returns the object representing our breads and prices
    let coldHKey = selectedTopping[1];                    //Represents the bread chosen
    finalHoagieCal += coldH[coldHKey];               // Add the topping to the HoagieBuilder to increase the total price
    sandwichEl.innerHTML += `+${coldH[coldHKey]} for ${selectedTopping[1]}<br>`; //Output to DOM
    totalEl.innerHTML = `${finalHoagieCal} current total`;

  }
});

hotChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let hotH = HoagieBuilder.getHotCal();
    let hotHKey = selectedTopping[1];
    finalHoagieCal += hotH[hotHKey];
    sandwichEl.innerHTML += `+${hotH[hotHKey]} for ${selectedTopping[1]}<br>`;
    totalEl.innerHTML = `${finalHoagieCal} current total`;

  }
});

cheeseChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let cheeses = HoagieBuilder.getCheeseCal();
    let cheeseKey = selectedTopping[1];
    finalHoagieCal += cheeses[cheeseKey];
    sandwichEl.innerHTML += `+${cheeses[cheeseKey]} for ${selectedTopping[1]}<br>`;
    totalEl.innerHTML = `${finalHoagieCal} current total`;

  }
});

condimentChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let condiments = HoagieBuilder.getCondimentCal();
    let condimentKey = selectedTopping[1];
    finalHoagieCal += condiments[condimentKey];
    sandwichEl.innerHTML += `+${condiments[condimentKey]} for ${selectedTopping[1]}<br>`;
    totalEl.innerHTML = `${finalHoagieCal} current total`;

  }
});

toppingChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.id;
  selectedTopping = selectedTopping.split("--");
  
  if (selectedTopping[0] === "btn"){
    let topping = HoagieBuilder.getToppingCal();
    let toppingKey = selectedTopping[1];
    finalHoagieCal += topping[toppingKey];
    sandwichEl.innerHTML += `+${topping[toppingKey]} for ${selectedTopping[1]}<br>`;
    totalEl.innerHTML = `${finalHoagieCal} current total`;


  }
});







