function HomeRobots(name, year, owner) {
	this.name = name;
	this.year = year;
	this.owner = owner;

	this.makeCoffee = function() {
		alert("Podaje kawę.");
	};
	this.blinkLights = function() {
		alert("Zapalam światło.");
	};
};

HomeRobots.prototype.maker = "Ob.Fa.Ro.";

function SpaceRobot(name, year, owner, homePlanet) {
	this.name = name;
	this.year = year;
	this.owner = owner;
	this. homePlanet = homePlanet;
};

SpaceRobot.prototype = new HomeRobots();

SpaceRobot.prototype.speak = function() {
	alert(this.name + " mówi: Panie, jeśli mogę coś powiedzieć...");
};

SpaceRobot.prototype.pilot = function() {
	alert(this.name + " mówi: Dopalacze? Czy one są ważne?");
};

var cepo = new SpaceRobot("Cepo", 2010, "Luke", "Earth");
cepo.speak();
cepo.pilot();
console.log("Twórcą " + cepo.name + " jest " + cepo.maker);

var simon = new SpaceRobot("Simon", 2000, "Future", "Mars");
simon.makeCoffee();
simon.blinkLights();
simon.speak();