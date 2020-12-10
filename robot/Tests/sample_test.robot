*** Settings ***

Resource  ../Resources/Common.robot

Test Setup  Common.Open test browser
Test Teardown  Common.Close test browser
 
*** Variables ***

*** Test Cases ***

Example of connecting to Lambdatest via Robot Framework 
	[Timeout]   ${TIMEOUT}

	# 4inch Button
	Scroll Element Into View  xpath://*[@id="btn--4 inch"]
	Page Should Contain Button  id:btn--4 inch
	Click Button  id:btn--4 inch
	Capture Page Screenshot
	# 6inch Button
	Scroll Element Into View  xpath://*[@id="btn--6 inch"]
	Page Should Contain Button  id:btn--6 inch
	Click Button  id:btn--6 inch
	Capture Page Screenshot
	# 10inch Button
	Scroll Element Into View  xpath://*[@id="btn--10 inch"]
	Page Should Contain Button  id:btn--10 inch
	Click Button  id:btn--10 inch
	Capture Page Screenshot

	# Cold Button
	Scroll Element Into View  xpath://*[@id="Cold"]
	Page Should Contain Button  id:Cold
	Click Button  id:Cold
	Capture Page Screenshot
	# Hot Button
	Scroll Element Into View  xpath://*[@id="Hot"]
	Page Should Contain Button  id:Hot
	Click Button  id:Hot
	Capture Page Screenshot

	# Cold Turkey
	Scroll Element Into View  xpath://*[@id="btn--Turkey"]
	Page Should Contain Button  id:btn--Turkey
	Click Button  id:btn--Turkey
	Capture Page Screenshot
	# Cold Ham
	Scroll Element Into View  xpath://*[@id="btn--Ham"]
	Page Should Contain Button  id:btn--Ham
	Click Button  id:btn--Ham
	Capture Page Screenshot
	# Cold Pepperoni
	Scroll Element Into View  xpath://*[@id="btn--Pepperoni"]
	Page Should Contain Button  id:btn--Pepperoni
	Click Button  id:btn--Pepperoni
	Capture Page Screenshot
	# Cold Roast Beef
	Scroll Element Into View  xpath://*[@id="btn--Roast Beef"]
	Page Should Contain Button  id:btn--Roast Beef
	Click Button  id:btn--Roast Beef
	Capture Page Screenshot
	# Cold Italian
	Scroll Element Into View  xpath://*[@id="btn--Italian"]
	Page Should Contain Button  id:btn--Italian
	Click Button  id:btn--Italian
	Capture Page Screenshot
	# Cold Roasted Veggie
	Scroll Element Into View  xpath://*[@id="btn--Roasted Veggie"]
	Page Should Contain Button  id:btn--Roasted Veggie
	Click Button  id:btn--Roasted Veggie
	Capture Page Screenshot
	
	# Hot Meatball
	Scroll Element Into View  xpath://*[@id="btn--Meatball"]
	Page Should Contain Button  id:btn--Meatball
	Click Button  id:btn--Meatball
	Capture Page Screenshot
	# Hot Cheesestake
	#Scroll Element Into View  xpath://*[@id="btn--Cheesestake"]
	#Page Should Contain Button  id:btn--Cheesestake
	#Click Button  id:btn--Cheesestake
	#Capture Page Screenshot
	# Hot Veggie
	Scroll Element Into View  xpath://*[@id="btn--Veggie"]
	Page Should Contain Button  id:btn--Veggie
	Click Button  id:btn--Veggie
	Capture Page Screenshot

	# Cheese American
	Scroll Element Into View  xpath://*[@id="btn--American"]
	Page Should Contain Button  id:btn--American
	Click Button  id:btn--American
	Capture Page Screenshot
	# Cheese Provolone
	Scroll Element Into View  xpath://*[@id="btn--Provolone"]
	Page Should Contain Button  id:btn--Provolone
	Click Button  id:btn--Provolone
	Capture Page Screenshot
	# Cheese Cheddar
	Scroll Element Into View  xpath://*[@id="btn--Cheddar"]
	Page Should Contain Button  id:btn--Cheddar
	Click Button  id:btn--Cheddar
	Capture Page Screenshot
	# Cheese Swiss
	Scroll Element Into View  xpath://*[@id="btn--Swiss"]
	Page Should Contain Button  id:btn--Swiss
	Click Button  id:btn--Swiss
	Capture Page Screenshot
	# Cheese Pepper Jack
	Scroll Element Into View  xpath://*[@id="btn--Pepper Jack"]
	Page Should Contain Button  id:btn--Pepper Jack
	Click Button  id:btn--Pepper Jack
	Capture Page Screenshot
	# Cheese No Cheese
	Scroll Element Into View  xpath://*[@id="btn--No Cheese"]
	Page Should Contain Button  id:btn--No Cheese
	Click Button  id:btn--No Cheese
	Capture Page Screenshot
	
	# Condiments Mayo
	Scroll Element Into View  xpath://*[@id="btn--Mayo"]
	Page Should Contain Button  id:btn--Mayo
	Click Button  id:btn--Mayo
	Capture Page Screenshot
	# Condiments Oil
	Scroll Element Into View  xpath://*[@id="btn--Oil"]
	Page Should Contain Button  id:btn--Oil
	Click Button  id:btn--Oil
	Capture Page Screenshot
	# Condiments Vinegar
	Scroll Element Into View  xpath://*[@id="btn--Vinegar"]
	Page Should Contain Button  id:btn--Vinegar
	Click Button  id:btn--Vinegar
	Capture Page Screenshot
	# Condiments Ranch Dressing
	Scroll Element Into View  xpath://*[@id="btn--Ranch Dressing"]
	Page Should Contain Button  id:btn--Ranch Dressing
	Click Button  id:btn--Ranch Dressing
	Capture Page Screenshot
	# Condiments //*[@id="btn--Yellow Mustard"]
	Scroll Element Into View  xpath://*[@id="btn--Yellow Mustard"]
	Page Should Contain Button  id:btn--Yellow Mustard
	Click Button  id:btn--Yellow Mustard
	Capture Page Screenshot
	# Condiments Ketchup
	Scroll Element Into View  xpath://*[@id="btn--Ketchup"]
	Page Should Contain Button  id:btn--Ketchup
	Click Button  id:btn--Ketchup
	Capture Page Screenshot
	# Condiments BBQ Sauce
	Scroll Element Into View  xpath://*[@id="btn--BBQ Sauce"]
	Page Should Contain Button  id:btn--BBQ Sauce
	Click Button  id:btn--BBQ Sauce
	Capture Page Screenshot
	# Condiments Siracha Sauce
	Scroll Element Into View  xpath://*[@id="btn--Siracha Sauce"]
	Page Should Contain Button  id:btn--Siracha Sauce
	Click Button  id:btn--Siracha Sauce
	Capture Page Screenshot
	# Condiments Ketchup
	Scroll Element Into View  xpath://*[@id="btn--Ketchup"]
	Page Should Contain Button  id:btn--Ketchup
	Click Button  id:btn--Ketchup
	Capture Page Screenshot

	# Toppings Lettuce
	Scroll Element Into View  xpath://*[@id="btn--Lettuce"]
	Page Should Contain Button  id:btn--Lettuce
	Click Button  id:btn--Lettuce
	Capture Page Screenshot
	# Toppings Tomato
	Scroll Element Into View  xpath://*[@id="btn--Tomato"]
	Page Should Contain Button  id:btn--Tomato
	Click Button  id:btn--Tomato
	Capture Page Screenshot
	# Toppings Pickle
	Scroll Element Into View  xpath://*[@id="btn--Pickle"]
	Page Should Contain Button  id:btn--Pickle
	Click Button  id:btn--Pickle
	Capture Page Screenshot
	# Toppings Peppers
	Scroll Element Into View  xpath://*[@id="btn--Peppers"]
	Page Should Contain Button  id:btn--Peppers
	Click Button  id:btn--Peppers
	Capture Page Screenshot
	# Toppings Cucumbers
	Scroll Element Into View  xpath://*[@id="btn--Cucumbers"]
	Page Should Contain Button  id:btn--Cucumbers
	Click Button  id:btn--Cucumbers
	Capture Page Screenshot
	# Toppings Jalapenos
	Scroll Element Into View  xpath://*[@id="btn--Jalapenos"]
	Page Should Contain Button  id:btn--Jalapenos
	Click Button  id:btn--Jalapenos
	Capture Page Screenshot
	# Toppings Grated Parmesan
	Scroll Element Into View  xpath://*[@id="btn--Grated Parmesan"]
	Page Should Contain Button  id:btn--Grated Parmesan
	Click Button  id:btn--Grated Parmesan
	Capture Page Screenshot
	# Toppings Spinach
	Scroll Element Into View  xpath://*[@id="btn--Spinach"]
	Page Should Contain Button  id:btn--Spinach
	Click Button  id:btn--Spinach
	Capture Page Screenshot
	# Toppings Salt
	Scroll Element Into View  xpath://*[@id="btn--Salt"]
	Page Should Contain Button  id:btn--Salt
	Click Button  id:btn--Salt
	Capture Page Screenshot
	# Toppings Black Pepper
	Scroll Element Into View  xpath://*[@id="btn--Black Peppers"] 
	Page Should Contain Button  id:btn--Black Peppers
	Click Button  id:btn--Black Peppers
	Capture Page Screenshot
