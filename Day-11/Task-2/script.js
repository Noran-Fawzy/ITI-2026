let balls = [
    {
        top: 100,
        left: 200,
        radius: 10,
        color: "red",
        calculateArea: function () {
            return Math.PI * this.radius ** 2;
        }
    },
    {
        top: 50,
        left: 150,
        radius: 15,
        color: "blue",
        calculateArea: function () {
            return Math.PI * this.radius ** 2;
        }
    },
    {
        top: 100,
        left: 50,
        radius: 20,
        color: "green",
        calculateArea: function () {
            return Math.PI * this.radius ** 2;
        }
    },
    {
        top: 70,
        left: 80,
        radius: 12,
        color: "yellow",
        calculateArea: function () {
            return Math.PI * this.radius ** 2;
        }
    }
];

// Print colors and areas
for (let ball of balls) {
    console.log(`Color: ${ball.color}`);
    console.log(`Area: ${ball.calculateArea()}`);
}

// Sort by top then left
balls.sort(function (a, b) {
    if (a.top === b.top) {
        return a.left - b.left;
    }
    return a.top - b.top;
});

// Display as table
console.table(balls);