// Create a function that takes in one parameter called “name” and returns an object that looks similar to the person object from JS Fundamentals Part II.

// Running this in your terminal as you create it can be super helpful, since we aren’t manipulating the DOM!

// The returned object should have a name property that is set to the value of the name argument that was passed into the function.
// Each returned person object should also have the other properties from JS Fundamentals Part II:
// distance_travelled - set this initially as zero
// say_name - should alert the object’s name property
// say_something - have it accept a parameter. It should then say for example “Jay says ‘I am cool’” if you pass ‘I am cool’ as an argument to this method.
// walk - have it alert for example “Jay is walking” and increase distance_travelled by 3
// run - have it alert for example “Jay is running” and increase distance_travelled by 10
// crawl - have it alert for example “Jay is crawling” and increase distance_travelled by 1

function personConstructor(name){
	var myObj = {
		name: name,
		distance_travelled: 0,
		say_name: function(){
			alert(myObj[0].name);
		},
		say_something: function(param){
			alert(myObj[0].name + " says " + param);
		},
		walk: function(){
			return myObj.move("walking", 3);
		},
		run: function(){
			return myObj.move("running", 10);
		},
		crawl: function(){
			return myObj.move("crawling", 1);
		},
		move: function(){
		console.log(`${myObj.name} is ${movement}`);
		myObj.distance_traveled += incrementDistance;
		return myObj;
		}
	}
	return myObj;
}


// Now create a ninjaConstructor that can be used to create Ninjas that each have a name, cohort, and belt-level. Give all of the Ninjas a “levelUp” method that increases their belt-level (Have all ninjas start at a yellow-belt).
function ninjaConstructor(name, cohort){
	var ninja = {
		name: name,
		cohort: cohort,
		belt_level: 1,
		levelUp: function(){
			ninja[0].belt_level += 1;
		}
	}
}