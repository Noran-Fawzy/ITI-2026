let ball = {
    top: 100,
    left: 200,
    radius: 10,
    color: "red",

    calculateArea: function () {
        return Math.PI * this.radius ** 2;
    },
    toString: function () {
        return `Top: ${this.top}, Left: ${this.left}, Radius: ${this.radius}, Color: ${this.color}`;
    }
};

// Dot notation
console.log(ball.top);
console.log(ball.calculateArea());

// Bracket notation
console.log(ball["color"]);
console.log(ball["toString"]());

// Add properties
ball.speed = 20;
ball["weight"] = 5;
console.log(ball);

// Remove properties
delete ball.speed;
delete ball["weight"];
console.log(ball);

// Replace with Arrow Function
ball.calculateArea = () => Math.PI * ball.radius ** 2;
console.log(ball.calculateArea());